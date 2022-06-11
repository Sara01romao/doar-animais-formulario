import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.css';
import {Input} from './components/Input';
import dogIcon from './assets/icon-pata.svg'; 
import userIcon from './assets/user.svg';
import dogFace from './assets/dogs.svg';
import camera from './assets/camera-icon.svg';



export function App() {
  const [nome, setNome] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [cadastro, setCadastro] = useState({});
  const [estado, setEstado] = useState('');
  const [estados, setEstados] = useState([]);
  const [cidades, setCidades] = useState([]);
  const [cidade, setCidade] = useState('');
  const [animal, setAnimal] = useState('')
  const [sexo, setSexo] = useState('');
  const [imagem, setImagem] = useState('');


  function handleSubmit(event){
      event.preventDefault();
    
      setCadastro({...cadastro, nome:nome, telefone:whatsapp, estado:estado, cidade:cidade, img:imagem, sexo:sexo})
      console.log(cadastro)

      toast(`${animal} Cadastrado com sucesso :)`)

      setNome('');
      setWhatsapp('');
      setCidade('');
      setEstado('');
      setAnimal('');
      setSexo('');
      setImagem('');

      localStorage.setItem('animalCadastro',  JSON.stringify(cadastro))
  }
  
  useEffect(()=>{
    async function fecthEstados(){
        const response = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome');
        const data = await response.json();
        setEstados(data);
    }

    fecthEstados()

  },[])

  useEffect(()=>{
      async function fecthCidade(){
        const response = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estado}/distritos?orderBy=nome`);
        const data = await response.json();
        setCidades(data)
      }

      fecthCidade()
  },[estado])

  return (
    <div className="App">
      <div className='div1'>
          <img src={dogIcon} alt=''/>
          <h1>Doar animais</h1>
      </div>

      <div className='div2'>
        <h2>Cadastrar</h2>
        <form onSubmit={handleSubmit}>
          <div className='userInfo'>
             <div className='infoTitle'>
               <img src={userIcon} alt="Informação usuário"/>
               <h3>Informações do Doador</h3>
             </div>

              <Input title="Nome" id="nome" value={nome} setValue={setNome}/>
              <Input title="Whatsapp" id="whatsapp" value={whatsapp} setValue={setWhatsapp} mask="(99)99999-9999"/>

              <div className='inputGrid'>
                  <div>
                        <label htmlFor="estado">Estado</label><br/>
                        <select id="estado" value={estado} onChange={({target}) => setEstado(target.value)}>
                            <option value='' disabled>Selecione</option>
                            {estados.map((uf)=> <option value={uf.sigla} key={uf.id}>{uf.sigla}</option>)}
                        </select>
                    </div>

                    <div>
                      <label htmlFor="cidade">Cidade</label><br/>
                            {estado === ''
                        ? 
                            <select id="cidade" value={cidade} onChange={({target}) => setCidade(target.value)}>
                                <option value='' disabled>Selecione</option>
                            </select>
                        :

                            <select id="cidade" value={cidade} onChange={({target}) => setCidade(target.value)}>
                              <option value='' disabled>Selecione</option>
                              {cidades.map((cidade)=> <option value={cidade.nome} key={cidade.id}>{cidade.nome}</option>)}
                            </select>
                        }
                  </div>
              </div>

          </div>

          <hr/>

          <div className='petInfo'>
              <div className='infoTitle'>
                <img src={dogFace} alt="Informação usuário"/>
                <h3>Informações do Animal</h3>
              </div>

              <div className='inputGrid2'>
                      <div>
                          <label htmlFor="animal">Animal</label><br/>
                          <select id="animal" value={animal} onChange={({target}) => setAnimal(target.value)}>
                              <option value='' disabled>Selecione</option>
                              <option value='Cachorro'>Cachorro</option>
                              <option value='Gato'>Gato</option>
                              <option value='Coelho'>Coelho</option>
                              <option value='Passáro'>Pássaro</option>
                              
                          </select>
                      </div>

                      <div>
                        <label htmlFor="sexo">Sexo</label><br/>
                        <div className='sexoContent'>
                            <label>
                              Fêmea
                                <input
                                  type="radio"
                                  value="Fêmea"
                                  name="sexo"
                                  onChange={({target}) => setSexo(target.value)}
                                />
                            </label>

                            <label>
                              Macho
                                <input
                                  type="radio"
                                  value="Macho"
                                  name="sexo"
                                  onChange={({target}) => setSexo(target.value)}
                                />
                            </label>
                        </div>
                        
                       
                      </div>
              </div>

               <div>        
                <label htmlFor='imagem'>Foto</label>
                <div className='addImg'> 
                  <img src={camera} alt="Adiconar imagem"/>
                  <input type="file" id='imagem' title="" value={imagem} accept="image/png, image/jpeg" onChange={({target}) => setImagem(target.value)}/>
                </div>
              </div> 
          </div>
         
         <button>Cadastrar</button>
         <ToastContainer autoClose={2000}/>
        </form>
        
      </div>
   
    </div>
  );
}


