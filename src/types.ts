
let isDone: boolean = false


// array
let list: number[] = [1, 2, 3]

let list1: Array<number> = [1, 2, 3]

list1.forEach(x => {
    console.log(x)
})


// tuple
let x: [string, number]

x = ["hello", 10]

console.log(x)

// enum
enum Color {
    RED = 1,
    GREEN = 2,
    BLUE = 3
}

//
let c: Color = Color.RED

// get name
let colorName: string = Color[2]


console.log(colorName)