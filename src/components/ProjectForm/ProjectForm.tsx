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
        id: project.id,
        name: project.name,
        description: project.description,
        budget: project.budget,
        contractTypeId: project.contractTypeId,
        contractSignedOn: project.contractSignedOn,
        isActive: project.isActive,
        imageUrl: project.imageUrl,
    })
    const [errors, setErrors] = useState({
        name: '',
        description: '',
        budget: '',
    })

    const validate = (project: TMockedData) => {
        const errors = { name: '', description: '', budget: '' }
        if (project.name.trim().length <= 0) {
            errors.name = 'Name is required'
        }
        if (project.name.trim().length > 0 && project.name.trim().length < 3) {
            errors.name = 'Name needs to be at least 3 characters.'
        }
        if (project.description.trim().length === 0) {
            errors.description = 'Description is required.'
        }
        if (project.budget <= 0) {
            errors.budget = 'Budget must be more than $0.'
        }
        return errors
    }

    const isValid = () => {
        return (
            errors.name.length === 0 &&
            errors.description.length === 0 &&
            errors.budget.length === 0
        )
    }

    const handleChangeItem = (
        fieldName: string,
        event: string | boolean,
    ): void => {
        setInput({
            ...input,
            [fieldName]: event,
        })
        setErrors(() => validate(input))
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault()
        if (!isValid()) return
        onSave(input)
    }

    const handleBlur = (
        fieldName: string,
        event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        setErrors(() => validate(input))
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
                onBlur={event => handleBlur('name', event)}
            />
            {errors.name.length > 0 && (
                <div className='error'>{errors.name}</div>
            )}
            <label htmlFor='description'>Project Description</label>
            <textarea
                name='description'
                placeholder='Enter description'
                value={input.description}
                onChange={event =>
                    handleChangeItem('description', event.target.value)
                }
                onBlur={event => handleBlur('description', event)}
            />
            {errors.description.length > 0 && (
                <div className='error'>{errors.description}</div>
            )}
            <label htmlFor='budget'>Project Budget</label>
            <input
                type='number'
                name='budget'
                placeholder='Enter budget'
                value={input.budget}
                onChange={event =>
                    handleChangeItem('budget', event.target.value)
                }
                onBlur={event => handleBlur('budget', event)}
            />
            {errors.budget.length > 0 && (
                <div className='error'>{errors.budget}</div>
            )}
            <label htmlFor='isActive'>Active?</label>
            <input
                type='checkbox'
                className='checkbox'
                name='isActive'
                checked={input.isActive}
                onChange={event =>
                    handleChangeItem('isActive', event.target.checked)
                }
            />
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
