const h1 = document.querySelector('h1');
document.body.addEventListener('click', function(event) {
    const x = event.clientX;
    const y = event.clientY;
    const width = window.innerWidth;
    const height = window.innerHeight;
    h1.textContent = x + ', ' + y;
    // const red = x/width * 100;
    // const green = y/height * 100;
    // const blue = 50;

    if (x%2==0 && y%2==0){
    document.body.style.backgroundColor = 'red';
    }
        else if (x%2==1 && y%2==1){
        
        document.body.style.backgroundColor = 'blue';}

        else if (x%2 != y%2) {
        document.body.style.backgroundColor = 'green'
        }

        })

    



    // document.body.style.backgroundColor = `rgb(${red}%, ${green}%, ${blue}%)`


