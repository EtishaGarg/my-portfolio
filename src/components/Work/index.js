import './index.scss'
import Project_data from "../../data/Project_data"
import Project_Card from "../Cards/Project_Card"

const Work = () => {

    const project_cards = Project_data.map(item => {
        return (
            <Project_Card
                key={item.id}
                {...item}
            />
        )
    })

    return(
        <div className='flex-col justify-center items-center py-7 px-10'>

            {/* Project Links */}

            <div className='flex-col justify-center items-center text-center'>
                <p className='mt-2 text-4xl font-bold'>My Projects</p>
                <p className='mt-3 text-lg font-normal'>List of projects I've worked on and currently working</p>

                <div className='grid grid-cols-3 gap-12 mt-6'>
                    {project_cards}
                </div>
            </div>
        </div>
    )
}

export default Work