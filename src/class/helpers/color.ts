class Color {

    red: number;
    green: number;
    blue: number;

    constructor(red: number, green: number, blue: number) {
        
        this.checkNumbers(red);
        this.checkNumbers(green);
        this.checkNumbers(blue);

        this.red = red;
        this.green = green;
        this.blue = blue
    }
    
    // Make sure that numbers are in the range of RGB 
    checkNumbers (color:number) {
        if(color > 255) color = 255;
        if(color < 0) color = 0;
    }

    // Get the color hash from the indyvidual RGB variables
    getColorHash (): string {
        let r: string = this.red.toString(16)
        let g: string = this.green.toString(16)
        let b: string = this.blue.toString(16)

        if(this.red % 16 === 0){
            r += r;
        }
        if(this.green % 16 === 0){
            g += g
        }
        if(this.blue % 16 === 0){
            b += b;
        }

        let hash: string = `#${r}${g}${b}`;
        return hash;
    }

}
export default Color;