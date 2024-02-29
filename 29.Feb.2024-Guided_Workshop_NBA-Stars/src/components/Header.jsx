import logo from '../assets/nba-logo.png'

const Header = () => {
  return (
    <div className='text-center mt-4'>
    <img   src={logo} alt="" />
    <h1 className='mt-4'>NBA Legends</h1>
    </div>
  )
}

export default Header