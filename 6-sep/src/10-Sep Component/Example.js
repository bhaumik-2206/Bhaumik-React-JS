import { useState } from 'react'
export default function Example() {
    let a = 1;
    const [allData, setTheData] = useState([]);
    const handleSubmit = (e) => {
        e.preventDefault();
        let indexOfEnterData = allData.findIndex(ele => ele.item.toLowerCase() === e.target.inputName.value.trim().toLowerCase());
        if (indexOfEnterData !== -1) {
            alert("Item already exists")
            return;
        }
        if (e.target.inputName.value.trim() !== "") {
            setTheData([...allData,
            { id: a++, item: e.target.inputName.value.trim(), price: Number(e.target.price.value), quantity: Number(e.target.quantity.value) }
            ])
            e.target.reset();
        } else {
            alert("Please enter all Data");
        }
    }
    const decrement = (index) => {
        let storData = [...allData];
        if (storData[index].quantity > 0) {
            storData[index].quantity--;
        } else {
            alert("Quantity is already Zero!");
        }
        setTheData(storData);
    }
    const increment = (index) => {
        let storData = [...allData];
        storData[index].quantity++;
        setTheData(storData);
    }
    return (
        <div>
            <form className='addItemForm' action="" onSubmit={handleSubmit}>
                <h2>Add Stock</h2>
                <input placeholder='Enter Item Name' type="text" name='inputName' required />
                <input placeholder='Enter Price of Item' type="number" name='price' min={1} required />
                <input placeholder='Enter Quantity of Item' type="number" name='quantity' min={1} required />
                <button type='submit'>Add</button>
            </form>
            {
                allData.length > 0 ?
                    allData.map((ele, index) => (
                        <div className='myData' key={ele.id}>
                            <div className='price'>
                                <h2>{ele.item}:{ele.price}</h2>
                            </div>
                            <div className='inc-dec'>
                                <div>
                                    <button onClick={() => decrement(index)}>Decrement</button>
                                    <span>{ele.quantity}</span>
                                    <button onClick={() => increment(index)}>Increment</button>
                                </div>
                            </div>
                            <div className='price'>
                                <h1>Total:{Number(ele.price) * Number(ele.quantity)}</h1>
                            </div>
                        </div>
                    )) :
                    <h2>No Stock Available</h2>
            }
        </div>
    )
}