
import './App.css';
import Input from './components/Input';
import Dog from './assets/icon-pata.svg' 
import { useEffect, useState } from 'react';


function App() {
  const [nome, setNome] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [cadastro, setCadastro] = useState({});
  const [estado, setEstado] = useState('');
  const [estados, setEstados] = useState([]);
  const [cidades, setCidades] = useState([]);
  const [cidade, setCidade] = useState('');

  console.log(cidade, "selecionado")

  function handleSubmit(event){
      event.preventDefault();
    /*   console.log(`The name you entered was: ${nome}`);
      console.log(`The name you entered was: ${whatsapp}`); */
      setCadastro({...cadastro, nome:nome, telefone:whatsapp })

      console.table(cadastro)


  }

  useEffect(()=>{
      async function fecthCidade(){
        const response = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estado}/distritos`);
        const data = await response.json();
        setCidades(data)
      }

      fecthCidade()
  },[estado])


    useEffect(()=>{
      async function fecthEstados(){
          const response = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome');
          const data = await response.json();
          setEstados(data);
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

          <select id="estado" value={estado} onChange={({target}) => setEstado(target.value)}>
               <option value='' disabled>Selecione</option>
              {estados.map((uf)=> <option value={uf.sigla} key={uf.id}>{uf.sigla}</option>)}
          </select>
              
          {estado === ''? 
          <select id="cidade" value={cidade} onChange={({target}) => setCidade(target.value)}>
               <option value='' disabled>Selecione</option>
          </select>:

            <select id="cidade" value={cidade} onChange={({target}) => setCidade(target.value)}>
              <option value='' disabled>Selecione</option>
              {cidades.map((cidade)=> <option value={cidade.nome} key={cidade.id}>{cidade.nome}</option>)}
            </select>
          }
              
         
          {console.log(estado)}
         <button>Cadastrar</button>
        </form>
        
      </div>
     
    </div>
  );
}

export default App;
