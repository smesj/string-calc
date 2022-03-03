<?php

namespace App\Http\Controllers;

use App\Models\CalcHistory;
use Illuminate\Http\Request;
use Inertia\Inertia;

class StringCalcController extends Controller
{
    public function index(Request $request)
    {
        $calcHistory = CalcHistory::all();
        return Inertia::render('PhpCalc', [
            'calcHistory' => $calcHistory 
        ]);
    }

    public function calculate(Request $request) {
        $inputArr = $request->input('arr');
        $delim = $request->input('delim');
        $total = 0;
        $negatives = [];
        $processedArr = [];
        foreach ($inputArr as $item) {
            $currNum = intval($item, 10);
            if (!is_numeric($currNum)) {
                $currNum = 0;
            }
            if ($currNum < 0){
                array_push($processedArr, $currNum);
                array_push($negatives, $currNum);
            } else if (!($currNum > 1000)) {
                array_push($processedArr, $currNum);
                $total = $total + $currNum;
            }
        }

        $stringArr = '';
        foreach ($processedArr as $value) {
            $stringArr .= $value . ',';
        }
        rtrim($stringArr, ',');

        if (count($negatives) > 0) {
            $thing = [
                'calc_string' => rtrim($stringArr, ','),
                'total' => "Error: negative numbers used",
                'delimiter' => $delim,
                'error' => true
            ];
        } else {
            $thing = [
                'calc_string' => rtrim($stringArr, ','),
                'total' => $total,
                'delimiter' => $delim,
            ];
        }

        // dd($thing);
        $entry = new CalcHistory();
        $entry->fill($thing);
        $entry->save();


        return redirect()->back()->with('message', 'sah sah');
    }
}
