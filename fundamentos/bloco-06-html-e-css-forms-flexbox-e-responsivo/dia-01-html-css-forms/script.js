function criandoEstados () {
  const state = document.getElementById('state');
  const allStates = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins', 'Distrito Federal']

  for (let index = 0; index < allStates.length; index += 1) {
    let options = document.createElement('option');
    options.innerText = allStates[index];
    options.value = allStates[index];
    state.appendChild(options);
  }
}
criandoEstados();