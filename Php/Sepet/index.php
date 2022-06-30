<?php require 'config.php'; ?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sepet</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <div class="wrapper">
        <div class="left">
            Ürünler

            <table>
                <thead>
                    <tr>
                        <td>Ürün Adı</td>
                        <td>Fiyatı</td>
                        <td>İşlem</td>
                    </tr>
                </thead>
                <tbody>
                    <?php
                    $query = $db->query("SELECT * FROM urunler");
                    $urunler = $query->fetchAll(PDO::FETCH_ASSOC);
                    foreach ($urunler as $urun) :
                    ?>
                    <tr>
                        <td><?= $urun['urunAdi'] ?></td>
                        <td><?= $urun['urunFiyati'] ?></td>
                        <td><input type="text" name="urunAdet <?= $urun['urunId'] ?>" value="" placeholder="Adet">
                            <button urunId='<?= $urun['urunId']?>' type="button" name="sepeteEkle"> Sepete
                                Ekle</button>
                        </td>
                    </tr>
                    <?php endforeach; ?>
                </tbody>
            </table>
        </div>
        <div class="right">
            <h3>Sepetiniz</h3>
            <ul>
                <li>Kedi Maması -8.95 (1 Adet)</li>
                <li>Köpek Maması -7.95</li>
            </ul>
            <div class="toplam">
                Genel Toplam: 20.90 TL
            </div>
        </div>
    </div>

</body>


</html>