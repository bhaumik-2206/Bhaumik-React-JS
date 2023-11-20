import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addItem, changeQty } from '../../feature/shopping/shoppingSlice';

const Products = () => {
    const dispatch = useDispatch();
    const cartData = useSelector(state => state.item);
    let data = [
        { id: 1, name: "Maggie", price: 50 },
        { id: 2, name: "Masala Wafers", price: 10 },
        { id: 3, name: "Pulav", price: 30 },
        { id: 4, name: "Dahi", price: 20 },
        { id: 5, name: "Chocolate", price: 15 },
    ];

    return (
        <div>
            {data.map((ele, index) => (
                <div className='flex' key={index}>
                    <p>Name: {ele.name}</p>
                    {cartData.find(e => e.id === ele.id && e.qty > 0) ?
                        (<div className='flex px-5'>
                            <button
                                onClick={() => dispatch(changeQty({ type: "increment", id: ele.id }))}
                                className='bg-black text-white px-4'>+</button>
                            <p>{cartData.find(e => e.id === ele.id).qty}</p>
                            <button
                                onClick={() => dispatch(changeQty({ type: "decrement", id: ele.id }))}
                                className='bg-black text-white px-4'>-</button>
                        </div>) : (
                            <button onClick={() => dispatch(addItem(data.find((e, i) => i === index)))}
                                className='bg-green-500 text-white px-5'>add</button>
                        )
                    }
                </div>
            ))}
        </div>
    )
}

export default Products;