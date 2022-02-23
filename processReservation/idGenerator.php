<?php

//add zero if day or month are single number
function doubleNum($num)
{
    if (strlen($num) < 2) {
        $num = 0 . $num;
    }
    return $num;
}
////////////////////////////////

function dateId($date)
{
    $date = explode('-', $date);
    list($year_, $month_, $day_) = $date;
    $month_ = doubleNum($month_);
    $day_ = doubleNum($day_);
    return $year_ . $month_ . $day_;
}
//////////////////////////

function nameId($name)
{

    $id = '';
    $name = str_split($name);
    if (count($name) > 3) {
        $name = array_slice($name, 2);
    }
    foreach ($name as $char) {
        $ch = ord($char) - 96;
        $id = $id .  strval($ch);
    }
    if (strlen($id) < 5) {
        $id = str_pad($id, 5, '0', STR_PAD_LEFT);
    }
    return $id;
}


///////////////////////////////////////////
$dateString = dateId($data['date']);

$timeString = $data['hour'] . $data['minute'];


if (strlen($timeString) < 6) {
    $timeString = str_pad($timeString, 6, '0', STR_PAD_LEFT);
}



$nameString = nameId($data['name']);

//////////////////////////////////////////////////////
//$randomId from processReservation

$genId = $randomId . $dateString . $timeString . $nameString;