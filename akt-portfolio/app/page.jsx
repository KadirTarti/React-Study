import { Button } from '@/components/ui/button';
import { FiDownload} from 'react-icons/fi';

//components
import Social from '@/components/Social';
import Photo from '@/components/Photo';

const Home = () => {
  return (
    <section className='h-full'>
    <div className="container mx-auto h-full">
    <div className='flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24'>
      <div className='text-center xl:text-left order-2 xl:order-none'>
      <span className='text-xl'>Software Developer</span>
      <h1 className='h1'>
        Hello! I'm <br/> <span className='text-amber-400'>Abdulkadir TARTILACI</span>
      </h1>
      <p className='max-w-[500px] mb-9 text-white/80'>I am a Software Developer and working mainly on frontend. I love design!
      </p>
      <div className='flex flex-col xl:flex-row items-center gap-8'>
        <Button variant='outline' size='lg' className='uppercase flex items-center gap-2 text-amber-300 bg-transparent hover:text-white hover:bg-pink-900'>
          <span className=''>Download CV</span>
          <FiDownload className='text-xl'/>
        </Button>
        <div className='mb-8 xl:mb-0'>
        <Social containerStyles='flex gap-6' iconStyles='w-9 h-9 border border-white rounded-full flex justify-center items-center text-amber-300 text-base hover:bg-amber-300 hover:text-primary hover:transition-all duration:500'/>
        </div>
      </div>
      </div>


      <div className='order-1 xl:order-none mb-8 xl:mb-0'>
      <Photo/>
      </div>
    </div>
    </div>
    </section>
  )
}

export default Home;