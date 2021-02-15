// При нажатии на один из элементов с классом font-size, необходимо:
// Поставить этому элементу класс font-size_active
// В зависимости от размера, поставить элементу с классом book соответствующий класс

let sizes = document.querySelectorAll('.font-size');
let sizesMass = Array.from(sizes);
let book = document.querySelector('.book');

for (const size of sizes){
    size.addEventListener('click', changeSize);
}

function changeSize(event) {
    let sizeTarget = event.target;
    if(sizeTarget.classList.contains('.font-size_active')) {
        sizeTarget.classList.remove('.font-size_active');
    } else {
        let index = sizesMass.findIndex(element => element.classList.contains('font-size_active'));
        sizesMass[index].classList.remove('font-size_active');
        sizeTarget.classList.add('font-size_active');
        index = sizesMass.findIndex(element => element.classList.contains('font-size_active'));
        if(index === 0) {
            book.classList.remove('book_fs-big');
            book.classList.add('book_fs-small')
        }
            
        else if (index === 1) {
            book.classList.remove('book_fs-small');
            book.classList.remove('book_fs-big');
        }
        else if (index === 2) {
            book.classList.remove('book_fs-small')
            book.classList.add('book_fs-big');
        }
        event.preventDefault();
    }
}