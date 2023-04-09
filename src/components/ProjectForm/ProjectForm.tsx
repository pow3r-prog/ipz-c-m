import React, { useState } from 'react'
import { TMockedData } from 'types/mockedDataTypes'

import './ProjectForm.scss'

interface IForm {
    onCancel: () => void
    onSave: (project: TMockedData) => void
    project: TMockedData
}

const ProjectForm = ({
    onCancel,
    onSave,
    project,
}: IForm): React.ReactElement => {
    const [input, setInput] = useState<TMockedData>({
        name: project.name,
        description: project.description,
        budget: project.budget,
        id: project.id,
    })

    const handleChangeItem = (
        fieldName: string,
        event: string | boolean,
    ): void => {
        setInput({
            ...input,
            [fieldName]: event,
        })
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault()
        onSave(input)
    }

    return (
        <form className='form' onSubmit={handleSubmit}>
            <label htmlFor='name'>Project Name</label>
            <input
                type='text'
                name='name'
                placeholder='Enter name'
                value={input.name}
                onChange={event => handleChangeItem('name', event.target.value)}
            />
            <label htmlFor='description'>Project Description</label>
            <textarea
                name='description'
                placeholder='Enter description'
                value={input.description}
                onChange={event =>
                    handleChangeItem('description', event.target.value)
                }
            />
            <label htmlFor='budget'>Project Budget</label>
            <input
                type='number'
                name='budget'
                placeholder='Enter budget'
                value={input.budget}
                onChange={event =>
                    handleChangeItem('budget', event.target.value)
                }
            />
            <label htmlFor='isActive'>Active?</label>
            <input type='checkbox' className='checkbox' name='isActive' />
            <div className='buttons__group'>
                <button type='submit' className='save'>
                    Save
                </button>
                <span />
                <button onClick={onCancel} type='button' className='cancel'>
                    Cancel
                </button>
            </div>
        </form>
    )
}

export default ProjectForm
