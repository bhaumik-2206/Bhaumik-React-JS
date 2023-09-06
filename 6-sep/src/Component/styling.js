function AddStyling() {
    let myStyle = {
        fontSize: 80,
        fontFamily: 'Courier',
        color: '#003300'
    }
    return (
        <div>
            <h1 style={myStyle}>This is a JSX Styling</h1>
        </div>
    );
}
export default AddStyling;

// function App() {
//     let i = 5;
//     return (
//         <div>
//             <h2>{i === 5 ? 'True!' : 'False!'}</h2>
//         </div>
//     );
// }
// export default App;

// const isLoggedIn = true;
// export default function Greeting() {
//     return (
//         <big>
//             {isLoggedIn && <p>Welcome, User!</p>}
//         </big>
//     );
// }

// // Use if else like this
// export default function Greeting() {
//     const boolean = false;
//     function renderContent() {
//         if (boolean) {
//             return <big>Welcome, User!</big>;
//         } else {
//             return <big>Please log in.</big>;
//         }
//     }
//     return (
//         <div>
//             {renderContent()}
//         </div>
//     );
// }