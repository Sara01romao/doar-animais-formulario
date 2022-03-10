
import './App.css';
/* import Animal from './components/Animal'; */
import Doador from './components/Doador';
import Pata from './assets/icon-pata.svg'

function App() {

  function handleSubmit(event){
      event.preventDefault();
  }


  return (
    <div className="App">
      <div className='div1'>
          <img src={Pata} alt=''/>
          <h1>Doar animais</h1>
      </div>

      <div className='div2'>
        <h2>Cadastrar</h2>
        <form onSubmit={handleSubmit}>
          <Doador/>
        
         <button>Cadastrar</button>
        </form>
        
      </div>
     
    </div>
  );
}

export default App;
