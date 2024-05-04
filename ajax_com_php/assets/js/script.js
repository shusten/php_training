const ENV = 'localhost:8081';

$(document).ready(function() {
    $('#form1').on('submit', function(e) {
        e.preventDefault();
        addComment();
    });

    getComments();
});

function addComment() {
    var u_name = $('#name').val();
    var u_comment = $('#comment').val();

    var data = {
        name: u_name,
        comment: u_comment
    };

    $.ajax({
        url: `http://${ENV}/inserir.php`,
        method: 'POST',
        data: data,
        dataType: 'json',
    })
    .done(function(result) {
        clearForm();
        getComments();          
    })
    .fail(function(jqXHR, textStatus, errorThrown) {
        showError('Erro ao adicionar comentário. Por favor, tente novamente.');
    });
}

function getComments() {
    $.ajax({
        url: `http://${ENV}/selecionar.php`,
        method: 'GET',
        dataType: 'json'
    }).done(displayComments)
    .fail(function(jqXHR, textStatus, errorThrown) {
        showError('Erro ao buscar comentário. Por favor, tete recarregar a página.');
    });
}

function displayComments(comments) {
    comments.reverse();
    var commentHtml = comments.map(comment => `
        <div class="b_comm">
            <h4>${comment.name}</h4>
            <p>${comment.comment}</p>
        </div>
    `).join('');

    $('.box_comment').html(commentHtml);
}

function showError(message) {
    alert(message);
}

function clearForm() {
    $('#name').val('');
    $('#comment').val('');
}
