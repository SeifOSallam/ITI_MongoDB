use FacultySystemDB

db.createCollection("Student")

db.Student.insertOne({
    FirstName : "Seif", 
    LastName : "Sallam", 
    Age : 23, 
    Faculty : {
        Name : "IT",
        Address : "100N"
    },
    Grades : [
        {
            CourseName : "OOP",
            Grade : "A",
            Pass : true
        },
        {
            CourseName : "C++",
            Grade : "A",
            Pass : true
        },
        {
            CourseName : "Java",
            Grade : "A",
            Pass : true
        }
    ],
    IsFired : false
})

db.Student.insertMany([{
        FirstName : "Ahmed", 
        LastName : "Hazem", 
        Age : 23, 
        Faculty : null,
        Grades : [
            {
                CourseName : "OOP",
                Grade : "A",
                Pass : true
            },
            {
                CourseName : "C++",
                Grade : "A",
                Pass : true
            },
            {
                CourseName : "Java",
                Grade : "A",
                Pass : true
            }
        ],
        IsFired : false
    },
    {
        FirstName : "Essam", 
        LastName : "Ahmed", 
        Age : 19, 
        Faculty : {
            Name : "IT",
            Address : "100N"
        },
        Grades : [
            {
                CourseName : "OOP",
                Grade : "A",
                Pass : true
            },
            {
                CourseName : "C++",
                Grade : "A",
                Pass : true
            },
            {
                CourseName : "Java",
                Grade : "A",
                Pass : true
            }
        ],
        IsFired : false
    },
    {
        FirstName : "Alaa", 
        LastName : "Zaki", 
        Age : 19, 
        Faculty : {
            Name : "IT",
            Address : "100N"
        },
        Grades : [
            {
                CourseName : "OOP",
                Grade : "A",
                Pass : true
            },
            {
                CourseName : "C++",
                Grade : "A",
                Pass : true
            },
            {
                CourseName : "Java",
                Grade : "A",
                Pass : true
            }
        ],
        IsFired : true
    }
])



db.Student.find()

db.Student.find({FirstName : "Seif"})

db.Student.find({$or : [{FirstName : "Ahmed"}, {LastName : "Ahmed"}] })

db.Student.find({FirstName : {$ne : "Ahmed"}})

db.Student.find({ Age: {$gte : 21}, Faculty : {$ne : null} })

db.Student.find({FirstName : "Seif"}, {FirstName : 1, LastName : 1 , IsFired : 1})

db.Student.update({FirstName : "Essam"}, {$set : {LastName : "Nasr"}})
db.Student.find({FirstName : "Essam"})

db.Student.deleteMany({ isFired : true })
db.Student.find({isFired : true})

db.Student.drop()

db.dropDatabase()

