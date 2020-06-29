const users = [
    { name: "Carlos", tech: ["HTML", "CSS"] },
    { name: "Jasmine", tech: ["JavaScript", "CSS"] },
    { name: "Tuane", tech: ["HTML", "Node.js"] }
  ]

  for (let i = 0; i < users.length; i++) {
      console.log(`The user ${users[i].name} works with ${users[i].tech[0]} and ${users[i].tech[1]}`)
  }
