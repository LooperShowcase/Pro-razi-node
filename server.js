const fs = require("fs");
let data = fs.readFileSync("db.json");
let users = JSON.parse(data);

function createUser(id, name, city) {
  users[id] = {
    name,
    city,
  };
}

createUser(0, "razi libbes", "madrid");
createUser(1, "rolf lol", "lmao");

console.log(users);
function readUser(id) {
  return users[id];
}

console.log(users);

function updateUser(id, name, city) {
  if (users[id] == undefined) {
    console.log("b3333333333333333");
  } else {
    users[id] = {
      name: name,
      city: city,
    };
  }
}

function deleteUser(id) {
  delete users[id];
}

updateUser(0, "haha", "hehe", "lolol");

//⛔🤚 STOP!!
let dataToString = JSON.stringify(users);
fs.writeFileSync("db.json", dataToString);
