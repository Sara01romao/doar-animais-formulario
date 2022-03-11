
import './App.css';
import Input from './components/Input';
import Dog from './assets/icon-pata.svg' 
import { useEffect, useState } from 'react';

function App() {
  const [nome, setNome] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [cadastro, setCadastro] = useState({})
  const [estados, setEstados] = useState([])

  function handleSubmit(event){
      event.preventDefault();
    /*   console.log(`The name you entered was: ${nome}`);
      console.log(`The name you entered was: ${whatsapp}`); */
      setCadastro({...cadastro, nome:nome, telefone:whatsapp })

      console.table(cadastro)


  }


    useEffect(()=>{
      async function fecthEstados(){
          const response = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados/');
          const data = await response.json();
          console.table(data)
      }

      fecthEstados()

    },[])


  return (
    <div className="App">
      <div className='div1'>
          <img src={Dog} alt=''/>
          <h1>Doar animais</h1>
      </div>

      <div className='div2'>
        <h2>Cadastrar</h2>
        <form onSubmit={handleSubmit}>
          <Input title="Nome" id="nome" value={nome} setValue={setNome}/>
          <Input title="Whatsapp" id="whatsapp" value={whatsapp} setValue={setWhatsapp}/>

         <button>Cadastrar</button>
        </form>
        
      </div>
     
    </div>
  );
}

export default App;
