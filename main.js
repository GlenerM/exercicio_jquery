
$('form').on('submit', function(e){
    e.preventDefault();

    const linhaTarefa = $('#tarefas').val();
    const novaLinha = $('<li></li>');
    
    $(`<li id="${linhaTarefa}"</li>`).appendTo(novaLinha);
    $(`<li > ${linhaTarefa}</li>`).appendTo(novaLinha);
    $(novaLinha).appendTo('ul')
    $('#tarefas').val(' ')
})

