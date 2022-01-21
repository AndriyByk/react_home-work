import {urls} from "../configs/urls";

const getById = (userId) => {
    return fetch(`${urls.user}${userId}`)
        .then(value => value.json())
}

const getAll = () => {
    return fetch(`${urls.users}`)
        .then(value => value.json())
}

const getPostsOfUser = (userId) => {
    return fetch(`${urls.postsOfUser}${userId}`)
        .then(value => value.json())
}

export const userService = {
    getById, getAll, getPostsOfUser
}