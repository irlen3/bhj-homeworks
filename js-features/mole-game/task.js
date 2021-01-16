let elementDead = document.getElementById("dead").textContent;
let elementLost = document.getElementById("lost").textContent;

for (let i=1; i<=9; i++) {
    let elementMole = document.getElementById(`hole${i}`);

    elementMole.onclick = function() {
        if(elementMole.className.includes('hole_has-mole')) {
            elementDead++;
        } else {
            elementLost++;   
        }

        if (elementDead === 10){
            alert('Победа!');
            elementDead = 0;
            elementLost = 0;
        }
        
        if (elementLost === 5){
            alert('Вы проиграли!');
            elementDead = 0;
            elementLost = 0;
        }

        document.getElementById("dead").textContent = elementDead;
        document.getElementById("lost").textContent = elementLost;
    }
}