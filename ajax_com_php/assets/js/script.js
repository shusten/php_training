let dataEnv = {};

fetch('../../env.json')
    .then(response => response.json())
    .then(env => {
        dataEnv = env;
    })
    .catch(error => console.error(
        'Houve um erro ao tentar recuperar as variáveis de ambiente:', error
        )
    );

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
        url: 'http://' + dataEnv.URL + '/inserir.php',
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
