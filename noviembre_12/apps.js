$('#boton1').click(function(){
console.log('presionamos el botón 1')
})
$('#boton2').dblclick(function(){
    $(this).removeClass('btn btn-outline-warning');
    $(this).removeClass('btn btn-outline-info');
    $(this).addClass('btn-outline-danger');
});
$('#boton2').click(function(){
    $(this).removeClass('btn btn-outline-danger');
    $(this).removeClass('btn btn-outline-info');
    $(this).addClass('btn-outline-warning');
});
$('#boton2').mouseenter(function(){
    $(this).removeClass('btn btn-outline-danger');
    $(this).removeClass('btn btn-outline-warning');
    $(this).addClass('btn-outline-info');
});

$('button').click(function(){
    $(this).removeClass('btn-sm');
    $(this).addClass('btn-lg');
});

$('p').click(function(){
    $(this).addClass('d-none');
})
