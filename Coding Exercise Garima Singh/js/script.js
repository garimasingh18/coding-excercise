"use strict";

let numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

window.onload = () => {
    const cube = document.querySelector("#cube");
    let btnShuffle = document.querySelector("#shuffle");
    let btnSort = document.querySelector("#sort");

    // Renders numbers on page load
    renderItems(cube, numbers);

    btnShuffle.onclick = function () {
        renderItems(cube, shuffleArray(numbers));
    };

    btnSort.onclick = function () {
        renderItems(cube, sortArray(numbers));
    };
};

const renderItems = (element, items) => {
    element.innerHTML = "";
    items.forEach(function (item) {
        element.appendChild(createMenuItem(item));
    });
};

const createMenuItem = name => {
    let li = document.createElement("li");
    li.textContent = name;
    return li;
};

const shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
        
        //swap
        let t = array[i];
        array[i] = array[j];
        array[j] = t
      }
    return array;
}

const sortArray = array => array.sort(function(a, b){return a-b});;
