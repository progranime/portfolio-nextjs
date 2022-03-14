import { actionType } from 'shared/types/store.types'
import { GET_PROJECT, GET_PROJECTS } from '../types/projectTypes'

const initialState = {}

const projectReducer = (state = initialState, { type, payload }: actionType) => {
    switch (type) {
        case GET_PROJECTS:
            return {
                ...payload
            }
        case GET_PROJECT:
            return {
                ...payload
            }
        default:
            return state
    }
}

export default projectReducer
