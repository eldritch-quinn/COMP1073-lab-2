/* © Created by:

    Quinn Faulkner
    Rielly Kirk

*/

// Queryselect the needed elements..
const output1 = document.querySelector("#output1");
const output2 = document.querySelector("#output2");

const imgOutput1 = document.querySelector("#car1");
const imgOutput2 = document.querySelector("#car2");


// Create our "constructor"
function ToyCar(name, set, setIndex, color, style, height, length, refNum, brand, year, doorCount, isConvertable, hasLivery) {

    // Construct the Toy Car's values
    this.name = name;
    this.set = set;
    this.setIndex = setIndex;
    
    this.color = color;
    this.style = style;

    this.height = height;
    this.length = length;

    this.refNum = refNum;
    this.brand = brand;
    this.year = year;

    this.doorCount = doorCount;

    this.hasLivery = hasLivery;
    this.isConvertable = isConvertable;

    // Define a function the returns a friendly message describing the car
    this.describe = function() {
        return `This car is the ${this.name} and is number ${this.setIndex} from the "${this.set}" set released in ${this.year}.\nThe car is ${this.color} and ${hasLivery ? "has" : "does not have"} a livery, has ${this.doorCount} doors, and is ${isConvertable? "" : "not"} a convertable.\nThe reference number for the car is ${this.refNum}, and was created by ${this.brand}\nThe dimensions of the car are ${this.length} long by ${this.height} high.`;
    }

    // Return the object
    return this;
}

// define the first car
let car1 = ToyCar("Automobili Pininfarina Battista", "HW Green Speed", 5, "White", "Coupe", "1 inch", "3 inches", "HKK22-N7C5G1", "Pininfarina", 2021, 2, false, true);
output1.innerText = car1.describe();

// define the second car
let car2 = ToyCar("Track Manga", "HW Art Cars", 1, "Red", "Muscle", "1 inch", "4 inches", "HKK15-N7C5", "Hotwheels", 2017, 2, true, true);
output2.innerText = car2.describe();

// Hook the event listeners
imgOutput1.addEventListener("click", () => {
    // Alert the user
    alert(car1.describe());
})
imgOutput2.addEventListener("click", () => {
    // Alert the user
    alert(car2.describe());
})