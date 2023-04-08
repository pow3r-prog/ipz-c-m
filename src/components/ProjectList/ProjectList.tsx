import React from 'react'
import ProjectCard from 'components/ProjectCard/ProjectCard'
import ProjectForm from 'components/ProjectForm/ProjectForm'

import { mockedData } from '../../components/ProjectList/data'

import './ProjectList.scss'

const ProjectList = (): React.ReactElement => {
    return (
        <div className='project__list'>
            {mockedData.map((project): any => (
                <span>
                    <div className='project__list_item' key={project.id}>
                        <ProjectCard data={project} />
                    </div>
                    <ProjectForm />
                </span>
            ))}
        </div>
    )
}

export default ProjectList
