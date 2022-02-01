const baseUrl = 'https://jsonplaceholder.typicode.com';

export const urls = {
    users: `${baseUrl}/users`,
    user: `${baseUrl}/users/`,
    postsOfUser: `${baseUrl}/posts?userId=`,
    posts: `${baseUrl}/posts`,
    post: `${baseUrl}/posts/`,
    commentsOfPost: `${baseUrl}/comments?postId=`,
    albums: `${baseUrl}/albums`,
    album: `${baseUrl}/albums/`,
    albumsOfUser: `${baseUrl}/albums?userId=`,
    photos: `${baseUrl}/photos`,
    photo: `${baseUrl}/photos/`,
    photosOfAlbum: `${baseUrl}/photos?albumId=`
}

export default baseUrl;