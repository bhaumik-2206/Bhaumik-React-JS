import React, { useState } from 'react'
import Cart from './Cart';
import { useSelector } from 'react-redux';

const Header = () => {
    const [open, setOpen] = useState(false);
    const cartData = useSelector(state => state.item);
    return (
        <header>
            <nav className='w-1/2 mx-auto justify-between flex py-5'>
                <div></div>
                <button type="button" onClick={() => { setOpen(true); }}
                    className="ps-1.5 sm:ps-2.5 relative">
                    {cartData.length > 0 && <div className='absolute w-6 h-6 z-10 text-sm bg-orange-500 rounded-full px-1.5 -top-2 -right-2.5'>
                        <p className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>{cartData.length}</p>
                    </div>}
                    <div className='relative bg-black w-9 h-9 sm:w-11 sm:h-11 rounded-full text-white text-lg sm:text-xl'>
                        <i className={`fa-solid text-sm sm:text-xl ${cartData.length > 0 ? "text-orange-500" : "text-white"} fa-cart-shopping absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}></i>
                    </div>
                </button>
            </nav>
            <Cart open={open} setOpen={setOpen} />
        </header>
    )
}

export default Header;