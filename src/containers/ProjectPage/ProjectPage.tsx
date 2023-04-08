import React from 'react'

import './ProjectPage.scss'

import { mockedData } from './data'

interface IMockedData {
    id: number
    name: string
    description: string
    imageUrl: string
    contractTypeId: number
    contractSignedOn: string
    budget: number
    isActive: boolean
}

const ProjectPage = (): React.ReactElement => {
    return (
        <ul className='project__list'>
            {mockedData.map((item: IMockedData) => (
                <li className='project__list_item'>
                    <div>{item.id}</div>
                    <div>{item.name}</div>
                    <div>{item.description}</div>
                    <img className='image' src={item.imageUrl} alt='bmwTop' />
                    <div>{item.contractTypeId}</div>
                    <div>{item.contractSignedOn}</div>
                    <div>{item.budget}</div>
                    <div>{item.isActive}</div>
                </li>
            ))}
        </ul>
    )
}

export default ProjectPage
