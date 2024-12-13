#!/usr/bin/perl

use strict;
use warnings;

my $t = time;

open(my $f, "<../results.csv") or die ("no file: $!");

my $match = 0;
my $nomatch = 0;

while(<$f>) {
    chomp;
    # 1872-11-30,Scotland,England,0,0,Friendly,Glasgow,Scotland,FALSE
    if (m/^([\d]{4,4})\-.*?,(.*?),(.*?),(\d+),(\d+),.*$/) {
        if ($5 > $4) {
            printf("%s: %s (%d) - (%d) %s\n", $1, $2, $4, $5, $3);
            $match++;
        }
    } else {
        $nomatch++;
    }
}

close($f);

printf("%d matches\nand %d no matches\nfound where away won\ntardo %d segundos\n", $match, $nomatch, time() - $t);