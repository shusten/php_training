$('#form1')
.on('submit', function(e){
    e.preventDefault();

    var u_name = $('#name').val();
    var u_comment = $('#comment').val();

    console.log('Nome: ', u_name);
    console.log('Comentário: ', u_comment);

    data = {
        name: u_name,
        comment: u_comment
    };

    $.ajax({
        url: 'inserir.php',
        method: 'POST',
        data: data,
        dataType: 'json',
    })
    .done(function(result){
       alert('Resultado: ', result);
    })
    .fail(function(jqXHR, textStatus, errorThrown) {
        console.log('Requisição não concluída: ', textStatus, errorThrown);
    });
});
