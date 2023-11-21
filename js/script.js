// Scrivi un programma che stampi in console i numeri da 1 a 100, ma che per i multipli di 3 stampi “Fizz”, al posto del numero e per i multipli di 5 stampi “Buzz”. Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

// creo un container
const container = document.querySelector(".container");


// genero numeri da 1 a 100
for (let i = 1; i <= 100; i++){
    console.log(i);

// creo il div
    const square = document.createElement("div");

// creo una classe al div
    square.classList.add("square");

// assegno il div al container
    container.append(square);

// creo le scritte
    let Fizz = ("Fizz");
    let Buzz = ("Buzz");
    let FizzBuzz = ("FizzBuzz");

// divido per colori e numeri se multiplo di 3 o di 5 o entrambi
    
    if (i%(3*5)==0) {
        square.classList.add("squarered");
        square.append(FizzBuzz);
    }else if (i%5==0) {
        square.classList.add("squareyellow");
        square.append(Buzz);
    }else if (i%3==0) {
        square.classList.add("squaregreen");
        square.append(Fizz);
    }else{
        container.append(square);
        square.append(i);
    }
}
