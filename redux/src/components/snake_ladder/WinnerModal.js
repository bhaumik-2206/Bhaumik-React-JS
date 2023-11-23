import React from 'react';

const WinnerModal = ({ show, setShow, winner, restartGame }) => {
    const handleRetake = () => {
        setShow(false);
        restartGame();
    };
    return (
        show && <div
            className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75"
            aria-labelledby="modal-title"
            role="dialog"
            aria-modal="true"
        >
            <div className="bg-gray-800 text-white w-full max-w-md p-8 rounded-lg"
                onClick={(e) => e.stopPropagation()}>
                <p className="text-4xl text-center">{winner}</p>
                <div>
                    <button className="mt-8 bg-green-600 hover:bg-green-500 w-full rounded-md px-4 py-2 text-lg font-semibold text-black shadow-sm"
                        onClick={handleRetake} >
                        Re Take
                    </button>
                </div>
            </div>
        </div>
    );
}

export default WinnerModal
