import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <header className="w-full h-[70px] bg-slate-500 items-center flex justify-between">
            <div className='flex items-center gap-10'>
                <span>LOGO</span>
                <ul className='flex gap-10'>
                    <li><Link to="/dashboard">Dashboard</Link></li>
                    <li><Link to="/new-blog">New Blog</Link></li>
                    <li><Link to="/about"> About</Link></li>
                </ul>
            </div>
            <div>
                <span>ICON</span>
            </div>
        </header>
    )
}
