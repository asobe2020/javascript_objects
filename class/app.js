class Color {
    constructor(r, g, b, name){
        this.r = r;
        this.g = g;
        this.b = b;
        this.name = name
    }
    pen(){
        return `${this.name}色のペン`
    }
    mix(){
        return `${this.r += 25},${this.g += 25},${this.b += 25}`
    }
    innerRGB(){
        const {r,g,b} = this
        return `${r},${g},${b}`
    }
    rgb(){
        return `rgb(${this.innerRGB()})`
    }
    rgba(a = 1.0){
        return `rgb(${this.innerRGB()},${a})`
    }
}

const ai = new Color(21, 33, 100, 'ai')
const urusi = new Color(11, 33, 11, 'urusi')