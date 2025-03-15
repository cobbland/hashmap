import HashMap from "./HashMap.js";

// const newHashMap = new HashMap();
// const arrOfKeys = [
//     "Emma", "Liam", "Olivia", "Noah", "Ava", "William", "Sophia", "James", "Isabella", "Oliver",
//     "Mia", "Benjamin", "Charlotte", "Elijah", "Amelia", "Lucas", "Harper", "Mason", "Evelyn", "Logan",
//     "Abigail", "Alexander", "Emily", "Ethan", "Elizabeth", "Jacob", "Mila", "Michael", "Ella", "Daniel",
//     "Avery", "Henry", "Sofia", "Jackson", "Camila", "Sebastian", "Aria", "Aiden", "Scarlett", "Matthew",
//     "Victoria", "Samuel", "Madison", "David", "Luna", "Joseph", "Grace", "Carter", "Chloe", "Owen",
//     "Penelope", "Wyatt", "Layla", "John", "Riley", "Jack", "Zoey", "Luke", "Nora", "Jayden",
//     "Lily", "Dylan", "Eleanor", "Grayson", "Hannah", "Levi", "Lillian", "Isaac", "Addison", "Gabriel",
//     "Aubrey", "Julian", "Ellie", "Mateo", "Stella", "Anthony", "Natalie", "Jaxon", "Zoe", "Lincoln",
//     "Leah", "Joshua", "Hazel", "Christopher", "Violet", "Andrew", "Aurora", "Theodore", "Savannah", "Caleb",
//     "Audrey", "Ryan", "Brooklyn", "Asher", "Bella", "Nathan", "Claire", "Thomas", "Skylar", "Leo"
// ];
// for (let key in arrOfKeys) {
//     const value = Math.random()
//     newHashMap.set(arrOfKeys[key], value);
// }

const test = new HashMap() // or HashMap() if using a factory

test.set('apple', 'red')
test.set('banana', 'yellow')
test.set('carrot', 'orange')
test.set('dog', 'brown')
test.set('elephant', 'gray')
test.set('frog', 'green')
test.set('grape', 'purple')
test.set('hat', 'black')
test.set('ice cream', 'white')
test.set('jacket', 'blue')
test.set('kite', 'pink')
test.set('lion', 'golden')

console.log(test.entries())

console.log(`Hash map current load factor: ${test.currentLoadFactor}`);

test.set("lightsaber", "orange");

console.log(test.entries())

console.log(`Hash map current load factor: ${test.currentLoadFactor}`);

