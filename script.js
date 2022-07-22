function media() {
  let nome = document.getElementById("name").value;
  let notaA = parseFloat(document.getElementById("nota1").value);
  let notaB = parseFloat(document.getElementById("nota2").value);

  let media = (notaA + notaB) / 2;

  if (media >= 8) {
    alert(
      `Uau! O Aluno(a) ${nome} foi aprovado com Certeza e a sua média foi ${media}`
    );
  } else if (media > 5 && media <= 7) {
    alert(`Parabens, O Aluno(a) ${nome} aprovado! Media é: ${media}`);
  } else {
    alert(`Reprovado!O Aluno(a) ${nome} a sua media foi: ${media}`);
  }
}
