// Gagal

const myFunction = () => {
  return new Promise((resolve, reject) => {
    reject("Hello, ini kondisi false/gagal")
  } )
}

myFunction()
.catch((error) => {
  console.log(error)
})
