<?php

$file = fopen("../results.csv", "r");

$match = 0;
$nomatch = 0;

$t = time();

while (!feof($file)) {
    $line = fgets($file);
    // 1883-03-17,Northern Ireland,Wales,1,1,Friendly,Belfast,Ireland,FALSE
    if (preg_match('/^(\d{4}\-\d{2}\-\d{2}),(.+),(.+),(\d+),(\d+),.*$/i', $line, $m) ) {
        if ($m[4] == $m[5]) {
            echo "Empate: ";
        } elseif ($m[4] > $m[5]) {
            echo "Local:   ";
        } else {
            echo "Visitante: ";
        }
        printf("\t%s, %s [%d-%d]\n", $m[2], $m[3], $m[4], $m[5]);
        $match++;
    } else {
        $nomatch++;

    }
}

fclose($file);

print("\n\nmatch %d\nno match %d\n", $match, $nomatch);

printf("Tiempo: %d\n", time() - $t);