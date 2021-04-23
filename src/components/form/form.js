import { useState } from 'react';
import emailjs from 'emailjs-com';

const Form = ({setHidden, setMessage}) => {    
    
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
            setMessage('Thanks! Your message has been sent, I will get back to You soon...')
            setHidden(false);
            e.target[0].value = '';
            e.target[1].value = '';
            e.target[2].value = '';
        }, (error) => {
            setMessage('...Oops, could not send the message, something went wrong,please try again');
            setHidden(false);
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
        <>
        <form className='w-full max-w-lg flex justify-center flex-col bg-primary2 p-3' type='submit' onSubmit={handleSubmit} onChange={handleChange}>
            <label className='flex flex-col my-3' htmlFor='name'>
                <input className='w-11/12 h-10 mx-auto p-3' type='text' name='name' id='name' placeholder='Name'/>
            </label>
            <label className='flex flex-col my-3' htmlFor='email'>
                <input className='w-11/12 h-10 mx-auto p-3' type='email' name='email' id='email' placeholder='Email' required/>
            </label>
            <label className='flex flex-col my-3' htmlFor='textfield'>
                <textarea className='w-11/12 h-32 mx-auto p-3' type='text' name='message' id='textfield' placeholder='Message text' required/>
            </label>
            <button className='w-11/12 my-3 bg-primary h-10 text-secondary mx-auto ' type='submit'>Send</button>
        </form>        
        </>

    )
}

export default Form;