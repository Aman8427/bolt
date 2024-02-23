let a = document.querySelectorAll('.view');

a.forEach((element) => {
    element.addEventListener("click", () => {
        let b = document.querySelector('.name'); // Assuming 'name' is a class
        let c = document.querySelector('.prof'); // Assuming 'prof' is a class
        b.innerText = "Mobile Number - 6388258465";
        c.innerText = "Department - Neurology";
    });
});

