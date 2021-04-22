import { useState } from 'react';

const Form = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e);
    }

    const handleChange = (e) => {
        console.log(e.target.value);
    }

    return(
        <form className='w-full max-w-lg flex justify-center flex-col bg-primary2 p-3' type='submit' onSubmit={handleSubmit} onChange={handleChange}>
            <label className='flex flex-col my-3' for='name'>
                <input className='w-11/12 h-10 mx-auto p-3' type='text' id='name' placeholder='Name'/>
            </label>
            <label className='flex flex-col my-3' for='email'>
                <input className='w-11/12 h-10 mx-auto p-3' type='email' id='email' placeholder='Email'/>
            </label>
            <label className='flex flex-col my-3' for='textfield'>
                <textarea className='w-11/12 h-32 mx-auto p-3' type='text' id='textfield' placeholder='Message text'/>
            </label>
            <button className='w-11/12 my-3 bg-primary h-10 text-secondary mx-auto ' type='submit'>Send</button>
        </form>
    )
}

export default Form;