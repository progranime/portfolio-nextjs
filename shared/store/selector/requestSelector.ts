//get request part of the state
const requestState = (state: any) => state

export const requestsProgress = (state: any) => requestState(state).ids.filter((request: any) => request.progress).length > 0

//get requests progress either by single requestName or by requestNames array
export const getRequestsProgress = (state: any, requestName: string | []) => {
    const singleNamedRequestInProgress = (requestName: string) => {
        return requestState(state).ids.find((request: any) => request.name === requestName && request.progress) !== undefined
    }

    if (Array.isArray(requestName)) {
        return requestName.some(singleNamedRequestInProgress)
    }

    return singleNamedRequestInProgress(requestName)
}

export const getRequestError = (state: any, requestName: string) =>
    requestState(state).ids.find((request: any) => request.name === requestName && request.error !== null)?.error
