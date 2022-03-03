import React from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Head } from "@inertiajs/inertia-react";
import stack from "../tech-stack.png";

export default function Dashboard(props) {
    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Welcome
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <div className="text-xl">Hey There,</div>
                            <p className="p-2">
                                Included here is the implementation of the
                                string calcuator logic as outlined in the take
                                home assignment. The application includes auth,
                                database and can be easily spun up locally via
                                docker/docker compose.
                            </p>
                            <p className="p-2">
                                To run this application locally requires the
                                dependencies{" "}
                                <span className="bg-slate-200 w-content">
                                    <code>
                                        PHP 8.1, Composer 2.2.7, Docker,
                                        Docker-Compose
                                    </code>
                                    .
                                </span>
                            </p>
                            <p>
                                You may easily install dependencies using the
                                following docker command
                            </p>
                            <span className="bg-slate-200 w-content">
                                <code>
                                    docker run --rm \<br />
                                    -u "$(id -u):$(id -g)" \<br />
                                    -v $(pwd):/var/www/html \<br />
                                    -w /var/www/html \<br />
                                    laravelsail/php81-composer:latest \<br />
                                    composer install --ignore-platform-reqs
                                </code>
                            </span>
                            <p className="p-2">
                                I have included a purely JavaScript
                                implementation as well as a back end PHP
                                implementation for the calculator.
                            </p>
                            <p className="p-2">
                                The JS tests can be run via{" "}
                                <span className="bg-slate-200 w-content">
                                    <code>npm run test</code>.
                                </span>{" "}
                                It should be noted that all calculator entries
                                here only live in state and will not survive
                                refreshes or navigations.
                            </p>
                            <p className="p-2">
                                The PHP tests can be run via{" "}
                                <span className="bg-slate-200 w-content">
                                    <code>???</code>.
                                </span>{" "}
                                It should be noted that all calculator entries
                                will be stored in the connected MySQL database
                                and the results will be persisted.
                            </p>
                            <p className="p-2">
                                All source code can be found at{" "}
                                <a
                                    href="https://github.com/smesj/string-calc"
                                    className="underline text-gray-900 dark:text-white"
                                >
                                    https://github.com/smesj/string-calc
                                </a>
                            </p>

                            <div className="p-2">
                                <p className="mb-2">
                                    I would have liked to post some of the
                                    recent work I have been doing but sadly, the
                                    work is proprietary. However I think I can
                                    at least give a high level overview of the
                                    tech stack used in my most recent project.
                                </p>
                                <p>
                                    Below you will find a simple diagram
                                    outlining the current{" "}
                                    <a
                                        href="https://www.casecare.ca/"
                                        className="underline text-gray-900 dark:text-white"
                                    >
                                        Case Care
                                    </a>{" "}
                                    tech stack currently in use to hopefully
                                    reflect a few of my competencies.
                                </p>
                                <div className="flex justify-center">
                                    <img src={stack} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
