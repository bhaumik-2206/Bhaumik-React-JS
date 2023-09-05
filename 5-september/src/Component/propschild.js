// export default function ChildComponent(props) {
//     return <button onClick={props.onClick}>Click Me</button>;
// }

// export default function ChildComponent(props) {
//     return props.showText ? <div>Show this text</div> : null;
// }

// export default function ChildComponent(props) {
//     return (
//         <div>
//             <p>Name: {props.person.name}</p>
//             <p>Age: {props.person.age}</p>
//         </div>
//     );
// }

export default function ChildComponent(props) {
    const numberList = props.numbers.map((num) => <span key={num}>-{num}</span>);
    return <ul>{numberList}</ul>;
}