import HashMap from "./HashMap.js";

const newHashMap = new HashMap();
const arrOfKeys = [
    "Emma", "Liam", "Olivia", "Noah", "Ava", "William", "Sophia", "James", "Isabella", "Oliver",
    "Mia", "Benjamin", "Charlotte", "Elijah", "Amelia", "Lucas", // "Harper", "Mason", "Evelyn", "Logan",
    // "Abigail", "Alexander", "Emily", "Ethan", "Elizabeth", "Jacob", "Mila", "Michael", "Ella", "Daniel",
    // "Avery", "Henry", "Sofia", "Jackson", "Camila", "Sebastian", "Aria", "Aiden", "Scarlett", "Matthew",
    // "Victoria", "Samuel", "Madison", "David", "Luna", "Joseph", "Grace", "Carter", "Chloe", "Owen",
    // "Penelope", "Wyatt", "Layla", "John", "Riley", "Jack", "Zoey", "Luke", "Nora", "Jayden",
    // "Lily", "Dylan", "Eleanor", "Grayson", "Hannah", "Levi", "Lillian", "Isaac", "Addison", "Gabriel",
    // "Aubrey", "Julian", "Ellie", "Mateo", "Stella", "Anthony", "Natalie", "Jaxon", "Zoe", "Lincoln",
    // "Leah", "Joshua", "Hazel", "Christopher", "Violet", "Andrew", "Aurora", "Theodore", "Savannah", "Caleb",
    // "Audrey", "Ryan", "Brooklyn", "Asher", "Bella", "Nathan", "Claire", "Thomas", "Skylar", "Leo"
];

for (let key in arrOfKeys) {
    newHashMap.set(arrOfKeys[key], "some value");
}

// console.log(newHashMap.buckets);

newHashMap.set("Elijah", "some new value");

console.log(newHashMap.buckets);

console.log(newHashMap.currentLoad);