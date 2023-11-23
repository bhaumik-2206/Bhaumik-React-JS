import { useDispatch, useSelector } from "react-redux";
import { handleQuantityChange, placeOrder, removeItem } from "../../feature/shopping/e_commerce";

export default function Cart({ open, setOpen }) {
    const cartData = useSelector(state => state.products.cartData);
    const totalAmount = useSelector(state => state.products.totalAmount);
    const dispatch = useDispatch();
    return (
        <>
            <div onClick={() => setOpen(false)} className={`inset-0 ${open ? "bg-gray-500 fixed" : "bg-transparent"} bg-opacity-75`} />
            <div className={`fixed w-screen max-w-xl z-20 inset-y-0 right-0 bg-white shadow-lg transform ${open ? 'translate-x-0' : 'translate-x-full'} transition-transform ease-in-out duration-300`}>
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

                    {cartData.map((item, index) => (
                        <div key={index} className="flex items-center justify-between p-4 border-b">
                            <div className="flex items-center">
                                <img src={item.image} className="h-24" alt="" />
                                <p className="ml-2">{item.title}</p>
                            </div>
                            <div className="flex items-center">
                                <button
                                    className="bg-blue-500 text-white px-3 py-1 rounded-md mr-2 hover:bg-blue-700"
                                    onClick={() => dispatch(handleQuantityChange({ id: item.id, type: 'increment' }))}
                                >+</button>
                                <span className="text-lg font-semibold">{item.quantity}</span>
                                <button
                                    className="bg-red-500 text-white px-3 py-1 rounded-md ml-2 hover:bg-red-700"
                                    onClick={() => dispatch(handleQuantityChange({ id: item.id, type: 'decrement' }))}
                                >-</button>
                            </div>

                            <button className="text-blue-600" onClick={() => dispatch(removeItem(item.id))}>Remove</button>
                        </div>
                    ))}

                    <div className="border-t fixed bottom-0 w-full border-gray-200 px-4 py-6">
                        {totalAmount !== 0 && <div className="text-2xl flex justify-between font-medium text-gray-900">
                            <p>Total</p>
                            <p className="font-bold text-3xl">
                                ₹ {Math.round(totalAmount)}
                            </p>
                        </div>}
                        <div className="mt-6">
                            <button
                                className={`${cartData.length > 0 ? "bg-indigo-600 hover:bg-indigo-700 cursor-pointer" : "bg-gray-600 cursor-not-allowed"} w-full flex items-center justify-center rounded-md border border-transparent  px-6 py-3 text-base font-medium text-white shadow-sm`}
                                disabled={cartData.length === 0}
                                onClick={() => { setOpen(false); dispatch(placeOrder()) }}
                            >Order</button>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}