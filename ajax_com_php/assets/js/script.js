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
        $('#name').val('');
        $('#comment').val('');
        getComments();          
    })
    .fail(function(jqXHR, textStatus, errorThrown) {
        console.error('Requisição não concluída: ' + textStatus, errorThrown);
    });
});

function getComments() {
    $.ajax({
        url: `http://${ENV}/selecionar.php`,
        method: 'GET',
        dataType: 'json'
    }).done(displayComments);
}

function displayComments(comments) {
    console.log(comments);

    var commentHtml = comments.map(comment => `
        <div class="b_comm">
            <h4>${comment.name}</h4>
            <p>${comment.comment}</p>
        </div>
    `).join('');

    $('.box_comment').prepend(commentHtml);
}

getComments();