import { useState } from 'react';
import emailjs from 'emailjs-com';

const Form = () => {

    const [details, setDetails] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm('mkuracka_gmail', 'mkuracka_gmail', e.target, 'user_zFV7MpAUzro7F8g0odthS')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log('error, not sent', error.text)
        });
    }

    const handleChange = (e) => {
        setDetails({
            ...details,
            [e.target.name]: e.target.value
        })
    }

    return(
        <form className='w-full max-w-lg flex justify-center flex-col bg-primary2 p-3' type='submit' onSubmit={handleSubmit} onChange={handleChange}>
            <label className='flex flex-col my-3' for='name'>
                <input className='w-11/12 h-10 mx-auto p-3' type='text' name='name' id='name' placeholder='Name'/>
            </label>
            <label className='flex flex-col my-3' for='email'>
                <input className='w-11/12 h-10 mx-auto p-3' type='email' name='email' id='email' placeholder='Email'/>
            </label>
            <label className='flex flex-col my-3' for='textfield'>
                <textarea className='w-11/12 h-32 mx-auto p-3' type='text' name='message' id='textfield' placeholder='Message text'/>
            </label>
            <button className='w-11/12 my-3 bg-primary h-10 text-secondary mx-auto ' type='submit'>Send</button>
        </form>
    )
}

export default Form;