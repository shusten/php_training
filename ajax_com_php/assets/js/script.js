const ENV = 'localhost:8081';

$('#form1')
.on('submit', function(e){
    e.preventDefault();

    var u_name = $('#name').val();
    var u_comment = $('#comment').val();

    data = {
        name: u_name,
        comment: u_comment
    };

    $.ajax({
        url: `http://${ENV}/inserir.php`,
        method: 'POST',
        data: data,
        dataType: 'json',
    })
    .done(function(result){
       alert('Resultado: ' + result);
    })
    .fail(function(jqXHR, textStatus, errorThrown) {
        console.error('Requisição não concluída: ' + textStatus, errorThrown);
    });
});
