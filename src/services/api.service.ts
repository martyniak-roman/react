const getComments = async () => {
    return await fetch('https://jsonplaceholder.typicode.com/comments')
        .then((res) => res.json());
}

export {
    getComments,
}