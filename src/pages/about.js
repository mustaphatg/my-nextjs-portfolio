import Layout from '../components/OtherLayout'
import { getLang } from '../components/Lang';
import { useContext } from 'react';
import { CountryContext } from "./_app";



export default function About() {


	const country = useContext(CountryContext);

	const Language = getLang('en')


	function nl2br(str) {
		return str.replace(/\n/g, '<br>');
	}

	return (
		<div className='about leading-loose'>

			<h1 className='py-10 text-center'> {Language.about_me} </h1>


			<div className='p-6 md:p-10'>
				<h3 className='text-sky-300 text-2xl font-serif'>Diving into tech</h3>
				<p dangerouslySetInnerHTML={{ __html: nl2br(Language.ab_diving_into_tech) }} />
			</div>

			<div className="divider divider-primary"></div>

			<div className='mt-6 p-6 md:p-10'>
				<h3 className='text-sky-300 text-2xl font-serif'> Meeting Python and HTML </h3>
				<p dangerouslySetInnerHTML={{ __html: nl2br(Language.ab_meeting_languages) }} />
			</div>

			<div className="divider divider-primary"></div>


			<div className='mt-6 p-6 md:p-10'>
				<h3 className='text-sky-300 text-2xl font-serif'> I had to specialize </h3>
				<p dangerouslySetInnerHTML={{ __html: nl2br(Language.ab_specialize) }} />
			</div>

		</div>
	)
}




About.getLayout = function getLayout(page) {
	return (
		<Layout>
			{page}
		</Layout>
	)
}
