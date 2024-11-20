

const showContent = event => console.log(event.target.textContent)

document.querySelector(".porcupine").onclick = showContent;


document.querySelector(".panther").onclick = (event) => console.log(event.target.tagName) 

//window.onclick = event => console.log(event.target)

document.querySelector(".penguin").onclick = (event) => console.log(event.target.textContent.toUpperCase());

//window.onclick = event => console.log(event.target.textContent.toUpperCase())

/*
const sayHi = (name) => alert("hi" + name);
document.querySelector(".header").onclick = () => sayHi ("Rob");//explain first lecture 18 nov slide 14.
*/

const sayHi = (name) => alert("hi" + name);
document.querySelector(".header").addEventListener("click ", () => sayHi("Rob"));

const lovePelicans = () => { //make it run 3 times
    for(let i = 0; i < 3; i++) {
        console.log("I love pelicans!")
    }
}
document.querySelector(".pelican").addEventListener("click", lovePelicans);

const birdLove = animal => console.log(`${animal} is a pretty boy!`);

document.querySelector(".parrot").addEventListener("click", event => birdLove(event.target.textContent))
document.querySelector(".peacock").addEventListener("click", event => birdLove(event.target.textContent))

const notAnteater = () => console.log("I am not an anteater")
const notArmadillo = () => console.log("I am not an armadillo!")

document.querySelector(".pangolin").addEventListener("click", notAnteater);
document.querySelector(".pangolin").addEventListener("click", notArmadillo);

//let x = document.querySelectorAll(".tab")
//console.log(x)
//let tabs = Array.from(x);

//tabs.forEach(item => item.addEventListener("click", () => alert(item.textContent)));

const bestAnimal = animal =>  // exercise 5
    console.log((animal.toLowerCase() === "panther") ? `${animal} is the jungle assassin` : `${animal} is the best!`)//one way to write it
/*
    if (animal.toLowerCase() === "panther") { //another way of writing it
        console.log(`${animal} is an assassin`)
    } else {
        console.log(`${animal} is the best!`)
    }
*/


let animalTabs = Array.from(document.querySelectorAll(".tab"));

animalTabs.forEach(tab => tab.addEventListener("click", () => bestAnimal(tab.textContent)));

console.log(animalTabs);


document.querySelector("footer").addEventListener("click", () => console.log("footer"));

document.querySelector("footer p").addEventListener("click", () => console.log("Paragraph"), true); //true = capturing - set paragraph first in order.

document.querySelector("footer p span").addEventListener("click", () => console.log("Span"), true);

const setActive = (clickedTab) => { //only one tab marked at a time
    animalTabs.forEach(tab => tab.classList.remove("active"));
    clickedTab.classList.add("active")
    document.querySelector(".header__page-title").textContent = clickedTab.textContent;
}

animalTabs.forEach(tab => tab.addEventListener("click", () => setActive(tab)));

let animalContent = Array.from(document.querySelectorAll(".content"));


const findContent = classToMatch => {
    console.log(classToMatch)
    animalContent.forEach(contentDiv => {
        if (contentDiv.classList.contains(classToMatch)) { //"classToMatch.trim() - removes spaces
            contentDiv.classList.add("featured")
        }
    })
}

animalTabs.forEach(tab => tab.addEventListener("mouseenter", () => {
 findContent(tab.textContent.toLowerCase())
})
);

animalTabs.forEach(tab => tab.addEventListener("mouseleave", () => 
    animalContent.forEach(contentDiv => contentDiv.classList.remove("featured"))
));

let searchInput = document.querySelector("#search");


const findTab = () => {
    animalTabs.forEach(tab => {
        if (tab.textContent.toLowerCase().includes(searchInput.value)) {
            tab.classList.add('active')
        } else {
            tab.classList.remove('active')
        }
    })
}

searchInput.addEventListener("input", findTab)

/*let countries = ["Australia", "Sweden", "Pakistan"]

countries.push("India")

console.log(countries)

let australia = {
    name: "Australia", //key: "value"
    capitalCity: "Canberra",
    language: "English",
    population: 25000000,
    sports: ["Cricket", "Aussie Rules"]
}

console.log(`There are ${australia.population} people living in ${australia.name}`);
*/

//document.querySelector("h1").textContent = australia.sports[0]
//object constructors, write constructors with Capital
function Country(name, capitalCity, language, population, sports) {
    this.name = name; // property = value
    this.capitalCity = capitalCity;
    this.language = language;
    this.population = population;
    this.sports = sports;
    this.description = () => console.log(`${this.name}'s capital is ${this.capitalCity}`)
}

let sweden = new Country("Sweden", "Stockholm", "Swedish", "11000000", ["Hockey", "Brandboll", "Bandy"]);
let pakistan = new Country("Pakistan", "Islamabad", "Urdu", "650000000", ["Cricket", "Hockey"]);
let australia = new Country("Australia", "Canberra", "English", 100, ["Cricket", "Football"]);

console.log(sweden.capitalCity)
console.log(pakistan.sports)

let countries = [sweden, pakistan, australia];

countries.forEach(country => country.description())



//document.querySelector(".porcupine").classList.add("hello")
//document.querySelector(".porcupine").classList.remove("tab")

//document.querySelector(".pangolin").addEventListener("mouseenter", () => console.log("Hover!"));
//document.querySelector(".pangolin").addEventListener("mouseleave", () => console.log("stop the Hover!"));
