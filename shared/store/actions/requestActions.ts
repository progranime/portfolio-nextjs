import { REQUEST_START, REQUEST_SUCCESS, REQUEST_FAILURE } from 'shared/store/types/requestTypes'

export const requestStart = (payload: any) => ({
    type: REQUEST_START,
    payload: {
        name: payload.name,
        progress: true
    }
})

export const requestSuccess = (payload: any) => ({
    type: REQUEST_SUCCESS,
    payload: {
        name: payload.name,
        progress: false
    }
})

export const requestFailure = (payload: any) => ({
    type: REQUEST_FAILURE,
    payload: {
        name: payload.name,
        progress: false,
        error: payload.error
    }
})

export const requestHelper = async (dispatch: any, requestName: string, request: any) => {
    dispatch(requestStart({ name: requestName }))
    try {
        await request()
        dispatch(requestSuccess({ name: requestName }))
    } catch (error: any) {
        dispatch(
            requestFailure({
                name: requestName,
                error: error?.response
            })
        )
    }
}
