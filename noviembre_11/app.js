$('button').on('click', function(){
    let Tasa =parseFloat($('#Tasa').val());
    let Monto =parseFloat($('#Monto').val());
    let Plazo =parseFloat($('#Plazo').val());

    let TasaMensual= Tasa/100/12;
    let Cuota=(Monto * TasaMensual) / (1 - Math.pow(1+TasaMensual, -Plazo));
    $('#Cuota').text (Cuota);
    $('#Total').text(Cuota*Plazo);
})