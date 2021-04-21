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
            <div className='w-11/12 max-w-screen-xl'>
                <h1 className='text-3xl font-light  mt-24'><span className='text-primary font-extrabold'>W</span>elcome To The</h1>
                <h1 className='text-5xl'><span className='text-primary font-extrabold'>W</span>ebMark</h1>
                <img className='-mt-3 w-96' src={Webmark} alt={Webmark}/>
                <img className='mt-14' src={Hero} alt='hero' />
                <div id='intro'>
                    <div className='pt-20 w-full my-32'>
                        <h2 className='text-white font-semibold underline text-xl'>Delivering Experience</h2>
                        <p className='mt-3 z-10'>I am Using latest technologies and trends in all of my projects to deliver more than just a Website. I strive to deliver smooth and enjoyable user experience</p>
                    </div>
                    <div className='w-full flex justify-end'>
                        <span className='absolute font-extrabold italic text-primary mr-36 -mt-16 text-8xl'>X</span>
                        <span className='absolute font-semibold text-4xl tracking-tighter -mt-4 right-6 italic text-white'>perience</span>
                        <img className='mt-5 mx-auto' src={Experience} alt='experence' />
                    </div>
                </div>
                <div className='mt-44'>
                    <div className='w-full text-right my-32'>
                        <h2 className='text-white font-semibold underline text-xl mt-20'>Beautifull and Responsive</h2>
                        <p className='mt-3 z-10'>Wherever Your customers will browse - Mobile, Desktop or Tablet - final product will always looks great and responsive and ready to be used on all devices</p>
                    </div>
                    <div className='w-full flex justify-start mt-5'>
                        <span className='absolute font-extrabold italic text-primary -mt-4 text-6xl'>EVERY</span>
                        <span className='absolute font-semibold text-4xl tracking-tighter italic ml-40 text-white'>device</span>
                        <img className='mt-8 mx-auto' src={Responsive} alt='experence' />
                    </div>

                </div>
            </div>
        </section>
        </>
    )
}

export default HeadSection;
