"use strict";


let remove_first_header = document.getElementById('remove_first_header');

remove_first_header.addEventListener('click', () => {
    let header_cont = document.querySelector('.header_cont');
    header_cont.style.display = "none";
})


