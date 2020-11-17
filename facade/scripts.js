function getUsers() {
    return fetch('https://jsonplaceholder.typicode.com/users', {
        method: "GET",
        headers: { "Content-Type": "application/json" }
    }).then(res => res.json())
}