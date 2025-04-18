// Instructions
// In this exercise, you will use object oriented programming concepts
//  to define and use a custom object in JavaScript.

// Create a class named Video.The class should be constructed with the 
// following parameters:
// title(a string)
// uploader(a string, the person who uploaded it)
// time(a number, the duration of the video - in seconds)
// Create a method called watch() which displays a string as follows:
// “uploader parameter watched all time parameter of title parameter!”
// Instantiate a new Video instance and call the watch() method.
// Instantiate a second Video instance with different values.
//     Bonus: Use an array to store data for five Video instances(ie.title, 
// uploader, time)
// Think of the best data structure to save this information within the array.
//     Bonus: Loop through the array to instantiate those instances.

class Video {
    constructor(title, uploader, time) {
        this.title = title
        this.uploader = uploader
        this.time = time
    }
    watch() {
        console.log(`${this.uploader} watched all ${this.time} seconds of "${this.title}"!`)
    }
}

let video1 = new Video('Titanic', 'Olga', 240)
let video2 = new Video('LalaLand', 'Gustavo', 290)
let video3 = new Video('Matrix', 'Pierr', 200)
let video4 = new Video('Grinch who stole Cristmas', 'Yasmin', 429)
let video5 = new Video('Pride and Prejudice', 'Leticia', 129)

let arrVideos = [video1, video2, video3, video4, video5]
console.log(arrVideos)

arrVideos.forEach((video) => video.watch())

