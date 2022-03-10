
import React, { useState } from 'react'


export default function Input({title, id, value, setValue}) {

 
  return (
    <div>
    <label htmlFor={id}>{title}</label><br/>
    <input type='text' id={id} value={value} onChange={({target}) => setValue(target.value)}/>
   </div>
  )
}
