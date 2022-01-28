//Spread in functioncalls

const nums = [2, 3, 5, 6, 5, 8]

console.log(Math.max(...nums))

//Spreading arrays

const cats = ['Tiny', 'Bob', 'July']
const dogs = ['Trammer', 'Jack']

console.log([...cats, ...dogs])

//Spread through objects

Fruits = {
    name: 'Apple',
    color: 'red',
}
Vegetables = {
    name: 'potato',
    color: 'brown',
}

const items = { ...Fruits, ...Vegetables }


function price(first, second, ...restofthem) {

    console.log(`First price goes to ${first}`)
    console.log(`Second price goes to ${second}`)
    console.log(`Thanks to ${restofthem}`)
}

//Destructuring Objects

const user = {
    name: 'Ahil Singh',
    Age: 26,
    Native: 'Tenkasi',
    gender: 'Male',
    userId: 128976
}
const { userId, name, Age, Native, gender } = user