import { Button } from '@/components/ui/button';
import { FiDownload} from 'react-icons/fi';

const Home = () => {
  return (
    <section>
    <div className="container mx-auto h-full">Homepage</div>
    <div className='flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24'>
      <div className='text-center xl:text-left'>
      <span className='text-xl'>Software Developer</span>
      <h1 className='h1'>
        Hello! I'm <br/> <span className='text-amber-400'>Abdulkadir TARTILACI</span>
      </h1>
      <p className='max-w-[500px] mb-9 text-white/80'>I am a Software Developer working mainly on frontend.
      </p>
      <div>
        <Button></Button>
      </div>
      </div>


      <div>photo</div>
    </div>
    </section>
  )
}

export default Home;