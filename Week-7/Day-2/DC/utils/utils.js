
export const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

export const getRandomElement = (arr) => {
    return Math.floor(Math.random() * arr.length)
}

export const getRandomElementFromArray = (arr) => {
    const randomIndx = getRandomElement(arr)
    return arr[randomIndx]
}

