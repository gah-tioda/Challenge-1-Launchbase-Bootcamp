const user = {
    name: "Diego",
    enterprise: {
        name: "Rocketseat",
        color: "Purple",
        operationfocus: "Programming",
        address: {
            street: "Guilherme Gembala street",
            number: 260
        }
    }
}

console.log(`The ${user.enterprise.name} company is located at ${user.enterprise.address.street}, ${user.enterprise.address.number}`)