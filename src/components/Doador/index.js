import React, { useState } from 'react'
import Input from '../Input'
import styles from './styles.module.css'

export default function Doador() {

  const [nome, setNome] = useState('');
  const [whatsapp, setWhatsapp] = useState('')

  return (
    <div className={styles.content}>
      <h3 className='title'>Informações do Doador</h3>
      <Input title="Nome" id="nome" value={nome} setValue={setNome}/>
      <Input title="Whatsapp" id="whatsapp" value={whatsapp} setValue={setWhatsapp}/>
    </div>
  )
}
