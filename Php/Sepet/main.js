$('button[name=sepeteEkle]').click(function () {
    var urunId = $(this).attr('urunId');
    var urunAdi = $('input[name=urunAdet' + urunId + ']').val();
    
    
    $.ajax({
        url: 'post.php',
        type: 'post',
        data: {
            'urunId': urunId,
            'urunAdi': urunAdi
        },
        dataType: 'json',
        success: function (resp) {
            alert(resp.message);
        }
    });
});