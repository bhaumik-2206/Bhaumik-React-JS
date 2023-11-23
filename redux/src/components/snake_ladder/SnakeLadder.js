// import React, { useState } from 'react';
// import WinnerModal from './WinnerModal';
// import { useParams } from 'react-router-dom';

// let hundred = [
//     [100, 99, 98, 97, 96, 95, 94, 93, 92, 91],
//     [81, 82, 83, 84, 85, 86, 87, 88, 89, 90],
//     [80, 79, 78, 77, 76, 75, 74, 73, 72, 71],
//     [61, 62, 63, 64, 65, 66, 67, 68, 69, 70],
//     [60, 59, 58, 57, 56, 55, 54, 53, 52, 51],
//     [41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
//     [40, 39, 38, 37, 36, 35, 34, 33, 32, 31],
//     [21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
//     [20, 19, 18, 17, 16, 15, 14, 13, 12, 11],
//     [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
// ];

// const SnakeLadder = () => {
//     const { player } = useParams();
//     const [randomNumberU1, setRandomNumberU1] = useState('');
//     const [randomNumberU2, setRandomNumberU2] = useState('');
//     const [show, setShow] = useState(false);
//     const [winner, setWinner] = useState("")
//     const [turn, setTurn] = useState(false);
//     const [points, setPoints] = useState({
//         player1: 1,
//         player2: 1,
//     });



//     const addPoints = (user) => {
//         let random = Math.ceil(Math.random() * 6);
//         if (user === 1) {
//             let value = points.player1 + random;
//             if (value >= 100) {
//                 setShow(true);
//                 setWinner("Winner is user 1");
//             }
//             setRandomNumberU1(random);
//             setPoints((pre) => ({ ...pre, player1: value > 100 ? 100 : value }));
//         } else if (user === 2) {
//             let value = points.player2 + random;
//             if (value >= 100) {
//                 setShow(true);
//                 setWinner("Winner is user 2");
//             }
//             setRandomNumberU2(random);
//             setPoints((pre) => ({ ...pre, player2: value > 100 ? 100 : value }));
//         }
//         setTurn((pre) => !pre);
//     };

//     const restartGame = () => {
//         setPoints({ player1: 1, player2: 1 });
//         setRandomNumberU1("");
//         setRandomNumberU2("");
//         setWinner("");
//     }


//     return (
//         <>
//             <div className='flex flex-col items-center'>
//                 {hundred.map((row, rowIndex) => (
//                     <div className='flex' key={rowIndex}>
//                         {row.map((cell, cellIndex) => (
//                             <div key={cellIndex} className='relative'>
//                                 <p className='w-14 h-14 flex justify-center items-center bg-blue-400 m-1 text-2xl text-white'>
//                                     {cell}
//                                 </p>
//                                 {points.player1 === cell && (
//                                     <div className='absolute top-1/2 left-1/2 rounded-full text-green-800'>
//                                         <i className="fa-solid text-xl fa-chess-pawn"></i>
//                                     </div>
//                                 )}
//                                 {points.player2 === cell && (
//                                     <div className='absolute top-1/4 left-1/4 rounded-full text-red-500'>
//                                         <i className="fa-solid text-xl fa-chess-pawn"></i>
//                                     </div>
//                                 )}
//                             </div>
//                         ))}
//                     </div>
//                 ))}
//             </div>

//             <div className='flex justify-between px-6'>
//                 <div className='flex items-center gap-5 w-1/3'>
//                     <button
//                         disabled={turn}
//                         className='bg-green-500 text-white px-4 py-2 rounded'
//                         onClick={() => addPoints(1)}
//                     >
//                         User 1
//                     </button>
//                     {randomNumberU1 && (
//                         <h1 className='text-xl mt-2'>Dice Roll: {randomNumberU1}</h1>
//                     )}
//                 </div>
//                 <div className='w-1/3 text-center'>
//                     <p className='text-xl mb-3'>{turn ? "User 2 turn" : "User 1 Turn"}</p>
//                     <button onClick={restartGame} className='bg-orange-500 text-white px-4 py-2 rounded '>restart</button>
//                 </div>
//                 <div className='w-1/3 flex items-center justify-end gap-5'>
//                     {randomNumberU2 && (
//                         <h1 className='text-xl mt-2'>Dice Roll: {randomNumberU2}</h1>
//                     )}
//                     <button
//                         disabled={!turn}
//                         className='bg-red-500 text-white px-4 py-2 rounded mt-4'
//                         onClick={() => addPoints(2)}
//                     >
//                         User 2
//                     </button>
//                 </div>
//             </div>
//             <WinnerModal show={show} setShow={setShow} winner={winner} restartGame={restartGame} />
//         </>
//     );
// };

// export default SnakeLadder;
import React, { useEffect, useState } from 'react';
import WinnerModal from './WinnerModal';
import { useParams } from 'react-router-dom';

let hundred = [
    [100, 99, 98, 97, 96, 95, 94, 93, 92, 91],
    [81, 82, 83, 84, 85, 86, 87, 88, 89, 90],
    [80, 79, 78, 77, 76, 75, 74, 73, 72, 71],
    [61, 62, 63, 64, 65, 66, 67, 68, 69, 70],
    [60, 59, 58, 57, 56, 55, 54, 53, 52, 51],
    [41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
    [40, 39, 38, 37, 36, 35, 34, 33, 32, 31],
    [21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
    [20, 19, 18, 17, 16, 15, 14, 13, 12, 11],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
];

const SnakeLadder = () => {
    const { player } = useParams();
    const [show, setShow] = useState(false);
    const [winner, setWinner] = useState("")
    const [turn, setTurn] = useState(false);
    const [points, setPoints] = useState({});
    const [randomNumber, setRandomNumber] = useState({})
    const [totalPlayers, setTotalPlayers] = useState([])

    const colourName = ["text-red-600", "text-green-600", "text-yellow-600", "text-orange-600"];

    useEffect(() => {
        setTotalPlayers([]);
        if (player) {
            for (let i = 1; i <= player; i++) {
                let playerName = "player " + i
                setTotalPlayers(pre => [...pre, playerName]);
                setRandomNumber(pre => ({ ...pre, [playerName]: "" }))
                setPoints(pre => ({ ...pre, [playerName]: 1 }))
            }
        } else {

        }
    }, [])




    const addPoints = (user) => {
        let random = Math.ceil(Math.random() * 6);
        let playerName = totalPlayers[user - 1];
        let value = points[totalPlayers[user - 1]] + random;
        console.log(random, value);
        if (value >= 100) {
            setShow(true);
            setWinner(`Winner is Player ${totalPlayers[user - 1]}`);
        }
        setRandomNumber(pre => ({ ...pre, [playerName]: random }))
        setPoints(pre => ({ ...pre, [playerName]: value }))
        setTurn({ [playerName]: true });
        console.log(randomNumber);
        // setPoints((pre) => ({ ...pre, player1: value > 100 ? 100 : value }));

        // if (user === 1) {
        //     let value = points.player1 + random;
        //     if (value >= 100) {
        //         setShow(true);
        //         setWinner("Winner is user 1");
        //     }
        //     setRandomNumberU1(random);
        //     setPoints((pre) => ({ ...pre, player1: value > 100 ? 100 : value }));
        // } else if (user === 2) {
        //     let value = points.player2 + random;
        //     if (value >= 100) {
        //         setShow(true);
        //         setWinner("Winner is user 2");
        //     }
        //     setRandomNumberU2(random);
        //     setPoints((pre) => ({ ...pre, player2: value > 100 ? 100 : value }));
        // }
    };
    console.log(turn)

    const restartGame = () => {
        setWinner("");
    }

    return (
        <>
            <div className='flex flex-col items-center'>
                {hundred.map((row, rowIndex) => (
                    <div className='flex' key={rowIndex}>
                        {row.map((cell, cellIndex) => (
                            <div key={cellIndex} className='relative'>
                                <p className='w-14 h-14 flex justify-center items-center bg-blue-400 m-1 text-2xl text-white'>
                                    {cell}
                                </p>
                                {totalPlayers.map((p, i) => (
                                    points[p] === cell && (
                                        <div key={i} className={`${colourName[i]} absolute top-${i * 3} left-4 rounded-full`}>
                                            <i className="fa-solid text-xl fa-chess-pawn"></i>
                                        </div>
                                    ))
                                )}
                            </div>
                        ))}
                    </div>
                ))}
            </div>

            <div className=''>
                {totalPlayers.map((player, index) => (
                    <div key={index} className='flex items-center gap-5 w-1/3'>
                        <button
                            disabled={turn[player]}
                            className='bg-green-500 text-white px-4 py-2 rounded'
                            onClick={() => addPoints(index + 1)}
                        >
                            {player}
                        </button>
                        {randomNumber[player] && (
                            <h1 className='text-xl mt-2'>Dice Roll: {randomNumber[player]}</h1>
                        )}
                    </div>
                ))}
                <div className='w-1/3 text-center'>
                    {/* <p className='text-xl mb-3'>{turn ? "User 2 turn" : "User 1 Turn"}</p> */}
                    <button onClick={restartGame} className='bg-orange-500 text-white px-4 py-2 rounded '>restart</button>
                </div>
            </div>
            <WinnerModal show={show} setShow={setShow} winner={winner} restartGame={restartGame} />
        </>
    );
};

export default SnakeLadder;
