let seconds = document.getElementById("timer").textContent; //59

function calcSeconds(){
  if (seconds !== 0) {
    seconds = seconds - 1;
    document.getElementById("timer").textContent = seconds;
  } else {
    alert("Вы победили в конкурсе!");
    clearInterval(interval);
    }
}
let interval = setInterval(calcSeconds, 1000);
