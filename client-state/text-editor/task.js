// Сохраняйте значение текстового редактора в локальном хранилище
// После перезагрузки, восстанавливайте текст из локального хранилица

let textArea = document.getElementById('editor');

textArea.addEventListener("input", function() { 
    localStorage.setItem("autosave", textArea.value);
});

textArea.value = localStorage.getItem("autosave");