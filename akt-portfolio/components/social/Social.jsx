import { icons } from 'lucide-react'
import Link from 'next/link'
import {FaGithub, FaLinkedinIn, FaXing} from 'react-icons/fa'

const socialContacts = [
    {icon: <FaGithub/>, path: "https://github.com/KadirTarti"},
    {icon: <FaLinkedinIn/>, path: "https://www.linkedin.com/in/tartilaci/"},
    {icon: <FaXing/>, path: "https://www.xing.com/profile/Abdulkadir_Tartilaci/web_profiles?expandNeffi=true"},
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