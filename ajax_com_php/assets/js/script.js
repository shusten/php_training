$('#form1')
.on('submit', function(e){
    e.preventDefault();

    var u_name = $('#name').val();
    var u_comment = $('#comment').val();

    console.log('Nome: ', u_name);
    console.log('Comentário: ', u_comment);

});
