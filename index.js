let btn = document.querySelector('#btn');
let sidebar = document.querySelector('.sidebar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('sidebar ul li a');

btn.onclick = function () {
    sidebar.classList.toggle('active');
};