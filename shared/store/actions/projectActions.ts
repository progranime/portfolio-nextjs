import axios from 'axios'
import { GET_PROJECT, GET_PROJECTS } from '../types/projectTypes'
import { requestHelper } from './requestActions'

export const getProjects = () => async (dispatch: any) => {
    await requestHelper(dispatch, GET_PROJECTS, async () => {
        const response = await axios({
                url: `/api/projects`
            }),
            { data } = response.data

        dispatch({
            GET_PROJECTS,
            payload: {
                projects: data
            }
        })
    })
}

export const getProject = (payload: any) => async (dispatch: any) => {
    await requestHelper(dispatch, GET_PROJECT, async () => {
        const response = await axios({
                url: `/api/projects/${payload.id}`
            }),
            { data } = response.data

        dispatch({
            GET_PROJECT,
            payload: {
                project: data
            }
        })
    })
}
