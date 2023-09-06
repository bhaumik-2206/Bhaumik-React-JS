import { useState } from 'react'
export default function MyForm() {
    const [formData, setFormData] = useState({ fname: "", lname: "", email: "" });
    const [submited, setSubmit] = useState(false);
    const handleSubmitForm = (e) => {
        e.preventDefault();
        const { fname, lname, email } = e.target
        if (e.target.fname.value.trim() !== "" && e.target.lname.value.trim() !== "" && e.target.email.value.trim() !== "") {
            setFormData({
                fname: fname.value,
                lname: lname.value,
                email: email.value
            });
            setSubmit(true);
            e.target.reset();
        } else {
            alert("Pleaser Enter The Value Properly!!!")
        }
    }
    return (
        <div>
            <form action="" onSubmit={handleSubmitForm}>
                <input type="text" name='fname' required /><br />
                <input type="text" name='lname' required /><br />
                <input type="email" name='email' required /><br />
                <button type="submit">Submit</button>
            </form>
            {submited ?
                (<div>
                    <h2>Your Data</h2>
                    <big>First Name is = {formData.fname}</big><br />
                    <big>Last Name is = {formData.lname}</big><br />
                    <big>Email is = {formData.email}</big><br />
                </div>) :
                (<h2>Please Enter Your Data</h2>)
            }
        </div>
    )
}