import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SelectPlayers = () => {
    const [totalPlayers, setTotalPlayers] = useState(2);
    const navigate = useNavigate();

    const handlePlayerSelect = (e) => {
        e.preventDefault();
        navigate(`/start-game/${totalPlayers}`);
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <form onSubmit={handlePlayerSelect} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <label htmlFor="playerSelect" className="block text-2xl text-gray-700 font-bold mb-2">
                    Select the number of players:
                </label>
                <select
                    id="playerSelect"
                    value={totalPlayers}
                    onChange={(e) => setTotalPlayers(e.target.value)}
                    className="mb-4 border rounded w-full py-2 px-3"
                >
                    {[2, 3, 4].map((num) => (
                        <option key={num} value={num}>
                            {`${num} Players`}
                        </option>
                    ))}
                </select>
                <button
                    type="submit"
                    className="bg-blue-500 block mx-auto hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    Start
                </button>
            </form>
        </div>
    );
};

export default SelectPlayers;
