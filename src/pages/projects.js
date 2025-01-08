import Image from 'next/image'
import Layout from '../components/OtherLayout'
import MyProject from '../components/MyProject'
import { getLang } from '../components/Lang';




export default function Project({country}) {


    const Language = getLang(country)


    return (
        <div className=''>

            <h1> {Language.p_my_projects} </h1>

            {/* projects */}
            <div className='flex flex-col md:flex-row md:flex-wrap mt-4 text-center'>

                {MyProject.map(project => (

                    <div className="card glass w-auto m-2 mx-4 md:w-1/4 ">
                        <figure>
                            <Image
                                src={project.image}
                                width={500} height={500}
                                alt={project.name} />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{project.name}</h2>
                            <p>{project.info}</p>
                            <p>
                                {project?.tags.map(tag => (
                                    <span className="badge badge-neutral p-4">{tag}</span>
                                ))}
                            </p>
                            <div className="card-actions justify-end">
                                <a target='_blank' href={project.link} className="btn btn-primary">{Language.visit}</a>
                            </div>
                        </div>
                    </div>

                ))}

            </div>



        </div>
    )
}




Project.getLayout = function getLayout(page) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}
