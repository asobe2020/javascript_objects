function Color(r,g,b){
        // this = {}
        this.r = r;
        this.g = g;
        this.b = b;
        // return this
}

Color.prototype.rgb = function(){
    const {r,g,b} = this;
    return `rgb(${r}, ${g}, ${b})`
}