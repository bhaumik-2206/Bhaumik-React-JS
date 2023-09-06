// export default function Event() {
//     return (
//         <button onClick={function(){
//             alert("CLICKED");
//         }}>Click me</button>
//     );
// }

// export default function Event() {
//     return (
//         <button onClick={() => alert('You clicked me!')}>Click Me</button>
//     );
// }

// export default function Event() {
//     const handleClick = () => alert("CLICKED")      // Also declare outside the function
//     return (
//         <button onClick={handleClick}>Click me</button>
//     );
// }

// import MainButton from "./childEvent";
// export default function Toolbar() {
//     return (
//         <div>
//             <MainButton message="Hello!">This is Hello Message</MainButton>
//             <br />
//             <MainButton message="World!">This is World Message</MainButton>
//         </div>
//     );
// }

// function Button({ onClick, children }) {
//     return (
//         <button onClick={onClick}>
//             {children}
//         </button>
//     );
// }
// function PlayButton({ movieName }) {
//     function handlePlayClick() {
//         alert(`Playing ${movieName}!`);
//     }
//     return (
//         <Button onClick={handlePlayClick}>
//             Play "{movieName}"
//         </Button>
//     );
// }
// function UploadButton() {
//     return (
//         <Button onClick={() => alert('Uploading!')}>
//             Upload Image
//         </Button>
//     );
// }
// export default function Toolbar() {
//     return (
//         <div>
//             <PlayButton movieName="Kiki's Delivery Service" />
//             <UploadButton />
//         </div>
//     );
// }

// import React, { useState } from 'react'
// function EventHandling() {
//     let [text, setText] = useState("");
//     const adder = (n) => () => {
//         setText(text = n);
//     }
//     return (
//         <div>
//             <big>text is == {text}</big><br />
//             <button onClick={adder("Hello")}>Print Hello</button><br />
//             <button onClick={adder("World")}>Print World</button><br />
//             <button onClick={adder("Hello World")}>Print Hello World</button>
//         </div>
//     )
// }
// export default EventHandling;


// import React, { useState } from 'react';
// function OnClickEvent() {
//     const [count, setCount] = useState(0);
//     const increment = () => setCount(count + 1);
//     const decrement = () => setCount(count - 1);
//     return (
//         <div>
//             <p>Count: {count}</p>
//             <button onClick={increment}>Increment</button>
//             <button onClick={decrement}>Decrement</button>
//         </div>
//     );
// }
// export default OnClickEvent;

// import React, { useState } from 'react'
// export default function ChangeTextArea() {
//     let place = "Enter The Value"
//     const [text, setText] = useState("");
//     const setValueTextArea = (e) => setText(e.target.value);
//     const ConvertUpperCase = () => setText(text.toUpperCase());
//     const ConvertLowerCase = () => setText(text.toLowerCase());
//     const CountLetter = () => text.length;
//     const CountWord = () => text.split(" ").length;
//     let letter = CountLetter();
//     let word = CountWord();
//     return (
//         <div>
//             <p><big>Your Text is :- {text}</big></p>
//             <p><big>Total Letter is :- {letter}</big></p>
//             <p><big>Total word is :- {word-1}</big></p>
//             <textarea name="" id="" placeholder={place} onChange={setValueTextArea} value={text} cols="30" rows="10"></textarea><br />
//             <button onClick={ConvertUpperCase}>Convert UpperCase</button><br />
//             <button onClick={ConvertLowerCase}>Convert LowerCase</button><br />
//         </div>
//     )
// }


export default function AllDifferentEvents() {
    const handleOnClick = () => console.log("This is Click Event");
    const handleContextMenu = () => console.log("This is Contect Menu");
    const handleOnDoubleClick = () => console.log("This is Double Click Event");
    const handleOnMouseOver = () => console.log("This is Mouse Over Event");
    const handleOnMouseOut = () => console.log("This is Mouse Out Event");
    const handleMouseDown = () => console.log("This is Mouse Down Event");
    const handleMouseUp = () => console.log("This is Mouse Up Event");
    const handleMouseMove = () => console.log("This is Mouse Move Event");
    const handleChange = () => console.log("This is Input Change Event");
    const handleFocus = () => console.log("This is Input Focus Event");
    const handleBlur = () => console.log("This is Input Blur Event");
    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log("Form Has Been Submitted");
    }
    const handleKeyDown = () => console.log("This is Key Down Event");
    const handleKeyUp = () => console.log("This is Key Up Event");
    const handleScroll = () => console.log("You are scrolling the element...");
    const handleTouchStart = () => console.log("You are Touch Start");
    const handleTouchEnd = () => console.log("You are Touch End");
    return (
        <div>
            <button className="btn" onClick={handleOnClick}>Click Event</button><br />
            <button className="btn" onContextMenu={handleContextMenu}>Contect Menu</button><br />
            <button className="btn" onDoubleClick={handleOnDoubleClick}>Double Click Event</button><br />
            <button className="btn" onMouseOut={handleOnMouseOut} onMouseOver={handleOnMouseOver}>Mouse Over and Mouse Out Event</button><br />
            <button className="btn" onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}>Mouse Down and Mouse Up</button><br />
            <button className="btn" onMouseMove={handleMouseMove}>Mouse Move</button><br />
            <input style={{ width: 300 }} placeholder="This is On change , On Focus and On Blur event" type="text" onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} />
            <form action="" onSubmit={handleFormSubmit}>
                <big>This is a form</big>
                <input placeholder="This is a form Submit Event" type="text" name="" id="" />
            </form>
            <input style={{ width: 200 }} placeholder="This is Keydown and kwy up event" type="text" onKeyDown={handleKeyDown} onKeyUp={handleKeyUp} />
            <div style={{ overflow: 'scroll', width: 200, height: 200 }} onScroll={handleScroll}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt nulla, tempora reprehenderit nostrum, aspernatur placeat dolor, eveniet mollitia magni exercitationem assumenda dolorem eius ducimus alias adipisci! Totam explicabo voluptates quaerat.
            </div>
            <button className="btn" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>Touch Start and Touch End For Mobile</button>
        </div>
    )
}



// import React, { useState } from 'react';
// function InputChangeEventExample() {
//     const [text, setText] = useState('');
//     const handleInputChange = (event) => {
//         setText(event.target.value);
//     };
//     return (
//         <div>
//             <input type="text" value={text} onChange={handleInputChange} />
//             <p>You typed: {text}</p>
//         </div>
//     );
// }
// export default InputChangeEventExample;
