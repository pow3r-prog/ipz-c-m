/* eslint-disable max-len */
import { TMockedData } from 'types/mockedDataTypes'

import { Project } from 'components/Project'

const baseUrl = 'http://localhost:4000'
const url = `${baseUrl}/projects`

function translateStatusToErrorMessage(status: number) {
    switch (status) {
        case 401:
            return 'Please login again.'
        case 403:
            return 'You do not have permission to view the project(s).'
        default:
            return 'There was an error retrieving the project(s). Please try again.'
    }
}

function checkStatus(response: Response) {
    if (response.ok) {
        return response
    } else {
        const httpErrorInfo = {
            status: response.status,
            statusText: response.statusText,
            url: response.url,
        }
        console.log(`log server http error: ${JSON.stringify(httpErrorInfo)}`)

        const errorMessage = translateStatusToErrorMessage(httpErrorInfo.status)
        throw new Error(errorMessage)
    }
}

function parseJSON(response: Response) {
    return response.json()
}

// eslint-disable-next-line
function delay(ms: number | undefined) {
    return function (x: unknown) {
        return new Promise(resolve => setTimeout(() => resolve(x), ms))
    }
}

const projectAPI = {
    get(page = 1, limit = 20) {
        return fetch(`${url}?_page=${page}&_limit=${limit}&_sort=name`)
            .then(checkStatus)
            .then(parseJSON)
            .then(projects => {
                return projects.map((p: TMockedData | undefined) => {
                    return new Project(p)
                })
            })
            .catch(error => {
                console.log('log client error ' + error)
                throw new Error(
                    'There was an error retrieving the projects. Please try again.',
                )
            })
    },
    put(project: Project) {
        const updatedProject = {
            id: project.id,
            name: project.name,
            description: project.description,
            contractSignedOn: project.contractSignedOn,
            contractTypeId: project.contractTypeId,
            budget: project.budget,
            isActive: project.isActive,
            imageUrl: project.imageUrl,
        }

        return fetch(`${url}/${updatedProject.id}`, {
            method: 'PUT',
            body: JSON.stringify(updatedProject),
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(checkStatus)
            .then(parseJSON)
            .catch((error: TypeError) => {
                console.log('log client error ' + error)
                throw new Error('Error, run server!')
            })
    },
}

export { projectAPI }
