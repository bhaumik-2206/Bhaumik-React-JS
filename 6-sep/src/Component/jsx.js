// function Item({ name, isFruit }) {
//     if (isFruit) {
//         return <li className="item">{name}</li>;
//     }
// }
// export default function PackingList() {
//     return (
//         <div>
//             <h1>List Fruit</h1>
//             <ul className="list-fruit">
//                 <Item isFruit={true} name="Apple" />
//                 <Item isFruit={true} name="Banana" />
//                 <Item isFruit={false} name="Potato" />
//             </ul>
//         </div>
//     );
// }

// function Item({ name, isFruit }) {
//     return (
//         <li className="item">
//             {isFruit ? (name + ' ✔') : (<del>{name}</del>)}
//         </li>
//     );
// }
// export default function PackingList() {
//     return (
//         <section>
//             <h1>Sally Ride's Packing List</h1>
//             <ul>
//                 <Item isFruit={true} name="Apple" />
//                 <Item isFruit={true} name="Banana" />
//                 <Item isFruit={false} name="Potato" />
//             </ul>
//         </section>
//     );
// }

// const people = [
//     'Hello Guys,',
//     'This is A Text',
//     'We are Learning React JS',
//     'We are Learning React JS JSX',
//     'Use Map In JSX'
// ];
// export default function AddData() {
//     return (
//         <div>
//             <ul>
//                 {people.map((ele,i) => (
//                     <li key={i}>{ele}</li>
//                 ))}
//             </ul>
//         </div>
//     )
// }

// export default function printNumber() {
//     return (
//         <div>

//         </div>
//     )
// }

let guest = 0;
function Cup() {
    guest++;
    console.log(guest)
    return <h2>#{guest}</h2>;
}
export default function TeaSet() {
    return (
        <>
            <Cup />
            <Cup />
            <Cup />
        </>
    );
}

// let url = "https://www.shutterstock.com/shutterstock/photos/1127238599/display_1500/stock-photo--micro-peacock-feather-hd-image-best-texture-background-colourful-indian-peacock-feather-1127238599.jpg"

// function AddImage() {
//     return (
//         <img src={url} width={300} />
//     )
// }

// export default function DisplayImage() {
//     return (
//         <div>
//             <AddImage />
//             <AddImage />
//             <AddImage />
//             <AddImage />
//             <AddImage />
//             <AddImage />
//         </div>
//     )
// }