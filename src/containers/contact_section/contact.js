import Form from '../../components/form/form';

const ContactSection = () => {
    return(
        <div className='flex w-full h-screen justify-center' id='contact'>
            <div className='w-11/12 flex-col mt-20'>
                <h1>Contact</h1>
                <Form className='mt-5' />
            </div>
        </div>
    )
}

export default ContactSection;