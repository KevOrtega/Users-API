export const getPagination = (page:any, size:any) => {
    const limit: number  = size ? +size : 10
    const offset: number = page ? page * limit : 0

    return { offset, limit }
}