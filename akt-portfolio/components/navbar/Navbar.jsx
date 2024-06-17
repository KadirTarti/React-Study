'use client';

import Link from 'next/link';
import {usePathname} from 'next/navigation';


const links = [
    {
        name: 'home',
        path:'/',
    },
    {
        name: 'services',
        path:'/services',
    },
    {
        name: 'resume',
        path:'/resume',
    },
    {
        name: 'my projects',
        path:'/myprojects',
    },
    {
        name: 'contact',
        path:'/contact',
    },
];

const Navbar = () => {
    const pathname = usePathname();
    return (
    <nav className='flex gap-8'>
    {links.map((link, index)=>{
        return (
            <Link href= {link.path} key={index} className={`${link.path=== pathname && "text-amber-300 border-b-2 border-amber-300"} capitalize font-medium hover:text-amber-300 transition-all`}>
            {link.name}
        </Link>
        );
    })}
    </nav>
  )
}

export default Navbar