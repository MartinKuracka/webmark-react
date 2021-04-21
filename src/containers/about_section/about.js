
import Myface from '../../img/face_BW2.PNG';

const AboutSection = () => {
    return(
        <div className='flex w-full h-screen justify-center' id='about'>
            <div className='w-11/12 flex mt-20 flex-col'>
                <h1 className='text-secondary'>About</h1>
                <div className='h-screen w-full bg-secondary shadow-xl'>
                    <div className='flex justify-center mt-5'>
                        <img className='w-1/3 br-5 rounded-full border-primary shadow-inner' src={Myface} alt='face' />
                        <h2 className='w-1/2 text-primary font-bold ml-5 mt-5 '>And now...  Get to know me</h2>                        
                    </div>
                    <p className='text-primary m-5 text-sm'>My name is Martin and I am glad You want to get to know me. I live in beautifull country in the heart of Europe - Slovakia. I lived in Spain, later in UK and now I am back here. I came from Electrical Engineering background and switched to Web Development not long ago. I really enjoy creating meaningfull and eye catching designs, like to take on challenges and constanty work on my skills. My motto is - no judgements, be respectfull, honest and always try Your best! When I make mistake, I learn from it and come out smarter. Life is a journey of constant learning and we should not be afraid to ask the right questions in order to get better. And that is what I do. </p>
                    <p className='text-primary m-5 text-sm font-bold'>I want to do things, learn, improve and go forward - not only at work but in life as well...</p>
                </div>
            </div>
        </div>
    )
}

export default AboutSection;