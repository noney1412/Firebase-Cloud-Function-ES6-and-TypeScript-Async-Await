import * as functions from "firebase-functions"

const message = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(`with async ES6 Cloud Functions !`)
    }, 5000)
  })
}

export let helloWorld = functions.https.onRequest(async (req, res) => {
  let world = await message()
  res.status(200).send(`Hello ${world}`)
})
