//function expression to select item

const selectElement = (s) => document.querySelector(s);

//open menu click
selectElement('.open').addEventListener('click',() => {
    selectElement('.nav-list').classList.add('active');
});

//close menu click 

selectElement('.close').addEventListener('click',() => {
    selectElement('.nav-list').classList.remove('active');
})