// Images
import Webmark from '../../img/Web Design.svg';
import Hero from '../../img/hdr_image.svg';
import Experience from '../../img/undraw_escaping_my1b.svg';
import Responsive from '../../img/undraw_progressive_app_m9ms.svg';
// Css
import './home.css'

const HeadSection = () => {
    return(
        <>
        <section className='flex w-full flex-col bg-headerImg items-center image' id='home'>
            <div className='w-11/12'>
                <h1 className='text-3xl font-light  mt-24'><span className='text-primary font-extrabold'>W</span>elcome To The</h1>
                <h1 className='text-5xl'><span className='text-primary font-extrabold'>W</span>ebMark</h1>
                <img className='-mt-3 w-96' src={Webmark} alt={Webmark}/>
                <img className='mt-5' src={Hero} alt='hero' />
                <div className='mt-24 mb-20' id='intro'>
                    <div className='pt-2 w-full'>
                        <h2 className='text-white font-semibold underline text-xl mt-14'>Delivering Experience</h2>
                        <p className='mt-3 z-10'>Using latest technologies and trends to deliver more than just a Website</p>                        
                    </div>
                    <div className='w-full flex justify-end mt-5'> 
                        <span className='absolute font-extrabold italic text-primary mr-36 -mt-7 text-8xl'>X</span>
                        <span className='absolute font-semibold text-4xl tracking-tighter mt-5 right-6 italic text-white'>perience</span>
                        <img className='mt-14 mx-auto' src={Experience} alt='experence' />
                    </div>                    
                </div>
                <div>
                    <div className='w-full text-right'>
                        <h2 className='text-white font-semibold underline text-xl mt-20'>Beautifull and Responsive</h2>
                        <p className='mt-3 z-10'>Wherever Your customers will browse - Mobile, Desktop or Tablet - product always looks great and responsive</p>
                    </div>
                    <div className='w-full flex justify-start mt-5'> 
                        <span className='absolute font-extrabold italic text-primary mt-2 text-6xl'>EVERY</span>
                        <span className='absolute font-semibold text-4xl tracking-tighter italic ml-40 mt-6 text-white'>device</span>
                        <img className='mt-14 mx-auto' src={Responsive} alt='experence' />
                    </div>

                </div>
            </div>
        </section>
        </>
    )
}

export default HeadSection;
