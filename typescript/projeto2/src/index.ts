"use strict";
// como fazer jquery ao tsc
// terminal -> pasta -> npm install --save jquery
// and jQuery Definition
// npm install -D @types/jquery

$(function () {
    $(document).on("click", "#botao", function () {
        var valor1 = $("#input1").val();
        var valor2 = $("#input2").val();

        var resultado = (valor1);
        alert(resultado)
        
    
    });
});
