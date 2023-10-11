import React, { useState } from 'react'
import { useNavigate } from 'react-router';

const OrderItemForm = () => {
    const [myItems, setMyItems] = useState({ value: [] });
    const [item, setItem] = useState({ item: "", price: "", quantity: "" });
    const navigate = useNavigate();

    const addItem = (e) => {
        e.preventDefault();
        setMyItems(pre => ({ value: [...pre.value, item] }));
        setItem({ item: "", price: "", quantity: "" });
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setItem(pre => ({ ...pre, [name]: value }))
    }

    const handleOrder = async () => {
        setMyItems(pre => ({ value: [...pre.value, item] }));
        if (window.confirm("Order Send Or Not ??")) {
            let res = await fetch("http://localhost:3401/orderedItem", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(myItems, Date())
            })
            navigate("/history");
            setMyItems({ value: [] });
        } else {
            navigate("/orderItem");
        }
    }

    return (
        <div className='w-50 p-4 mx-auto my-4 bg-slate-700 rounded-xl'>
            <form action="" onSubmit={addItem}>
                <div className="form-group mb-3">
                    <input value={item.item} onChange={handleChange} name='item' type="text" className="form-control" placeholder='Enter Your Ordered Item' />
                </div>
                <div className="form-group mb-3">
                    <input value={item.price} onChange={handleChange} name='price' type="number" className="form-control" placeholder='Enter Price' />
                </div>
                <div className="form-group mb-3">
                    <input value={item.quantity} onChange={handleChange} name='quantity' type="number" className="form-control" placeholder='Enter Quantity' />
                </div>
                <button className='btn btn-primary mb-3 d-block mx-auto mt-2' type='submit'>add</button>
            </form>
            {
                myItems.value.map((ele, index) => (
                    <div className='d-flex justify-between' key={index}>
                        <p className='text-white mb-0'>{ele.item}</p>
                        <p className='text-white mb-0'>{ele.quantity}</p>
                        <p className='text-white mb-0'>{ele.price}</p>
                    </div>
                ))
            }
            {/* <form>
                <button className='btn btn-primary mx-auto d-block mt-2' type="submit">Order</button>
            </form> */}
            <button className='btn btn-primary d-block mx-auto mt-4' onClick={handleOrder}>Order</button>
        </div>
    )
}

export default OrderItemForm
