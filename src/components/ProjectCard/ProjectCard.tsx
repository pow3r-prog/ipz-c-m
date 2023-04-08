import React from 'react'

import './ProjectCard.scss'

export interface IMockedData {
    id: number
    name: string
    description: string
    imageUrl: string
    contractTypeId: number
    contractSignedOn: string
    budget: number
    isActive: boolean
}

interface IData {
    data: IMockedData
}

const ProjectCard = (data: IData): React.ReactElement => {
    const project: IData = data
    const handleEditClick = (projectBeingEdited: IMockedData) => {
        console.log(projectBeingEdited)
    }
    return (
        <>
            <div className='name'>{project.data.name}</div>
            <p className='desc'>{project.data.description}</p>
            <img className='image' src={project.data.imageUrl} alt='bmwTop' />
            <div>{project.data.contractTypeId}</div>
            <div>{project.data.contractSignedOn}</div>
            <div>Budget : {project.data.budget}</div>
            <div>{project.data.isActive}</div>
            <button
                onClick={() => {
                    handleEditClick(project.data)
                }}
                className='btn'
            >
                Edit
            </button>
        </>
    )
}

export default ProjectCard
