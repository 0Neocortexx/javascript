// chamar o backend
$.ajax({
  url: 'http://localhost:5000/obter_dados',
  type: 'GET',
  dataType: 'json', // dados recebidos em json
  success: exibirdados,
  error: function () {
    alert("ERRO ao contactar back-end, verifique :-/ o backend está sendo executado?");
  }
});
function exibirdados(retorno) {
  if (retorno.resultado == "ok") { // a operação deu certo?
    // obter valores enviados pelo backend
    var x = retorno.detalhes.x;
    var y = retorno.detalhes.y;
    var type = retorno.detalhes.type;

    // referência de conversão json para vetor (array):
    // https://stackoverflow.com/questions/13272406/convert-string-with-commas-to-array
    x = x.replace(/'/g, '"'); // substituir aspas simples por duplas, para ficar json raiz :-)
    y = y.replace(/'/g, '"');
    var xok = JSON.parse(x);
    var yok = JSON.parse(y);

    //console.log(xok); console.log(yok); console.log(type);

    var data = [
      {
        x: xok,
        y: yok,
        type: type
      }
    ];
    Plotly.newPlot('minhadiv', data);

  } else {
    alert("ERRO ao obter dados do backend: " + retorno.resultado + ":" + retorno.detalhes);
  }
}