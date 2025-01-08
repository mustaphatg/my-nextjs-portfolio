import Link from 'next/link'
import { getLang } from '../components/Lang';



// import Footer from './footer'

export default function Layout({ children }) {


    const Language = getLang(children?.props?.country)


    return (
        <div className='md:container md:mx-auto '>

            {/*  nav */}
            <div data-theme="night" className="navbar bg-base-100 border-b-1 shadow-sm">
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
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li><Link href="/">{Language.nav_home}</Link></li>
                            <li><Link href="/about">{Language.nav_about}</Link></li>
                            <li><Link href="/projects">{Language.nav_project}</Link></li>
                            <li>
                                <a>{Language.nav_language}</a>
                                <ul className="p-2">
                                    <li><a>English</a></li>
                                    <li><a>Francais</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl ">Ibrahim Mustapha</a>
                </div>
                <div className="navbar-center hidden lg:flex text-sm">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link href="/">{Language.nav_home}</Link></li>
                        <li><Link href="/about">{Language.nav_about}</Link></li>
                        <li><Link href="/projects">{Language.nav_project}</Link></li>
                        <li >
                            <details className='z-50' >
                                <summary>{Language.nav_language}</summary>
                                <ul className="absolute bg-base-100  p-2  rounded-t-none">
                                    <li><a>English</a></li>
                                    <li><a>Francais</a></li>
                                </ul>
                            </details>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <label className="flex cursor-pointer gap-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round">
                            <circle cx="12" cy="12" r="5" />
                            <path
                                d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                        </svg>
                        <input type="checkbox" value="night" className="toggle theme-controller" />
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round">
                            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                        </svg>
                    </label>
                </div>
            </div>




            {/* content */}
            <div className='bg-gray-600 p-4 border text-white w-11/12 mx-auto mt-2 rounded-md'>
                {children}
            </div>
        </div>

    )
}