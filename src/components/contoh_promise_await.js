// Promise async dan await

const endpoint = 'https://jsonplaceholder.typicode.com/todos/';

async function myFunction (id) {
  let response = await fetch(endpoint + id)
  response = await response.json()
  console.log(response)
}

myFunction(1);
