function atualiza_grafico() {
  // pegando o valor do range
  var girafa = $("#range_girafa").val();

  var data = [
    {
      x: ['giraffes', 'orangutans', 'monkeys'],
      y: [girafa, 14, 23],
      type: 'bar'
    }
  ];
  Plotly.newPlot('minhadiv', data);
}

// executa a função quando a página carregar
atualiza_grafico();