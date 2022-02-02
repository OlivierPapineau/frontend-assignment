export const getAllPosts = async () => {
    let res = []

    try {
        res = await fetch('https://ak-fe-assessment-mock-api.herokuapp.com/blogs')
    } catch (err) {
        console.error(err)
    } finally {
        return res.json()
    }
}

export const getPostById = async (id) => {
    let res = {}

    try {
        res = await fetch(`https://ak-fe-assessment-mock-api.herokuapp.com/blogs/${id}`)
    } catch (err) {
        console.error(err)
    } finally {
        return res.json()
    }
}