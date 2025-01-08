import Link from 'next/link'
import { getLang } from '../components/Lang';
import { FaHome, FaRegUser, FaFileAlt, FaAddressCard, FaGithub, FaRegFile, FaLinkedinIn, FaMailBulk  } from "react-icons/fa";
import { useContext } from 'react';
import { CountryContext } from "../pages/_app";


export default function Layout({children}) {

    const country = useContext(CountryContext);
    const Language = getLang(country)

    // console.log('from ctx', country)


    return (
        <div className='lg:container lg:mx-auto mb-10 relative '>

            {/*  nav */}
            <div className="fixed top-0 left-0 z-50 navbar bg-base-100 shadow-sm shadow-gray-100  ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h7" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100  rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li><Link href="/">{Language.nav_home}</Link></li>
                            <li><Link href="/about">{Language.nav_about}</Link></li>
                            <li><Link href="/projects">{Language.nav_project}</Link></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl ">Ibrahim Mustapha</a>
                </div>
                <div className="navbar-center hidden lg:flex text-sm">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <Link href="/" >
                                <span><FaHome /></span>
                                <span>{Language.nav_home}</span>
                            </Link>
                        </li>
                        <li >
                            <Link href="/about" >
                                <span><FaRegUser /> </span>
                                <span>{Language.nav_about}</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/projects" >
                                <span><FaFileAlt /></span>
                                <span>{Language.nav_project}</span>
                            </Link>
                        </li>
                        <li>
                            <details>
                                <summary> <span><FaAddressCard  /></span>{Language.nav_contact}</summary>
                                <ul data-theme="night" className="menu menu-vertical rounded-box px-1">
                                    <li ><a href="https://linkedin.com/in/mustaphatg" target='_blank'>
                                        <span><FaLinkedinIn /></span>
                                        <span>Linkedin</span>
                                    </a></li>
                                    <li>
                                        <a href="https://github.com/mustaphatg" target='_blank'>
                                            <span><FaGithub /></span>
                                            <span>Github</span>
                                        </a>
                                    </li>
                                    <li >
                                        <a href="https://drive.google.com/file/d/1ReKwM_aDlwuxWJ18g9WuIJh_UBubJvy8/view?usp=drive_link" target='_blank'>
                                            <span><FaRegFile /></span>
                                            <span>Resume</span>
                                        </a>
                                    </li>
                                    <li >
                                        <a href="mailto:mustaphatg.001@gmail.com" target='_blank'>
                                            <span><FaMailBulk /></span>
                                            <span>Mail</span>
                                        </a>
                                    </li>
                                </ul>
                            </details>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end">
                </div>
            </div>

            {/* content */}
            <div className='bg-gray-800 p-4  mt-24 text-white w-11/12 mx-auto  rounded-md '>
                {children}
            </div>
        </div>

    )
}