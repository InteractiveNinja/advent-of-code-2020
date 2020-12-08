<?php
$file = file_get_contents('test-input.txt');
$files = explode(',', $file);
$jumpArray = [];
$accCounter = 0;
for ($i = 0; $i < count($files); $i++) {
    $operator = explode(' ', $files[$i]);
    if (trim($operator[0]) == 'acc') {

        if (strpos($files[$i], '+') != false) {
            $numberGen = explode('+', $files[$i]);
            $accCounter += (int)$numberGen[1];
        }
        if (strpos($files[$i], '-') != false) {
            $numberGen = explode('-', $files[$i]);
            $accCounter -= (int)$numberGen[1];
        }
    }
    if (strpos($files[$i], 'jmp') != false) {

        if (strpos($files[$i], '+') != false) {
            $numberGen = explode('+', $files[$i]);
            $newi = $i + (int)$numberGen[1];
            if (!in_array($newi, $jumpArray)) {
                // $jumpArray[] = $i;
                $i = $newi;
                echo($files[$i].' '. $i. '<br>'); 
            } else {
                break;
            }
        }
        if (strpos($files[$i], '-') != false) {
            $numberGen = explode('-', $files[$i]);
            $newi = $i - (int)$numberGen[1];
            if (!in_array($newi, $jumpArray)) {
                // $jumpArray[] = $i;
                $i = $newi;
                echo($files[$i].' '. $i. '<br>'); 
            } else {
                break;
            }
        }  
    }
    $jumpArray [] = $i;
}
echo ('<br>'.$accCounter);
