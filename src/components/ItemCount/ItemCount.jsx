import { useState } from "react"
import "./ItemCount.css"




const ItemCount = ({stock, addProduct}) => {
    const [count,setCout] = useState(1)
 



    const handleClickDecrement = () => {
        if(count > 1){
        setCout(count - 1)
    }
}

const handleClickIncrement = () => {
    if(count < stock){
    setCout(count + 1)
}
}


return(
    <div className="counter-container">
    <button className="btn-decrement" onClick={handleClickDecrement}>-</button>
    <p className="count-display">{count}</p>
    <button className="btn-increment" onClick={handleClickIncrement}>+</button>
    <button className="btn-add-product" onClick={() => addProduct(count)}>Agregar producto</button>
</div>

)
}

export default ItemCount