<?php
function traingle($num){
    for($i=1;$i<=$num;$i++){
        for($j=1;$j<=$i;$j++){
            echo "0";
        }
        echo "/n";
    }
}
traingle(9);
?>