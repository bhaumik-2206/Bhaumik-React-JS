import { useDispatch, useSelector } from "react-redux";
import { filterValue, placeOrder } from "../../feature/shopping/e_commerce";
import { useState } from "react";

export default function Filter({ open, setOpen }) {
    const category = useSelector(state => state.products.category);
    const [selectedValues, setSelectedValues] = useState({ category: "", start: "", end: "" });
    const dispatch = useDispatch();
    // console.log(selectedValues);

    return (
        <>
            <div onClick={() => setOpen(false)} className={`inset-0 ${open ? "bg-gray-500 fixed" : "bg-transparent"} bg-opacity-75`} />
            <div className={`fixed w-screen max-w-sm z-20 inset-y-0 left-0 bg-white shadow-lg transform ${open ? 'translate-x-0' : '-translate-x-full'} transition-transform ease-in-out duration-300`}>
                <div className={`sticky top-0 py-4 bg-white px-4 flex justify-between items-center`}>
                    <h2 className="text-2xl text-center font-medium text-gray-900">Filter</h2>
                    <div className="flex justify-between h-7 items-center">
                        <button
                            type="button"
                            className="relative -m-2 p-2 text-gray-500 hover:text-gray-600"
                            onClick={() => setOpen(false)}
                        >
                            <i className="fa-solid fa-xmark text-xl hover:bg-gray-300 hover:rounded-full px-3 py-1.5"></i>
                        </button>
                    </div>
                </div>

                <div className="p-4">
                    <div>
                        <label htmlFor="category" className="block text-sm font-medium text-gray-600">Select Category</label>
                        <select
                            value={selectedValues.category}
                            onChange={(e) => {
                                setSelectedValues(prev => ({ ...prev, category: e.target.value }));
                                dispatch(filterValue({ category: e.target.value, start: selectedValues.start, end: selectedValues.end }));
                            }}
                            name="category" id="category"
                            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                        >
                            <option value="">Select Option</option>
                            {category.map((category, index) => (
                                <option key={index} value={category}>{category}</option>
                            ))}
                        </select>
                    </div>
                    <div className="mt-4">
                        <p className="block text-sm font-medium text-gray-600">Select Price</p>
                        {[["0-10", "Under ₹10"], ["10-30", "₹10 - ₹30"], ["30-50", "₹30 - ₹50"], ["50-70", "₹50 - ₹70"], ["70-100", "₹70 - ₹100"], ["100-0", "Over ₹100"]].map((ele, index) => (
                            <div key={index} className="mt-2">
                                <input
                                    onChange={() => {
                                        setSelectedValues(pre => ({ ...pre, start: ele[0].split("-")[0], end: ele[0].split("-")[1] }))
                                        dispatch(filterValue({ category: selectedValues.category, start: ele[0].split("-")[0], end: ele[0].split("-")[1] }))
                                    }}
                                    checked={selectedValues.start === ele[0].split("-")[0] && selectedValues.end === ele[0].split("-")[1]}
                                    type="radio" name="price" id={ele[1]} />
                                <label htmlFor={ele[1]} className="ml-2">{ele[1]}</label>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="border-t fixed bottom-0 w-full border-gray-200 px-4 py-6">
                    <div className="mt-6">
                        <button
                            className={`bg-indigo-600 hover:bg-indigo-700 cursor-pointer w-full flex items-center justify-center rounded-md border border-transparent  px-6 py-3 text-base font-medium text-white shadow-sm`}
                            onClick={() => {
                                setOpen(false);
                                setSelectedValues({ category: "", start: "", end: "" });
                                dispatch(filterValue({ category: "", start: "", end: "" }))
                            }}
                        >Default</button>
                    </div>
                </div>
            </div>
        </>
    );
}
