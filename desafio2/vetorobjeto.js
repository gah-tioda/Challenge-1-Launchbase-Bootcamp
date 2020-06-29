const users = {
    personaldata: [
        {name: "Douglas", age: 24, technologies: "JavaScript, C++, Python", specialty: "Desktop"},
        {name: "Diego", age: 22, technologies: "Python, JavaScript, Java", specialty: "Web/Mobile"}
    ]
}

console.log(`The user ${users.personaldata[0].name} has ${users.personaldata[0].age} years old and his technologies is ${users.personaldata[0].technologies} with abbilities on ${users.personaldata[0].specialty}`)