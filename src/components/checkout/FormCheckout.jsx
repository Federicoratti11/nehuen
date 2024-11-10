import React from 'react'
import "./Checkout.css"

const FormCheckout = ({dataForm, handleChangeInput, handleSubmitForm}) => {
  return (
    <form onSubmit={ handleSubmitForm} className="order-form">
    <label>Nombre completo</label>
    <input type="text" name="fullname" value={dataForm.fullname} onChange={handleChangeInput}  />

    <label>Telefono</label>
    <input type="number" name="telefono"value={dataForm.telefono} onChange={handleChangeInput} />  

    <label>Email</label>
    <input type="text" name="email" value={dataForm.email} onChange={handleChangeInput} />  

    <button type="submit"> Enviar orden</button>

</form>
  )
}

export default FormCheckout
