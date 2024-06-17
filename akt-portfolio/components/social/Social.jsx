import { icons } from 'lucide-react'
import Link from 'next/link'
import {FaGithub, FaLinkedinIn, FaXing} from 'react-icons/fa'

const socialContacts = [
    {icon: <FaGithub/>, path: ""},
    {icon: <FaLinkedinIn/>, path: ""},
    {icon: <FaXing/>, path: ""},
]

const Social = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
    {socialContacts.map((item, index)=> {
        return (
            <Link key={index} href={item.path} className={iconStyles}>
                {item.icon}
            </Link>
        )
    })}
    </div>
  )
}

export default Social