import { PRODUCTS } from "../../products"
import { Product } from "./Product"
import './product.css'
export const Shop = ()=>{
    return <div className="shop">
        <div className="shop-title">Sofiane Halal Shop</div>
        <div className="products">
            {PRODUCTS.map((product)=>
                <Product data={product} />
            )}
        </div>
    </div>
}