import React from 'react'
import InputMask from "react-input-mask"

export default function CPFInput(props) {
  return (
    <InputMask mask="99/99/9999" value={props.value} className='default-input input-light' name='birthday' placeholder="DATA DE NASCIMENTO" id='birthday' type="text" required/>
  )
}