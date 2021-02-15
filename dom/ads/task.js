let masRotator, lenghtRotator, index, children;
let rotator = document.querySelectorAll('.rotator');

let myVar = setInterval(alertFunc, 1000);

function alertFunc() {
    for(let i=0; i<rotator.length; i++) {
        children = rotator[i].querySelectorAll('.rotator__case');
        masRotator = Array.from(children);
        lenghtRotator = children.length;
        
        index = masRotator.findIndex(element => element.classList.contains('rotator__case_active'));
        masRotator[index].classList.remove('rotator__case_active');
        index = (index + 1) % lenghtRotator; 
        masRotator[index].classList.add('rotator__case_active');
    }
}
