import { ShopContext } from "../../context/ShopContext"
import { useContext } from "react"

export const CartItem = (props)=>{
    const {id,productName,productImage,price} = props.data;
    const {cartItems,addToCart,removeToCart,updateAmount} = useContext(ShopContext)
    return <div className="cart-item">
        <img src={productImage} alt="" />
        <div className="discription">
            <p><b>{productName}</b></p>
            <p>${price}</p>
            <div className="countHandler">
                <button onClick={()=>addToCart(id)}>+</button>
                <input type="text" value={cartItems[id]} onChange={(e)=>updateAmount(id,Number(e.target.value))} />
                <button onClick={()=>removeToCart(id)}>-</button>
            </div>
        </div>
    </div>
}