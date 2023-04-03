// Berhasil

const myFunction = () => {
  return new Promise((resolve, reject) => {
    resolve("Hello, ini kondisi true/berhasil")
  } )
}

myFunction()
.then((result) => {
  console.log(result)
})
