import {Link} from 'react-router-dom'
import './navbar.css'
import {ShoppingCart} from 'phosphor-react'

export const NavBar = ()=>{
    return <div className='navbar'>
        <div className="links">
            <Link to='/'>Shopping</Link>
            <Link to='/Cart'>
                <ShoppingCart size={32} />
            </Link>
        </div>
        
    </div>
}