let packs = [
    { id: 1, value: "pack-1" },
    { id: 2, value: "pack-2" },
    { id: 3, value: "pack-3" },
    { id: 4, value: "pack-4" },
    { id: 5, value: "pack-5" },
    { id: 6, value: "pack-6" },
    { id: 7, value: "pack-7" },
    { id: 8, value: "pack-8" },
];
let batch = [
    { id: 1, batch: "A1" },
    { id: 2, batch: "A2" },
    { id: 3, batch: "A3" },
    { id: 4, batch: "A4" },
    { id: 5, batch: "A5" },
    { id: 6, batch: "A6" },
    { id: 7, batch: "A7" },
    { id: 8, batch: "A8" },
];
export function Pack() {
    return (
        <>
            {packs.map((ele, index) => (
                <option key={index} value={ele.value}>{ele.value}</option>
            ))}
        </>
    )
}
export function Batch({ selectedOption, setSelectedOptionBatch }) {
    let index = packs.findIndex(ele => selectedOption === ele.value);
    if (index !== -1) {
        setSelectedOptionBatch(batch[index].batch);
    } else {
        setSelectedOptionBatch("");
    }
    return (
        <>
            {batch.map((ele, index) => (
                <option key={index} value={ele.batch}>{ele.batch}</option>
            ))}
        </>
    )
}