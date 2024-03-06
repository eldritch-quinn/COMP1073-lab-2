function ToyCar(type, color) {
    this.type = type;
    this.color = color;

    this.describe = () => {
        return `The car "${this.name}" by ${this.artist} was released in ${this.year}, featuring ${this.numTracks} song tracks.`;
    }

}