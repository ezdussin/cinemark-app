import React from 'react'
import InputMask from "react-input-mask"

export default function TELInput(props) {
  return (
    <InputMask mask="+99 (99)999999999" value={props.value} onChange={props.onChange} className='default-input input-dark' name='phone' id="phone" placeholder='TELEFONE'/>
  )
}