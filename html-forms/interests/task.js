addEventListener('change', event => {
    let status = event.target.checked;
    let parent = event.target.closest('.interest');
    let checkbox = parent.querySelectorAll('input');
    for(let i=0; i<checkbox.length; i++) 
        checkbox[i].checked = status;
});
