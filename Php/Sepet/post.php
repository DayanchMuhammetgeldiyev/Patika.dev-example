<?php 
require 'config.php';

$return = array();

$query = $db->prepare('insert into sepet(kullaniciId,urunId,urunAdet) values(:kullaniciId,:urunId,:urunAdet)');


$query->execute([
    'kullaniciId' => $_SESSION['kullaniciId'],
    'urunId' => $_POST['urunId'],
    'urunAdet' => $_POST['urunAdet']
]);

if($query->rowCount()) {
    $return['status'] = 'success';
} else {
    $return['status'] = 'error';
}