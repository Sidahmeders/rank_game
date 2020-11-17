function getUsers() {
    return fetch('https://jsonplaceholder.typicode.com/users', {
        method: "GET",
        headers: { "Content-Type": "application/json" }
    }).then(res => res.json())
}

function getUserPosts(userId) {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${userId}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" }
    }).then(res => res.json())
}

