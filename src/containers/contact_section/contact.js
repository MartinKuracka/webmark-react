import { useState } from 'react';
// Cmponents
import Form from '../../components/form/form';
// i18n tanslation
import { useTranslation } from 'react-i18next';

const ContactSection = () => {

    const { t } = useTranslation();

    const [hidden, setHidden] = useState(false);
    const [infomessage,setMessage] = useState(`${t('KontaktT1')}`);

    return(
        <div className='flex w-full min-h-full justify-center' id='contact'>
            <div className='flex flex-col w-11/12 max-w-1024 mt-20'>
                <h1 className='w-11/12 max-w-500 text-left'>{t('Kontakt')}</h1>
                <div className='flex flex-col lg:flex-row'>
                    <div className='flex w-full justify-around flex-col max-w-lg text-right p-3 bg-secondary'>
                        <h1 className='text-4xl text-primary2 tracking-tighter px-4'>{infomessage}</h1>
                        <h2 className='text-2xl font-bold text-primary my-5 px-4' hidden={hidden}>{t('Just')}</h2>
                    </div>
                    <Form className='mt-5' setHidden={setHidden} setMessage={setMessage}/>
                </div>
            </div>
        </div>
    )
}

export default ContactSection;