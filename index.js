// For smoothScroll (just call this function 
//     through HTML code on individual elements with arguments)

function smoothScroll(pos, speed) {
    // Here pos is the Y offset till which the user wants to scroll
    // Speed is the interval in ms after which the setInterval will execute (set to 1)
    
    let id = setInterval(scroll, speed);
    let i = 0;

    function scroll() {
        if(i >= pos) {
            clearInterval(id);
        }
        else {
            i +=10 ;
            window.scrollTo(0, i);
        }
    }
}

// Te following code is for filling the Skill Bars when 
// The viewport reaches Skills container 

var skills = document.getElementById('skills-area');
var fillBox = document.querySelectorAll('.skills-box > div');
window.addEventListener('scroll',checkScroll);
isFired = false;

function initialiseFillBox() {
    for(let bar of fillBox){
        bar.style.width = 0 + '%';
    }
}
initialiseFillBox();

function fillBar() {
    for(let bar of fillBox){
        let fillWidth = bar.getAttribute('data-skill-value');
        let currentWidth = 0;
        let id = setInterval(function() {
            if(currentWidth >= fillWidth){
                clearInterval(id);
                return;
            }
            bar.style.width = currentWidth + '%';
            currentWidth++;
        },10)
    }
}

function checkScroll() {
    var coordinates = skills.getBoundingClientRect();
    if(!isFired && coordinates.top < window.innerHeight){
        isFired = true;
        fillBar();
    }
    else if(window.innerHeight < coordinates.top){
        isFired = false;
        initialiseFillBox();
    }
}


// // Logic to implement Fill in skills section when scroll view reaches Skills container 

// var skills = document.getElementById('skills-area');
// var fillBox = document.querySelectorAll('.skills-box > div');

// for(let i = 0 ; i<fillBox.length ; i++){
//     let fillWidth = fillBox[i].getAttribute('data-skill-value');
//     //Local variable for getting the attribute from HTML to find the percentage fill in each skill
//     let w = 0;

//     let id = setInterval(function (){
//         //condition to check if skills container is in the viewing area
//         if(window.pageYOffset >= skills.getBoundingClientRect().top && skills.getBoundingClientRect().bottom >= 150) {
//             if(w >= fillWidth){
//                 clearInterval(id);
//             }
//             else {
//                 w++;
//                 fillBox[i].style.width = w + "%"; 
//             }
//         }
//         else {
//             fillBox[i].style.width = '0' + "%"; 
//         }
//     },20);
// }


