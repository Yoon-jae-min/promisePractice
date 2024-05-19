function getUser(userId, callback){
    setTimeout(() => {
        const user = {id: userId, name: 'GYMCODING'};
        callback(user);
    }, 1000);
}

function getPosts(userId, callback){
    setTimeout(() => {
        const posts = [
            {
                id: 1,
                title: 'Post 1'
            },
            {
                id: 2,
                title: 'Post 2'
            }
        ]

        callback(posts);
    }, 1000);
}

function getComments(postId, callback){
    setTimeout(() => {
        const comments = [
            {
                id: 1,
                text: 'Comment 1'
            },
            {
                id: 2,
                text: 'Comment 2'
            },
            {
                id: 3,
                text: 'Comment 3'
            }
        ]

        callback(comments);
    }, 1000);
}

getUser(1, (user) => {
    console.log('user: ', user);

    getPosts(user.id, (posts) => {
        console.log('posts: ', posts);

        getComments(posts[0].id, (comments) => {
            console.log('comments', comments);
        })
    })
})