import React, { useState } from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Head } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";

export default function PhpCalc(props) {

    const [calcString, setCalcString] = useState("");

    function classNames(...classes) {
        return classes.filter(Boolean).join(" ");
    }

    function handleInputChange(event) {
        setCalcString(event.target.value);
    }

    const handleSubmit = (e, input) => {
        e.preventDefault();
        setCalcString("");
        let inputArr = [];
        const inputMatch = input.substring(0, input.indexOf("\\n") +2).match(/[^//].*(?=\\n)/g);
        const inputDelim = inputMatch ? inputMatch[0] : null;

        if (inputDelim) {
            const stringStartIndex = input.indexOf("\\n");
            const inputString = input.substring(stringStartIndex + 2);
            inputArr = inputString.replace(/\\n/g, "").split(inputDelim);
        } else {
            inputArr = input.replace(/\\n/g, "").split(",");
        }


        Inertia.post(route("php.calc"), {arr: inputArr, delim: inputDelim});
    }

    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    PHP only string calculator
                </h2>
            }
        >
            <Head title="JavaScript" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-8">
                        <h1 className="mb-8 text-xl">Calculator</h1>
                        <div className="flex space-x-4">
                            <div className="w-1/2">
                                <form onSubmit={(e) => handleSubmit(e, calcString)}>
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Enter a string to calculate
                                    </label>
                                    <div className="mt-1 flex rounded-md shadow-sm">
                                        <div className="relative flex items-stretch flex-grow focus-within:z-10">
                                            <input
                                                name="string"
                                                id="string"
                                                className="focus:ring-indigo-500 focus:border-indigo-500 block w-full rounded-none rounded-l-md pl-2 sm:text-sm border-gray-300"
                                                placeholder="1,2,3"
                                                value={calcString}
                                                onChange={(e) =>
                                                    handleInputChange(e)
                                                }
                                            />
                                        </div>
                                        <button
                                            type="submit"
                                            className="-ml-px relative inline-flex items-center space-x-2 px-4 py-2 border border-gray-300 text-sm font-medium rounded-r-md text-gray-700 bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-6 w-6"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                strokeWidth={2}
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                                                />
                                            </svg>
                                            <span>Calculate</span>
                                        </button>
                                    </div>
                                </form>
                            </div>
                            <div className="w-1/2">
                                <label className="block text-sm font-medium text-gray-700">
                                    Calculation output
                                </label>
                                <div>
                                    {props.calcHistory.map((entry, i) => (
                                        <div
                                            key={i}
                                            className="py-2 flex justify-between"
                                        >
                                            <span
                                                className={classNames(
                                                    entry.error
                                                        ? "text-red-500"
                                                        : ""
                                                )}
                                            >
                                                {entry.calc_string
                                                    .toString()
                                                    .replace(/,/g, " + ")}{" "}
                                                = {entry.total}
                                            </span>
                                            {entry.delimiter && (
                                                <div>
                                                    <span>Delimiter </span>"
                                                    {entry.delimiter}"
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}