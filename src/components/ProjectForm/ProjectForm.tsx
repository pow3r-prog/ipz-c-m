import React from 'react'

import './ProjectForm.scss'

const ProjectForm = (): React.ReactElement => {
    return (
        <form className='form'>
            <label htmlFor='name'>Project Name</label>
            <input type='text' name='name' placeholder='Enter name' />
            <label htmlFor='description'>Project Description</label>
            <textarea name='description' placeholder='Enter description' />
            <label htmlFor='budget'>Project Budget</label>
            <input type='number' name='budget' placeholder='Enter budget' />
            <label htmlFor='isActive'>Active?</label>
            <input type='checkbox' className='checkbox' name='isActive' />
            <div className='buttons__group'>
                <button className='save'>Save</button>
                <span />
                <button type='button' className='cancel'>
                    Cancel
                </button>
            </div>
        </form>
    )
}

export default ProjectForm
