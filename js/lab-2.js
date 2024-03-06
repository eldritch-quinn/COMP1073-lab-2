function ToyCar(name, set, setIndex, color, style, height, length, refNum, brand, doorCount, isConvertable, hasLivery) {

    // Construct the Toy Car's values
    this.name;
    this.set = set;
    this.setIndex = setIndex;
    
    this.color = color;
    this.style = style;
    this.height = height;
    this.length = length;

    this.refNum = refNum;
    this.brand = brand;
    this.doorCount = doorCount;

    this.hasLivery = hasLivery;
    this.isConvertable = isConvertable;

    this.describe = () => {
        return `The car "${this.name}" by ${this.artist} was released in ${this.year}, featuring ${this.numTracks} song tracks.`;
    }
}

let car1 = ToyCar("Automobili Pininfarina Battista", "HW Green Speed", 5, "White", "Coupe", "1 inch", "3 inches", "HKK22-N7C5G1", "Pininfarina", 2, false, true);
let car2 = ToyCar("Track Manga", "HW Art Cars", 1, "Red", "Muscle", "1 inch", "4 inches", "HKK15-N7C5", "Hotwheels", 2, true, true);
