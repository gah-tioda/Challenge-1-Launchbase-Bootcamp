const users = [
  { name: "Gabriel", techs: ['HTML', 'CSS'] },
  { name: "Doug", techs: ['JavaScript', 'CSS'] },
  { name: "Maria", techs: ['HTML', 'Node.js'] }
]

for (let user of users) {
  console.log(`${user.name} works with ${user.techs.join(', ')}`)
}


function checkCSS(user) {
  for (let tech of user.techs) {
    if (tech == 'CSS') return true
  }
  
  return false
}

for (let i = 0; i < users.length; i++) {
  const userWorksWithCSS = checkCSS(users[i])

  if (userWorksWithCSS) {
    console.log(`The user ${users[i].name} works with CSS`)
  }
}



