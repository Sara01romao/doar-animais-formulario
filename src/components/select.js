import React from 'react'

export default function Select({id, value, setValue, estados}) {
  return (
    <div>
         <select id={id} value={value} onChange={({target}) => setValue(target.value)}>
               <option value='' disabled>Selecione</option>
              {estados.map((uf)=> <option value={uf.sigla} key={uf.id}>{uf.sigla}</option>)}
          </select>
    </div>
  )
}
