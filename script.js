function abrirMenu() {
  document.getElementById('sideMenu').style.left = '0';
}

function fecharMenu() {
  document.getElementById('sideMenu').style.left = '-300px';
}

function verificarPaciente() {
  const busca = document.getElementById('busca').value.trim();
  const resultado = document.getElementById('resultado');

  const baseDados = [
    { nome: 'João Silva', cpf: '123456', codigo: 'abc1234', dias: 7, cid: 'A00', unidade: 'Unidade Central' },
    { nome: 'Maria Souza', cpf: '654321', codigo: 'XYZ789', dias: 10, cid: 'B99', unidade: 'Posto Norte' }
  ];

  const encontrado = baseDados.find(p =>
    p.nome.toLowerCase() === busca.toLowerCase() ||
    p.cpf === busca ||
    p.codigo.toLowerCase() === busca.toLowerCase()
  );

  if (!busca) {
    resultado.innerHTML = '<p style="color:red">Por favor, informe um nome, CPF ou código válido.</p>';
  } else if (encontrado) {
    resultado.innerHTML = `
      <p><strong>Nome:</strong> ${encontrado.nome}</p>
      <p><strong>CPF:</strong> ${encontrado.cpf}</p>
      <p><strong>Código:</strong> ${encontrado.codigo}</p>
      <p><strong>Dias de Afastamento:</strong> ${encontrado.dias}</p>
      <p><strong>CID:</strong> ${encontrado.cid}</p>
      <p><strong>Unidade Atendida:</strong> ${encontrado.unidade}</p>
    `;
  } else {
    resultado.innerHTML = '<p style="color:red">Paciente não encontrado.</p>';
  }
}