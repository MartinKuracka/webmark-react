import Form from '../../components/form/form';

const ContactSection = () => {
    return(
        <div className='flex w-full h-screen justify-center' id='contact'>
            <div className='flex items-center w-11/12 max-w-screen-xl flex-col mt-20'>
                <h1>Contact</h1>
                <Form className='mt-5' />
            </div>
        </div>
    )
}

export default ContactSection;