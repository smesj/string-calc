<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CalcHistory extends Model
{
    use HasFactory;

    protected $table = 'calc-history';

    protected $fillable = ['calc_string', 'total', 'delimiter', 'error'];

    public $timestamps = false;
}
