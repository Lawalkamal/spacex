const btn = document.getElementById('menu-btn');
const overlay = document.getElementById('overlay');
const menu = document.getElementById('mobile-menu');
let scrollStarted = false

btn.addEventListener('click', navToggle);
document.addEventListener('scroll', scrollPage )

function navToggle(){
    btn.classList.toggle('open');
    overlay.classList.toggle('overlay-show');
    document.body.classList.toggle('stop-scrollin');
    menu.classList.add.toggle('show-menu');
}

function scrollPage() {
    const scrollPos = window.scrollY;

    if(scrollPos > 100 && !scrollStarted){
        countUp();
        scrollStarted = true;
    }else if(scrollPos < 100 && scrollStarted){
        reset();
        scrollStarted = false
    }
}


function countUp(){
    counters.forEach((counter) =>{
        counters.innerText = '0';

        const updateCounter = () => {
            //get count target
            const target = +counter.getAttribute('data-target');
            //get current conter value
            const c = +counter.innerText

            //create an increment
            const increment = target / 100

            //if counter is less than teh target, add increment
            if(c < target){
                //Roung up and set counter value
                counter.innerText = `${Math.ceil(c + increment)}`;

                setTimeout(updateCounter, 75)
            }else{
                counter.innerText = target;
            }

        };

        updateCounter();
    });
}

function reset(){
    counter.forEach((counter) => (counter.innerHTML = '0'));
    ;
}