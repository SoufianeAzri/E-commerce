import { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";
export const Product = (props)=>{
    const {id, productName,price,productImage} = props.data;
    const {addToCart,cartItems} = useContext(ShopContext);
    const amount = cartItems[id];
    return <div className="product">
        <img src={productImage}/>
        <div className="product-description">
            <p><b>{productName}</b></p>
            <p>${price}</p>
        </div>
        <button className="addToCartBttn" onClick={()=>addToCart(id)}>Add To Cart {amount > 0 && <>({amount})</>}</button>
    </div>
}