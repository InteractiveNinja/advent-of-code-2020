<?php 

$input = json_decode(file_get_contents("ninja_input.json"),true);
$input2 = json_decode(file_get_contents("coal_input.json"),true);


genOutput($input,"ninja",json_decode(file_get_contents("seatsGen/ninja.json"),true));
genOutput($input2,"coal",json_decode(file_get_contents("seatsGen/coal.json"),true));


function genOutput($input,$who,$seatlist)
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
    // $count = highestNumer($currentrows[0],$currentcolums[0],$count);
    $seatlist = checkSeat($currentrows[0],$currentcolums[0],$seatlist);
}
saveFile($seatlist,$who);
outputFile(json_decode(file_get_contents("seatsGen/".$who.".json"),true),$who);
}


function outputFile($seats,$who){
    echo "ZEILEN FÜR " . $who . "<br>";
    for ($i=0; $i < count($seats); $i++) { 
        if(!$seats[$i]["status"]) echo($seats[$i]["location"] . "<br>");
    }
    echo "<hr>" . "<br>";
}

function saveFile($seatlist,$who)
{
    file_put_contents("seatsGen/".$who.".json",json_encode($seatlist,JSON_PRETTY_PRINT));
}


function checkSeat($number1,$number2,$_seats)
{
    $seat = $number1 . "-" . $number2;
    $key = 0;
    $location = "";
    for ($i=0; $i < count($_seats); $i++) { 
        $line = $_seats[$i];
        if($line["location"] == $seat) {
            $key = $i;
        break;
        }
    }
    $_seats[$key]["status"] = true;
    return $_seats;
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