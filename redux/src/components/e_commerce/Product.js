import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProductsValue, addToCart, findProduct } from '../../feature/shopping/e_commerce';
import Cart from './Cart';
import Filter from './Filter';

const Product = () => {
    const [loading, setLoading] = useState(true);
    const [isFilterOpen, setIsFilterOpen] = useState(false)
    const [open, setOpen] = useState(false);
    const [search, setSearch] = useState("");
    const products = useSelector((state) => state.products.searchValue.length === 0 ? (!search ? state.products.products : state.products.searchValue) : state.products.searchValue);
    const cartData = useSelector((state) => state.products.cartData);
    const dispatch = useDispatch();

    useEffect(() => {
        // let timer = setTimeout(() => {
        dispatch(findProduct(search));
        // }, 250);
        // return () => clearTimeout(timer);
    }, [search])


    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((response) => {
                setLoading(true);
                return response.json()
            })
            .then((data) => {
                setLoading(false)
                return dispatch(setProductsValue(data))
            });
    }, [dispatch]);

    const renderStars = (count) => {
        const stars = [];
        for (let i = 0; i < count; i++) {
            stars.push(<i key={i} className="fa-solid fa-star text-yellow-500"></i>);
        }
        for (let i = 0; i < 5 - count; i++) {
            stars.push(<i key={i + count} className="fa-regular fa-star text-yellow-500"></i>);
        }
        return stars;
    };

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
    };

    return (
        <div className="container mx-auto mt-8">
            <div className="flex justify-between items-center px-4">
                <div>
                    <button className='bg-green-500 hover:bg-green-600 w-full sm:w-28 rounded-md  px-3 py-2 text-sm font-semibold text-white shadow-sm sm:ml-3' onClick={() => setIsFilterOpen(true)}>filter</button>
                </div>
                <div className="flex items-center justify-center mb-2 sm:mb-3 w-full sm:w-1/2 sm:mx-auto relative border border-black rounded-lg my-2 sm:my-5 overflow-hidden">
                    <label htmlFor="search" className="bg-black cursor-pointer border-black border text-white py-2 px-4 ">
                        <i className="fas fa-search"></i>
                    </label>
                    <input type="text" id="search"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full py-2 px-4 text-black bg-white border border-black rounded-r-lg focus:outline-none focus:ring focus:border-blue-300"
                        placeholder="Search..." />
                </div>
            </div>
            {loading ?
                <div className='text-center py-4'>
                    <svg aria-hidden="true" className="inline w-12 h-12 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                    </svg>
                </div>
                : products.length > 0 ?
                    products[0] === "No Data Found" ?
                        <p className='text-5xl font-medium text-center w-full'>{products[0]}</p> :
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                            {products.map((product, index) => (
                                <div key={index} className="bg-white flex flex-col justify-between p-6 rounded-lg shadow-md">
                                    <div>
                                        <img src={product.image}
                                            alt={product.title}
                                            className="common mb-4 rounded-md duration-300 h-60 object-contain block mx-auto"
                                        />
                                        <div className="font-bold text-xl mb-2 overflow-hidden">
                                            {product.title.slice(0, 40)}{product.title.split("").length > 40 && "..."}
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-gray-700 text-sm mt-2">{product.description.slice(0, 100)}{product.description.split("").length > 100 && "..."}</p>
                                        <div className="text-gray-800 text-xl font-medium">₹{product.price}</div>
                                        <div className="pt-2">
                                            <div className="text-gray-600 text-sm">
                                                Rating: {renderStars(Math.round(product.rating.rate))}
                                            </div>
                                            <div className="text-gray-600 text-sm">
                                                ({product.rating.count} reviews)
                                            </div>
                                        </div>
                                        <button
                                            className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md hover:bg-blue-700"
                                            onClick={() => handleAddToCart(product.id)}
                                        >Add to Cart
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    : <h1 className='text-5xl font-medium text-center w-full'>Data is empty</h1>}

            <div className="fixed top-0 right-0 p-4 cursor-pointer" onClick={() => setOpen(true)}>
                <div className={`relative bg-blue-500 text-white px-4 py-2 rounded-md`}>
                    <i className="fas fa-shopping-cart mr-2"></i> Cart
                    {cartData.length > 0 && <div className='absolute w-6 h-6 z-10 text-sm bg-orange-500 rounded-full px-1.5 -top-2 -right-2.5'>
                        <p className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>{cartData.length}</p>
                    </div>}
                </div>
            </div>

            <Cart open={open} setOpen={setOpen} />
            <Filter open={isFilterOpen} setOpen={setIsFilterOpen} />
        </div>
    );
};

export default Product;
