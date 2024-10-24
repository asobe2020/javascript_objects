class Pet{
    constructor(name, age){
        console.log("pet constructor")
        this.name = name
        this.age = age
    }
    eat(){
        return `${this.name}が餌を食べる`
    }
}

class Cat extends Pet{
    constructor(name, age, jumpHeight = 3){
        console.log("cat constructor")
        super(name,age)
        this.jumpHeight = jumpHeight
    }
    meow(){
        return `meow`
    }
}

class Dog extends Pet {
    bark(){
        return `bark`
    }
}