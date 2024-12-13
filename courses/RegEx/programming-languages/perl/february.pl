#!/usr/bin/perl

use strict;
use warnings;

my $t = time;

open(my $f, "<../results.csv") or die ("no file: $!");

my $match = 0;
my $nomatch = 0;

while(<$f>) {
    chomp;

    if (m/^[\d]{4,4}\-02.*$/) {
        print $_."\n";
        $match++;
    } else {
        $nomatch++;
    }
}

close($f);

printf("%d matches in a February found\n", $match);