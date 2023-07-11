let yesbutton=document.querySelector("#Yes");
let nobutton=document.querySelector("#No");

yesbutton.addEventListener("click", function () {
console.log("Hello")  
})

nobutton.addEventListener("click", function () {
    console.log("Bye")  
    })

    yesbutton.addEventListener("click", function () {
        alert("congrats! Read on!")
    })

    nobutton.addEventListener("click", function () {
        alert("Wrong Page! Thanks for visiting!")
    })