import { useState } from "react"




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
    <div>
        <button onClick={handleClickDecrement}>-</button>
        <p>{count}</p>
        <button onClick={handleClickIncrement}>+</button>
        <button onClick={() => addProduct(count)}>Agregar producto</button>
    </div>
)
}

export default ItemCount