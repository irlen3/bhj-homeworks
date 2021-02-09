let tabs = document.querySelectorAll('.tab');
let tabContent = document.querySelectorAll('.tab__content');

for (const tab of tabs){
    tab.addEventListener('click', openTab);
}

function openTab(event) {
    let tabEvent = event.target;
    let children = this.parentElement.children;
    let childrenContent = this.parentElement.nextElementSibling.children;
    
    if(!tabEvent.classList.contains('tab_active')) {
        for (let i=0; i < children.length; i++) {
            if(children[i].classList.contains('tab_active')) {
                children[i].classList.remove('tab_active'); 
                childrenContent[i].classList.remove('tab__content_active');
            } 
        }
    tabEvent.classList.add('tab_active');
    let tabsMassive = Array.from(children);
    let index = tabsMassive.indexOf(tabEvent);
    childrenContent[index].classList.add('tab__content_active');
    }
}
