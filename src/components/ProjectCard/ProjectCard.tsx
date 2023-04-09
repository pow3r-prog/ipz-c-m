import React from 'react'

import { TMockedData } from 'types/mockedDataTypes'

import './ProjectCard.scss'

interface IData {
    project: TMockedData
    onEdit: (edit: TMockedData) => void
}

const ProjectCard = (data: IData): React.ReactElement => {
    const { project, onEdit } = data

    const handleEditClick = (projectBeingEdited: TMockedData) => {
        onEdit(projectBeingEdited)
    }

    return (
        <>
            <div className='name'>{project.name}</div>
            <p className='desc'>{project.description}</p>
            <img className='image' src={project.imageUrl} alt='bmwTop' />
            <div>{project.contractTypeId}</div>
            <div>{project.contractSignedOn}</div>
            <div>Budget : {project.budget}</div>
            <div>{project.isActive}</div>
            <button
                onClick={() => {
                    handleEditClick(project)
                }}
                className='btn'
            >
                Edit
            </button>
        </>
    )
}

export default ProjectCard
