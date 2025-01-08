import { getLang } from '../components/Lang';
import Link from 'next/link'
import { FaHome, FaRegUser, FaFileAlt, FaLanguage , FaGithub, FaRegFile, FaLinkedinIn, FaMailBulk } from "react-icons/fa";



export default function Home({country}) {


	const Language = getLang(country)

	return (
		<div className='h-screen md:container md:mx-auto  bg-cover bg-center bg-no-repeat home_bg relative'>


			<div className="absolute h-full w-full " style={{ backgroundColor: "#0F172ACC" }}>

				{/* Nav 1 */}
				<div className='w-1/2 mx-auto hidden lg:block'>

					<ul data-theme="night" className='home_nav justify-evenly bg-base-100 rounded-box mx-auto shadow-xl w-full mt-5 menu menu-horizontal px-1'>
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
								<summary> <span><FaLanguage /></span>{Language.nav_language}</summary>
								<ul className="absolute bg-base-100  p-2">
									<li><a>English</a></li>
									<li><a>Francais</a></li>
								</ul>
							</details>
						</li>
					</ul>
				</div>

				{/* Nav 2 */}
				<div data-theme="night" className="lg:hidden navbar bg-base-100 border-b-1 shadow-sm">
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
						<a className="btn btn-ghost text-xl btn-actve">Ibrahim Mustapha</a>
					</div>
					<div className="navbar-center hidden lg:flex">
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
				</div>


				{/* content */}
				<div className='pl-3'>

					<div className='flex flex-col mx-auto w-3/4 mt-24 sm:mt-40'>

						<h1 className='font-bold text-gray-300 font-serif text-3xl my-3 '>Ibrahim Mustapha.</h1>

						<h1 className='font-serif sm:text-3xl text-sky-400 my-3 '> {Language.home_enthu}</h1>

						<h1 className=' text-gray-300 font-light sm:text-2xl my-6'> <i> {Language.home_info} </i></h1>
					</div>


					<div className='mx-auto w-3/4 mt-5'>

						<ul data-theme="night" className="menu menu-horizontal rounded-box px-1">
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

					</div>
				</div>




			</div>



		</div>
	)
}

