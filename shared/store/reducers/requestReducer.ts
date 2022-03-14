import { actionType } from 'shared/types/store.types'
import { REQUEST_FAILURE, REQUEST_START, REQUEST_SUCCESS } from 'shared/store/types/requestTypes'

const initialState = {
    ids: []
}

const requestReducer = (state = initialState, { type, payload }: actionType) => {
    switch (type) {
        case REQUEST_START:
            const existingCall = state.ids.find((request: any) => request.name === payload.name)

            if (existingCall) {
                return {
                    ...state,
                    ids: state.ids.map((request: any) =>
                        request.name === payload.name
                            ? {
                                  ...request,
                                  progress: true,
                                  error: null
                              }
                            : request
                    )
                }
            }

            return {
                ...state,
                ids: [...state.ids, payload]
            }
        case REQUEST_SUCCESS:
            return {
                ...state,
                ids: state.ids.filter((request: any) => request.name !== payload.name)
            }
        case REQUEST_FAILURE:
            return {
                ...state,
                ids: state.ids.map((request: any) =>
                    request.name === payload.name
                        ? {
                              ...request,
                              error: payload.error,
                              progress: false
                          }
                        : request
                )
            }
        default:
            return state
    }
}

export default requestReducer
