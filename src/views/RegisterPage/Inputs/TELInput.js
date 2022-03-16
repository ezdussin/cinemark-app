import InputMask from "react-input-mask";

const TEL_Input = (props) => (
  <InputMask mask="+99 (99)999999999" value={props.value} onChange={props.onChange} className='default-input input-dark' name='phone' placeholder='TELEFONE'/>
)

export default TEL_Input