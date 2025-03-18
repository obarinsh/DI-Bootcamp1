export const getRandomElement = (arr) => {

    return Math.floor(Math.random() * arr.length)
}

export const getRandomElementFromArray = (arr) => {

    const randomIndx = Math.floor(Math.random() * arr.length)
    return arr[randomIndx]
}