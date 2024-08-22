let lenguajes = ["javascript", "PHP", "Python", "java"]

let frameworks = ["react", "laravel", "django", "sprint"]

// unir dos o mas arrays en uno solo 

let combinacion = lenguajes.concat(frameworks)

console.log(combinacion)

let combinator = [...lenguajes, ...frameworks]
console.log(combinator)


let [ultimo, x, y] = [...lenguajes].reverse()
console.log(ultimo)


