
// 1
const extractNumbers = (str) => {
    return str.match(/\d+/g).map(Number)
}

console.log(extractNumbers("a1fg5hj6")) // вернёт [1, 5, 6]

// 2
const fibonacciRecursive = (n) => {
    if (n < 144) {
        if (n < 2) {
            return n
        }
        const result =  fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2)
        setInterval(() => console.log(result), 1000)
        return result
    }
}

fibonacciRecursive(12)

// 3
const fetchData = async () => {
    try {
        const response = await fetch('https://fakestoreapi.com/products')
        const data = await response.json()
        console.log(data)

        console.log(data.map(item => item.title))
    } catch (error) {
        console.log(error)
    }
}

fetchData()


// 4
const container_btn = document.querySelector('.container-button')

const changeBgColor = () => {
    container_btn.onclick = (event) => {
        if (event.target.tagName.toLowerCase() === 'button') {
            document.body.style.backgroundColor = event.target.textContent
        }
    }
}

const pinkButton = document.createElement('button')
pinkButton.textContent = 'pink'
container_btn.appendChild(pinkButton)

changeBgColor()

// 5

const block = document.querySelector('.block')
const btn = document.querySelector('.btn')

const showAndHideBlock = () => {
    btn.onclick = () => {
        block.style.display = block.style.display === 'none' ? 'block' : 'none'
        btn.textContent = block.style.display === 'none' ? 'Show' : 'Hide'
    }
}

showAndHideBlock()


// 6

const timerCount = document.querySelector('.timer')
const startTimer = document.querySelector('.start_timer')
let count = 0

const timer = () => {
    const interval = setInterval(() => {
        timerCount.textContent = count++
        if (count > 100) {
            clearInterval(interval)
        }
    }, 1)
}

startTimer.onclick = () => {
    timer()
}

// 7

const fetchJson = async () => {
    const response = await fetch('any.json')
    const data = await response.json()
    console.log(data)
}

fetchJson()