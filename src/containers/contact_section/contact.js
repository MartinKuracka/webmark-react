import { useState } from 'react';
// Cmponents
import Form from '../../components/form/form';

const ContactSection = () => {

    const [hidden, setHidden] = useState(true);
    const [infomessage,setMessage] = useState('');

    return(
        <div className='flex w-full h-screen justify-center' id='contact'>
            <div className='flex flex-col w-11/12 max-w-screen-xl mt-20'>
                <h1 className='w-11/12 max-w-lg text-left'>Contact</h1>
                <div className='flex flex-col lg:flex-row'>
                    <div className='flex w-full justify-around flex-col max-w-lg text-right p-3 bg-secondary'>
                        <h1 className='text-4xl text-primary2  tracking-tighter'>Did You like anything in here?</h1>
                        <h2 className='font-bold text-primary my-5'>Then get in touch, we'll have a chat or create something amazing together... just drop me a message</h2>
                    </div>
                    <Form className='mt-5' setHidden={setHidden} setMessage={setMessage}/>
                </div>
                <div className='h-20 w-full'>

               
                    <p className='text-2xl mt-10 max-w-md text-primary' hidden={hidden}>{infomessage}</p>    
                </div>  
            </div>
        </div>
    )
}

export default ContactSection;