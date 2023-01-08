class Color {

    red: number;
    green: number;
    blue: number;

    constructor(red: number, green: number, blue: number) {

        
        if(red > 255) red = 255;
        if(red < 0) red = 0

        if(green > 255) green = 255;
        if(green < 0) green = 0

        if(blue > 255) blue = 255;
        if(blue < 0) blue = 0

        this.red = red;
        this.green = green;
        this.blue = blue
    }

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