// Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(name, prop){
  let firstName = false;
    let property = false;
    for (let i = 0; i < contacts.length; i++) {
       if (contacts[i].firstName === name) {
            firstName = true;
            if (contacts[i].hasOwnProperty(prop)) {
                property = true;
                return contacts[i][prop];
            }
        }
    }
    if (!firstName) {
        return "No such contact";
    } else {
        return "No such property";
    }
}

lookUpProfile("Akira", "likes");
