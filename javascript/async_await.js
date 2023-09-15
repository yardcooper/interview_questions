const timeout = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      console.log("timeout")
      resolve()
    }, 300)
  })

const main = async () => {
  console.log("start")
  await timeout()
  console.log("end")
}

main()
