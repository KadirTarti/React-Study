import logo from '../assets/nba-logo.png'

const Header = () => {
  return (
    <div className='tex-center'>
    <img   src={logo} alt="" />
    <h1 className='text-danger'>NBA Legends</h1>
    </div>
  )
}

export default Header