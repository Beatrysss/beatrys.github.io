function converterMoeda() {
  let valor = parseFloat(document.getElementById("moedaValor").value);
  let de = document.getElementById("moedaDe").value;
  let para = document.getElementById("moedaPara").value;

  let taxas = {
      real: { dolar: 0.20, libra: 0.16 },
      dolar: { real: 5.0, libra: 0.80 },
      libra: { real: 6.25, dolar: 1.25 }
  };

  let resultado = valor * (taxas[de][para] || 1);
  document.getElementById("resultadoMoeda").innerText = `Resultado: ${resultado.toFixed(2)} ${para}`;
}

function converterTemperatura() {
  let valor = parseFloat(document.getElementById("tempValor").value);
  let de = document.getElementById("tempDe").value;
  let para = document.getElementById("tempPara").value;

  let resultado;
  if (de === "celsius" && para === "fahrenheit") {
      resultado = (valor * 9/5) + 32;
  } else if (de === "fahrenheit" && para === "celsius") {
      resultado = (valor - 32) * 5/9;
  } else {
      resultado = valor;
  }

  document.getElementById("resultadoTemp").innerText = `Resultado: ${resultado.toFixed(2)} °${para.charAt(0).toUpperCase()}`;
}

function converterComprimento() {
  let valor = parseFloat(document.getElementById("compValor").value);
  let de = document.getElementById("compDe").value;
  let para = document.getElementById("compPara").value;

  let fatorConversao = {
      "anos-luz": { km: 9.461e12 },
      "km": { "anos-luz": 1 / 9.461e12 }
  };

  let resultado = valor * (fatorConversao[de][para] || 1);
  document.getElementById("resultadoComp").innerText = `Resultado: ${resultado.toExponential(2)} ${para}`;
}