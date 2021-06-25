// exo 1
let h1 = document.querySelector('h1');
h1.addEventListener('click', () => {
    h1.classList.add("text-error")
})

// exo 2
let h3 = document.querySelector('h3');
h3.addEventListener('dblclick', () => {
    h3.classList.add("text-error")
})

// exo 3
let p = document.querySelector('p');
p.addEventListener('click', () => {
    p.classList.toggle('text-style')
})

// exo 4

let span1 = Array.from(document.querySelectorAll('p')[1].children);

span1.forEach(element => {
    element.addEventListener('click', () => {
        element.classList.toggle("bolder")
    })
});


// exo 5
let span2 = Array.from(document.querySelectorAll("p")[2].children);

span2.forEach(element => {
    element.addEventListener("click", () => {
        span2.forEach (element => {
            element.classList.remove("bolder-red")
        });
        element.classList.add("bolder-red")
    });
})




