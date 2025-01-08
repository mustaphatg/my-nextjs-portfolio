import Layout from '../components/OtherLayout'

export default function About() {

	return (
		<div className=''>
			<p>About Mustapha</p>
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
