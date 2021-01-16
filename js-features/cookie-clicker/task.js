let elementCookie = document.getElementById("cookie");
let elementCounter = document.getElementById("clicker__counter").textContent;

elementCookie.onclick = function() {
    elementCounter ++;
    document.getElementById("clicker__counter").textContent = elementCounter;
    elementCookie.width = 300;
    function changeSize() {
        elementCookie.width = 200;
    }
    setTimeout(changeSize, 200);
};