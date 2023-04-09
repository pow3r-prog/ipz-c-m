import React, { useState } from 'react'
import ProjectCard from 'components/ProjectCard/ProjectCard'
import ProjectForm from 'components/ProjectForm/ProjectForm'

import { TMockedData } from 'types/mockedDataTypes'

import { mockedData } from 'mockedData/data'

import './ProjectList.scss'

const ProjectList = (): React.ReactElement => {
    const [projectBeingEdited, setProjectBeingEdited] =
        useState<TMockedData | null>(null)
    const [projects, setProjects] = useState<TMockedData[]>(mockedData)

    const handleEdit = (project: TMockedData) => {
        setProjectBeingEdited(project)
    }

    const handleSave = (updatedProject: TMockedData) => {
        const updateState = projects.map((item): TMockedData => {
            if (item.id === updatedProject.id) {
                return {
                    ...item,
                    name: updatedProject.name,
                    description: updatedProject.description,
                    budget: updatedProject.budget,
                }
            }
            return item
        })
        console.log('Saving project: ', updatedProject)
        setProjects(updateState)
        setProjectBeingEdited(null)
    }

    const cancelEditing = () => {
        setProjectBeingEdited(null)
    }

    return (
        <div className='project__list'>
            {projects.map(project => (
                <span key={project.id}>
                    {projectBeingEdited &&
                    projectBeingEdited.id === project.id ? (
                        <ProjectForm
                            onCancel={cancelEditing}
                            onSave={handleSave}
                            project={project}
                        />
                    ) : (
                        <div className='project__list_item'>
                            <ProjectCard
                                project={project}
                                onEdit={handleEdit}
                            />
                        </div>
                    )}
                </span>
            ))}
        </div>
    )
}

export default ProjectList
