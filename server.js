const fs = require("fs");
let data = fs.readFileSync("db.json");
let users = JSON.parse(data);

function creatUser(id, name, city){
users[id] = {
    name,
    city
}
}

createUser(1, "razi libbes", "madrid")
createUser(1, "rolf lol", "lmfao")

console.log(users);