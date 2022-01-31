const baseUrl = 'https://jsonplaceholder.typicode.com';

export const urls = {
    users: `${baseUrl}/users`,
    user: `${baseUrl}/users/`,
    postsOfUser: `${baseUrl}/posts?userId=`,
    posts: `${baseUrl}/posts`,
    post: `${baseUrl}/posts/`,
    commentsOfPost: `${baseUrl}/comments?postId=`
}
export default baseUrl;