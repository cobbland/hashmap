import HashMap from "./HashMap.js";

const newHashMap = new HashMap();
const arrOfKeys = [
    "Emma", "Liam", "Olivia", "Noah", "Ava", "William", "Sophia", "James", "Isabella", "Oliver",
    "Mia", "Benjamin", "Charlotte", "Elijah", "Amelia", "Lucas", "Harper", "Mason", "Evelyn", "Logan",
    "Abigail", "Alexander", "Emily", "Ethan", "Elizabeth", "Jacob", "Mila", "Michael", "Ella", "Daniel",
    "Avery", "Henry", "Sofia", "Jackson", "Camila", "Sebastian", "Aria", "Aiden", "Scarlett", "Matthew",
    "Victoria", "Samuel", "Madison", "David", "Luna", "Joseph", "Grace", "Carter", "Chloe", "Owen",
    "Penelope", "Wyatt", "Layla", "John", "Riley", "Jack", "Zoey", "Luke", "Nora", "Jayden",
    "Lily", "Dylan", "Eleanor", "Grayson", "Hannah", "Levi", "Lillian", "Isaac", "Addison", "Gabriel",
    "Aubrey", "Julian", "Ellie", "Mateo", "Stella", "Anthony", "Natalie", "Jaxon", "Zoe", "Lincoln",
    "Leah", "Joshua", "Hazel", "Christopher", "Violet", "Andrew", "Aurora", "Theodore", "Savannah", "Caleb",
    "Audrey", "Ryan", "Brooklyn", "Asher", "Bella", "Nathan", "Claire", "Thomas", "Skylar", "Leo"
];

for (let key in arrOfKeys) {
    const value = Math.random()
    newHashMap.set(arrOfKeys[key], value);
}

// console.log(newHashMap.buckets);

newHashMap.set("Elijah", "new value");

console.log(newHashMap.buckets);

// console.log(newHashMap.currentLoad);

for (let linkedList in newHashMap.buckets) {
    console.log(`Bucket ${linkedList}: ${newHashMap.buckets[linkedList].toString()}`)
}

console.log(newHashMap.get("Elijah"));

console.log(newHashMap.has("Jacob"));

console.log(newHashMap.remove("Jacob"));

console.log(newHashMap.has("Jacob"));