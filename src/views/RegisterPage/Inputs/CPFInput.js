import React from 'react'
import InputMask from "react-input-mask"

export default function CPFInput(props) {
  return (
    <InputMask mask="999.999.999-99" value={props.value} onChange={props.onChange} className='default-input input-dark' name='document_id' id="document_id" placeholder='CPF' required/>
  )
}