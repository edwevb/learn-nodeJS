console.log('Good Luck Edward!')
// var a = 10
// var b = 2
// const test = () => {
//   a -= b //a = 1 - 2 = -1
//   b += a // b = 2 + -1 = 1
//   a = b - a // a = 1 + 1 = 2
//   console.log(`nilai a = ${a}`)
//   console.log(`nilai b = ${b}`)
// }

// test()
// console.log(factorial(nilai))

// class Worker {
//   constructor(hoursWorked, rate, tax) {
//     this.hoursWorked = hoursWorked
//     this.rate = rate
//     this.tax = tax
//   }
//   basicSalary() {
//     return this.hoursWorked * this.rate
//   }
//   overviewSalary() {
//     return this.basicSalary() + this.tax
//   }
// }

// const mySalary = new Worker(20, 10, 10)
// console.log(mySalary.basicSalary())

const funcWords = (val) => {
  const arr = words.split(' ')
  return arr.length
}
const words = 'Hello my name is John Doe'
const arr = words.split(' ')

const findMax = (arr) => {
  let max_num = parseInt(arr[0])
  arr.forEach((element) => {
    if (element > max_num) {
      max_num = element
    }
  })
  return max_num
}
const arr2 = [12, 3, 6, 1, 7]
const max_num = findMax(arr2)
console.log(max_num)
