import Underline from '../../img/underline.png';

const CoopSection = () => {

    return(
        <div className='w-full flex justify-center mt-36' id='coop'>
            <div className='flex flex-col w-11/12 justify-center my-20'>
                <h1 className='w-full text-right text-primary z-10'>Coop</h1>
                <div className='flex w-full bg-secondary flex-col md:flex-row'>
                    {/* First item */}
                    <div className='flex flex-col w-11/12 md:w-1/4 p-5'>
                        <h2 className='font-bold text-primary'>Initial consultation</h2>
                        <img className='w-20' src={Underline} alt='underline' />
                        <p className='text-primary text-sm mt-3'>At the beginning of every project It is crucial to determine few key factors. We will get to know each other and discuss the purpose of the project or target audience amongst other things. At this stage we have to get a clear idea of what we are going to build and how we will do it.</p>
                    </div>
                    {/* Second item */}
                    <div className='flex flex-col w-11/12 md:w-1/4 p-5'>
                        <h2 className='font-bold text-primary'>Design mockups and prototypes</h2>
                        <img className='w-20' src={Underline} alt='underline' />
                        <p className='text-primary text-sm mt-3'>After clear definition of the project and tools we will use, we will get to preparing user flow diagrams, design mockups and later prototypes. At each of these stages we will make reviews and implement necessary changes based on additional requirements.</p>
                    </div>
                    {/* Third item */}
                    <div className='flex flex-col w-11/12 md:w-1/4 p-5'>
                        <h2 className='font-bold text-primary'>Project realisation</h2>
                        <img className='w-20' src={Underline} alt='underline' />
                        <p className='text-primary text-sm mt-3'>Once the design has been agreed on and approved, the main realisation of the project can begin. I will start coding and bringing the idea to life using the best tools available for modern Web Design. As in the previous stages, periodic reviews will be conducted in order to track the progress and design compliance.</p>
                    </div>
                        {/* Third item */}
                        <div className='flex flex-col w-11/12 md:w-1/4 p-5'>
                        <h2 className='font-bold text-primary'>Putting it online</h2>
                        <img className='w-20' src={Underline} alt='underline' />
                        <p className='text-primary text-sm mt-3'>After succesfull build of the project we will make deep review and go through several UX tests together to make sure everything works as intended and project is ready to be released. After this step, there is one last thing to do - put it online and make Your website alive...</p>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default CoopSection;
