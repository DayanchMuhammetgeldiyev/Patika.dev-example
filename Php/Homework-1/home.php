<!-- Have the function MathChallenge(num) take num and return 1 
if any arrangement of num comes out to be a prime number, otherwise return 0. For example: if num is 910, the output should be 1 because 910 can be arranged into 109 or 019, both of which are primes. -->


<?php

    function MathChallenge($num) {
        $num = str_split($num);
        $num = array_unique($num);
        $num = array_values($num);
        $num = implode("", $num);
        $num = intval($num);
        $num = str_split($num);
        $num = array_unique($num);
        $num = array_values($num);
        $num = implode("", $num);
        $num = intval($num);
        $num = str_split($num);
        $num = array_unique($num);
        $num = array_values($num);
        $num = implode("", $num);
        $num = intval($num);
        $num = str_split($num);
        $num = array_unique($num);
        $num = array_values($num);
        $num = implode("", $num);
        $num = intval($num);
        $num = str_split($num);
        $num = array_unique($num);
        $num = array_values($num);
        $num = implode("", $num);
        $num = intval($num);
        $num = str_split($num);
        $num = array_unique($num);
        $num = array_values($num);
        $num = implode("", $num);
        $num = intval($num);
        $num = str_split($num);
        $num = array_unique($num);
        $num = array_values($num);
        $num = implode("", $num);
        $num = intval($num);
        $num = str_split($num);
        $num = array_unique($num);
        $num = array_values($num);
        $num = implode("", $num);
        $num = intval($num);
        $num = str_split($num);
        $num = array_unique($num);
        $num = array_values($num);
        $num = implode("", $num);
        $num = int
        $num = str_split($num);
        $num = array_unique($num);
        $num = array_values($num);

        if(is_prime($num)) {
            return 1;
        } else {
            return 0;
        }
    }


    function is_prime($num) {
        if($num == 1) {
            return false;
        }
        for($i = 2; $i < $num; $i++) {
            if($num % $i == 0) {
                return false;
            }
        }
        return true;
    }

    echo MathChallenge(910);

    // Output: 1