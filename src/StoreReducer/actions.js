// Action

export const fixName = payload => {
    return {
        typeAction : 'fix-name',
        payload
    }
}
export const addJob = payload => {
    return {
        typeAction : 'add-job',
        payload
    }
}

export const deleteJob = payload => {
    return {
        typeAction : 'delete-job',
        payload
    }
}
export const editJob = (payload,index) => {
    return {
        typeAction : 'edit-job',
        payload,
        index

    }
}