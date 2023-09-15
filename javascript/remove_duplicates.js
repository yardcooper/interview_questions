const a = [1, 2, 3, 4, 1, 2, 3]

const removeDepulicates = (arr) => {
  return [...new Set(arr)]
}

const b = removeDepulicates(a)

console.log(b)
