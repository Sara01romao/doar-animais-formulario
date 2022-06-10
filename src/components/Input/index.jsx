
import React from 'react';
import InputMask from "react-input-mask";


export function Input({title, id, value, setValue, mask}) {

 
  return (
    <div>
    <label htmlFor={id}>{title}</label><br/>
    <InputMask mask={mask} type='text' id={id} value={value} onChange={({target}) => setValue(target.value)} required />
   </div>
  )
}
