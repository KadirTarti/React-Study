import Link from 'next/link'
import {Button} from '../ui/button'

//components
import Navbar from '../navbar/Navbar'
import MobileNav from '../helpers/MobileNav'


const Header = () => {
  return (
    <header className='py-8 xl:py-12 text-white bg-pink-950'>
    <div className="container mx-auto flex justify-between items-center">
    {/* myLogo */}
    <Link href="/">
      <h1 className='text-4xl font-semibold'><span className='text-amber-300'> » </span>A K T</h1>
    </Link>

    {/* navbar & why me button */}
    <div className="hidden xl:flex items-center gap-8">
    <Navbar/>
    <Link href='/contact'>
    <Button className='text-xl bg-gray-700 text-amber-300'>L M W T</Button>
    </Link>
    </div>

    {/* mobile navigator */}
    <div className="xl:hidden">
      <MobileNav/>
    </div>

    </div>
    </header>
  )
}

export default Header