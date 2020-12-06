<?php 

$input = json_decode(file_get_contents("ninja_input.json"),true);
$input2 = json_decode(file_get_contents("coal_input.json"),true);


genOutput($input,"Ninja");
genOutput($input2,"Coal");


function genOutput($input,$who)
{
   // Generiere Rows
$seats = [];

for ($i=0; $i < 128; $i++) { 
    $seats[] = $i;
}
// Generiere Rows
$colums = [];

for ($i=0; $i < 8; $i++) { 
    $colums[] = $i;
}

$count = 0;



//Checke Rows
for ($i=0; $i < count($input); $i++) { 
    $line = $input[$i];
    // $line = "FBFBBFFRLR";
    $currentrows = $seats;
    $currentcolums = $colums;
    for ($ii=0; $ii < 7; $ii++) { 
        $char = $line[$ii];
        $currentrows = checkRow($char,$currentrows);
    }
    for ($ii=7; $ii < 10; $ii++) { 
        $char = $line[$ii];
        $currentcolums = checkColum($char,$currentcolums);
    }
    $count = highestNumer($currentrows[0],$currentcolums[0],$count);
}

echo("Code von "  . $who . ": " .$count . "<br>");
}




function highestNumer($number1,$number2,$count)
{

    $num = ($number1 * 8) + $number2;
    if($num > $count) {
        return $num;
    }    
    return $count;

}




function checkRow($char,$_seats)
{
    
    if($char == "F") {
        return array_splice($_seats,0,count($_seats)/2);
    } else {
        return array_splice($_seats,count($_seats)/2);
    }

}

function checkColum($char,$_seats)
{
   
    
    if($char == "L") {
        return array_splice($_seats,0,count($_seats)/2);
       
    } else {
        return array_splice($_seats,count($_seats)/2);
    }

}

?>