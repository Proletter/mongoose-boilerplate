const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/playground', {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=> console.log("connected to Mongo..."))
.catch(err=> console.error("could not connect to db", err))


const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tages: [String],
    date: { type: Date, default: Date.now},
    isPublished: Boolean
})

const Course = mongoose.model('Course', courseSchema)

async function createCourse(){
    const course = new Course({
        name: "Node.js course",
        author: "Mosh",
        tags: ["node", "backend"],
        isPublished: false
    })
    
    const result = await course.save()
    console.log(result)
}


async function getCourses(){
const courses = await Course.find()
.limit(2)
.sort({
    date: 1
})
console.log(courses)

}

getCourses()

// createCourse()