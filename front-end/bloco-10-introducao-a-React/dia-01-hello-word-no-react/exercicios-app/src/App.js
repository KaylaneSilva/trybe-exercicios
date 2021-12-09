import './App.css';

const Task = (value) => {
  return (
    <li className='App'>{value}</li>
  );
};
const Atividades = ['Acordar', 'Tomar banho', 'Tomar café', 'Ir ao mercado'];

function App() {
  return (
    <ol>{Atividades.map((tarefa) => Task(tarefa))}</ol>
  );
}

export default App;
