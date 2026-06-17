const getUsers = async () => {
   const response =  await fetch('https://jsonplaceholder.typicode.com/users')
       .then(value => value.json())
    return await response;
}

export {getUsers}