let tooltipHas = document.querySelectorAll('.has-tooltip');
let tooltipElem;
for(let tool of tooltipHas) {
    tool.addEventListener('click', tooltipClick);
}

function tooltipClick(event) {
    let target = event.target;

    if (tooltipElem) {
        if(tooltipElem === this.nextElementSibling) {
            tooltipElem.classList.remove('tooltip_active');
            tooltipElem = null; 
            event.preventDefault();
            return;
        } else {
            tooltipElem.classList.remove('tooltip_active');
        }
    };

    target.insertAdjacentHTML('afterEnd', '<div class="tooltip" style="left: 0; top: 0">' + target.title + '</div>');

    tooltipElem = this.nextElementSibling;
    tooltipElem.classList.add('tooltip_active');
        
    let coords = target.getBoundingClientRect();
    let left = coords.left;
    let top = coords.bottom + 3;
    tooltipElem.style.left = left + 'px';
    tooltipElem.style.top = top + 'px';

    event.preventDefault();
}