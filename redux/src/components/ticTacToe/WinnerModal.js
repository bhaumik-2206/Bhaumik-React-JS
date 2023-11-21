import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { restartGame } from '../../feature/ticTacToe/ticTacToe';

const WinnerModal = () => {
    const winner = useSelector(state => state.winner);
    const dispatch = useDispatch();
    return (
        winner &&
        <div className="relative z-20" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div className={`inset-0 bg-gray-500 fixed bg-opacity-75`} />
            <div className="fixed inset-0  w-screen overflow-y-auto">
                <div className="flex min-h-full items-end justify-center text-center sm:items-center">
                    <div className="relative z-20 transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg" onClick={(e) => { e.stopPropagation() }}>
                        <div className='p-6'>
                            <div className="bg-white pb-5">
                                <div className="mt-3 text-center sm:ml-4 sm:mt-0">
                                    <h3 className="text-xl text-center mx-auto font-semibold leading-6 text-gray-900 " id="modal-title">{winner !== "draw" ? `${winner} is winner` : `Match Draw`}</h3>
                                </div>
                            </div>
                            <div className="bg-gray-50 sm:flex sm:flex-row-reverse">
                                <button type="button" onClick={() => { dispatch(restartGame()) }} className={`bg-green-500 w-full rounded-md  px-3 py-2 text-sm font-semibold text-white shadow-sm sm:ml-3`}>
                                    Restart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        // <div>
        //     {winner && <h1 className='fixed bg-green-300 top-1/2 left-1/2 w-40 h-40 flex justify-center items-center text-2xl font-bold -translate-x-1/2 -translate-y-1/2' >{winner !== "draw" ? `${winner} is winner` : `Match Draw`}</h1>}
        // </div>
    )
}

export default WinnerModal
