import { useDispatch, useSelector } from "react-redux";
import { changeQty, removeItem } from "../../feature/shopping/shoppingSlice";

export default function Cart({ open, setOpen }) {
    const dispatch = useDispatch();
    const cartData = useSelector(state => state.item)
    const totalAmount = useSelector(state => state.totalAmount)

    return (
        <>
            <div onClick={() => setOpen(false)} className={`inset-0 ${open ? "bg-gray-500 fixed" : "bg-transparent"} bg-opacity-75`} />
            <div className={`fixed w-screen max-w-2xl z-20 inset-y-0 right-0 bg-white shadow-lg transform ${open ? 'translate-x-0' : 'translate-x-full'} transition-transform ease-in-out duration-300`}>
                <div className="flex flex-col h-full">
                    <div className="sticky top-0 py-4 bg-white px-4 flex justify-between items-center">
                        <h2 className="text-2xl text-center font-medium text-gray-900">Shopping Cart</h2>
                        <div className="flex justify-between h-7 items-center">
                            <button className={`${cartData.length === 0 ? "text-gray-500" : "text-red-700"}  text-lg px-0  sm:px-3`}
                                onClick={() => dispatch(removeItem({ type: "all" }))}
                                disabled={cartData.length === 0}
                            >Remove all</button>
                            <button type="button"
                                className="relative -m-2 p-2 text-gray-500 hover:text-gray-600"
                                onClick={() => setOpen(false)}
                            ><i className="fa-solid fa-xmark text-xl hover:bg-gray-300 hover:rounded-full px-3 py-1.5"></i></button>
                        </div>
                    </div>

                    {cartData.length > 0 && <table className="w-11/12 mx-auto text-center">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Quantity</th>
                                <th>Price</th>
                                <th>Total</th>
                                <th>Operation</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartData.map((ele, index) => (
                                <tr className="text-lg" key={index}>
                                    <td className="w-[20%]">{ele.name}</td>
                                    <td className="w-[20%]">
                                        <button onClick={() => dispatch(changeQty({ type: "increment", id: ele.id }))}
                                            className='bg-black text-white px-4'>+</button>
                                        <span className="text-lg px-2">{ele.qty}</span>
                                        <button onClick={() => dispatch(changeQty({ type: "decrement", id: ele.id }))}
                                            className='bg-black text-white px-4'>-</button>
                                    </td>
                                    <td className="w-[20%]">{ele.price}/qty</td>
                                    <td className="w-[20%]">{ele.total_amount}</td>
                                    <td className="w-[20%]">
                                        <button
                                            onClick={() => dispatch(removeItem(ele.id))}
                                            className="text-blue-600">remove</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>}

                    <div className="border-t fixed bottom-0 w-full border-gray-200 px-4 py-6">
                        {totalAmount !== 0 && <div className="text-2xl flex justify-between font-medium text-gray-900">
                            <p>Total</p>
                            <p className="font-bold text-3xl">
                                ₹ {totalAmount}
                            </p>
                        </div>}
                        <div className="mt-6">
                            <button
                                className={`${cartData.length > 0 ? "bg-indigo-600 hover:bg-indigo-700 cursor-pointer" : "bg-gray-600 cursor-not-allowed"} w-full flex items-center justify-center rounded-md border border-transparent  px-6 py-3 text-base font-medium text-white shadow-sm`}
                                disabled={cartData.length === 0}
                            >Order</button>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}