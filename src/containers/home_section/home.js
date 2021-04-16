import backgroundImg from '../../img/hdr_background.svg';
import Webmark from '../../img/Web Design.svg';
import Hero from '../../img/hdr_image.svg'

const HeadSection = () => {
    return(
        <>
        <div className='flex w-full h-screen flex-col bg-headerImg items-center' id='home'>
            <div className='w-11/12'>
                <h1 className='text-3xl font-light  mt-24'><span className='text-primary font-extrabold'>W</span>elcome To The</h1>
                <h1 className='text-5xl'><span className='text-primary font-extrabold'>W</span>ebMark</h1>
                <img className='-mt-3 w-96' src={Webmark} alt={Webmark}/>
                <img className='mt-5' src={Hero} alt='hero' />
            </div>
        </div>
        </>
    )
}

export default HeadSection;
