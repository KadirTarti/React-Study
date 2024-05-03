export const Navbar = () => {
    return (
        <header className="w-full h-[70px] bg-slate-500 items-center flex justify-between">
            <div className='flex items-center gap-10'>
                <span>LOGO</span>
                <ul className='flex gap-10'>
                    <li>Dashboard</li>
                    <li>New Blog</li>
                    <li>About</li>
                </ul>
            </div>
            <div>
                <span>ICON</span>
            </div>
        </header>
    )
}
