var a = 4
var b = 5

console.log(a)
console.log(b)
console.log(c)

function sum(a, b) {
  return a + b
}

console.log(sum(a, b))

a = [1, 2, 3]
b = [4, 5, 6]

function concat(a, b) {
    return a.concat(b)
}

console.log(sum(a, b))
console.log(concat(a, b))

function change(a) {
  a = 10
}

change(a)
console.log(a)

a = 10
console.log(a)

// let, var, const

for (let i = 0; i < 10; i++) { // let
  console.log(i)
}

for (var i = 0; i < 10; i++) { // var
    console.log(i)
}

for (const i = 0; i < 10; i++) { // const
    console.log(i)
}
