<?php

try {
    $db = new PDO('mysql:host=localhost;dbname=alisveris', 'root', '');
} catch (PDOException $e) {
    print "Error!: " . $e->getMessage() . "<br/>";
    die();
}
?>