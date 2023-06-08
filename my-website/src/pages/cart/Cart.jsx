import { PRODUCTS } from "../../products"
import { ShopContext } from "../../context/ShopContext"
import { useContext } from "react"
import { CartItem } from "./cart-item"
import {useNavigate} from 'react-router-dom'
import './cart.css';

export const Cart = ()=>{
    const {cartItems,getTotalAmount} = useContext(ShopContext)
    const navigate = useNavigate();
    const totalAmount = getTotalAmount();
    return <div className="cart">
        <div className="title"><h1>Your cart</h1></div>
        <div className="cart-items">
            {PRODUCTS.map((product)=>{
                if(cartItems[product.id] !== 0){
                    return <CartItem data={product} />
                }
            })}
        </div>
        {totalAmount > 0 ?
        <div className="checkout">
            <p>Subtotal: {totalAmount}$</p>
            <button onClick={()=>{navigate('/')}}>Continue shoping</button>
            <button>Checkout</button>
        </div>
        :
        <h1>Your Cart is Empty</h1>
        }
    </div>
}