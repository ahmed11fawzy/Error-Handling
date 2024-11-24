function main(x, y) {
    try {
        if (arguments.length !== 2) {
            throw new Error("Invalid number of arguments");
        }
        if (typeof x !== "number" || typeof y !== "number") {
            throw new Error("Invalid argument type");
        }
        return x + y;
    } catch (error) {
        return `Error: ${error.message}`; 
    }
}


console.log('Thanks for your patience ❤🌹');
console.log(main(1, 2));    
console.log(main(1, "2"));  
console.log(main(1));       
