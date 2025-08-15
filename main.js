
const navLinks = document.querySelectorAll('header nav a');
const logoLink = document.querySelector('.logo');
const sections = document.querySelectorAll('section');
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.header nav');


menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
})

//<i class='bx bx-x'></i>

const activePage = () =>{

    const barBox = document.querySelector('.bars-box');
    const header = document.querySelector('.header');

    header.classList.remove('active')
    setTimeout(() => {
        header.classList.add('active')
    }, 1100);

    navLinks.forEach(link =>{
        link.classList.remove('active');
    });

    barBox.classList.remove('active')
    setTimeout(() => {
        barBox.classList.add('active')
    }, 1100);

    sections.forEach(section =>{
        section.classList.remove('active');
    });

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}


navLinks.forEach( (link, idx)=> {
    link.addEventListener('click', ()=>{
        if(!link.classList.contains('active')){
            activePage();

            link.classList.add('active');

            setTimeout(() => {
                sections[idx].classList.add('active')
            }, 1100);
        }
    })
})

logoLink.addEventListener('click', ()=>{
    if(!navLinks[0].classList.contains('active')){
      activePage();

       navLinks[0].classList.add('active');

            setTimeout(() => {
                sections[idx].classList.add('active')
            }, 1100);
    }
});





/* <!-- Resume-section-design --> */

const resumeBtns = document.querySelectorAll('.resume-btn');

resumeBtns.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
        const resumeDetails = document.querySelectorAll('.resume-details');

        resumeBtns.forEach( btn =>{
            btn.classList.remove('active');
        });
        btn.classList.add('active');

        resumeDetails.forEach(detail => {
            detail.classList.remove('active');
        });
        resumeDetails[idx].classList.add('active');
    });
});



//@@@@@@@@@@@ CONTACT PAGE SENDING MSG TO MAIL@@@@@@@@

function sendEmail(){
    Email.send({
    Host : "smpt.gmail.com",
    Username : "tech.sonusingh99@gmail.com",
    Password : "Singh@9573",
    To : 'surajsinghbxr09@gmail.com',
    From : document.getElementById("email").value,
    Subject : "New contact form enquiry..",
    Body : "And this is the body"
}).then(
  message => alert(message)
);
}



// ......  Main Section.......####################

// const text = document.querySelector(".sec-text");
// const textLoad = ()=>{
//     setTimeout(() => {
//         text.textContent = "Data Structure & Algorithms";
//     }, 0);
//     setTimeout(() => {
//         text.textContent = "MERN Stack Developer";
//     }, 4000);
//     setTimeout(() => {
//         text.textContent = "Full Stack Developer";
//     }, 8000);
    
    
// }
// textLoad();
// setInterval(textLoad, 12000);


/* <!-- Resume-section-design --> */

// const resumeBtns = document.querySelectorAll('.resume-btn');

// resumeBtns.forEach((btn, idx) => {
//     btn.addEventListener('click', () => {
//         const resumeDetails = document.querySelectorAll('.resume-details');

//         resumeBtns.forEach( btn =>{
//             btn.classList.remove('active');
//         });
//         btn.classList.add('active');

//         resumeDetails.forEach(detail => {
//             detail.classList.remove('active');
//         });
//         resumeDetails[idx].classList.add('active');
//     });
// });

// ========toggle icon navbar=======

// let menuIcon = document.querySelector('#menu-icon');
// let navbar = document.querySelector('.navbar');

// menuIcon.onclick = () => {
//     menuIcon.classList.toggle('bx-x');
//     navbar.classList.toggle('active')
// };




// ========scroller section active link=======

// let sections = document.querySelectorAll('section');
// let navLinks = document.querySelectorAll('header nav a');

// window.onscroll = () =>{
//     sections.forEach(sec => {
//         let top = window.scrollY;
//         let offSet = sec.offsetTop-150;
//         let height = sec.offsetHeight;
//         let id = sec.getAttribute('id');

//         if(top >= offSet && top < offSet + height){
//             navLinks.forEach(links =>{
//                 links.classList.remove('active');
//                 document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
//             });
//         };
//     });



// / ========scroller section active link=======

// let header = document.querySelector('header');
// header.classList.toggle('sticky', window.scrollY > 100);


// / ========remove toggle icon and navbar when click navbar link scroller...=======
//     menuIcon.classList.remove('bx-x');
//     navbar.classList.remove('active') 

// };














