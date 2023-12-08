import React from 'react'

const Form1 = () => {
    return (
        <div className='w-1/3'>
            <h1 className='text-2xl mb-3 font-mono'>Welcome</h1>
            <form action="">
                <div>
                    <label className='text-lg' htmlFor="mobileNumber">Enter mobile number</label>
                    <input
                        id='mobileNumber'
                        className='block focus:ring-indigo-600 w-full rounded-md border-0 py-1.5 ps-4  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6'
                        type="number"
                        placeholder='Please enter your obile number' />
                </div>
                <div className='pt-6'>
                    <button
                        className='border-2 w-full text-white border-blue-700 bg-blue-700 p-2 rounded-md text-sm text-center'
                    >NEXT</button>
                </div>
            </form>
        </div>
    )
}

export default Form1;
