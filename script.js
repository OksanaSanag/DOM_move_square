const square = document.getElementById('square');

square.addEventListener('click', function() {
    this.style.width = '100px';
    this.style.height = '100px';
    this.textContent = '';

    init();
}, { once: true });

const halfSquare = 50;

function moveSquare(event) {
    let { x, y } = event; 
        /* const x = event.x;
           const y = event.y; */
    
    if (x < halfSquare) { x = halfSquare; }
    if (x > window.innerWidth - halfSquare) { x = window.innerWidth - halfSquare}/*window.innerWidth - вся ширина вікна; document.documentElement.clientWidth )- ширина минус прокрутка*/
        square.style.left = x + 'px';

    if (y < halfSquare) { y = halfSquare}
    if (y > window.innerHeight - halfSquare) { y = window.innerHeight - halfSquare}
        square.style.top = y + 'px'; 
}


function init() {
    square.addEventListener('mousedown', function() {
        document.addEventListener('mousemove', moveSquare);
    });
    document.addEventListener('mouseup', function() {
        document.removeEventListener('mousemove', moveSquare);
    });

    
    //let coords = square.getBoundingClientRect();
    //console.log('coords', coords);
    square.addEventListener('keydown', (event) => {
        console.log(event.keyCode);
        console.log('square:', square); 
        console.dir(square);  /* - виведе всі проперті нашого ел square */
         
        const keyLeft = 37;
        const keyUp = 38;
        const keyRight = 39;
        const keyDown = 40;
        switch (event.keyCode) { 
            case keyLeft: 
                console.log(square.getBoundingClientRect()); 
                // метод вертає координати відносно вікна для мінімального по розміру прямокутника, в якому міститься елемент
                // координати відраховуються від лівої верхньої точки
                moveSquare( {x: square.getBoundingClientRect().x + halfSquare - 20, y: square.getBoundingClientRect().y + halfSquare} )
                //квадрат відцентрований (в css-файлі), тому координати змістилися на halfSquare (половину розміру квадрата)
                break;
            case keyUp: 
                console.log(square.getBoundingClientRect());
                moveSquare( {x: square.getBoundingClientRect().x + halfSquare, y: square.getBoundingClientRect().y + halfSquare - 20} )
                break;
            case keyRight:
                console.log(square.getBoundingClientRect());
                moveSquare( {x: square.getBoundingClientRect().x + halfSquare + 20, y: square.getBoundingClientRect().y + halfSquare} )
                break;
            case keyDown:
                console.log(square.getBoundingClientRect());
                moveSquare( {x: square.getBoundingClientRect().x + halfSquare, y: square.getBoundingClientRect().y + halfSquare + 20} )
                break;
        }
    })
}