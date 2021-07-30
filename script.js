const aboutBtn = document.querySelector('#about-btn');
const projectBtn = document.querySelector('#project-btn');
const contactBtn = document.querySelector('#contact-btn');
const headerBtn = document.querySelector('.read-more-btn');
const navigation = document.querySelector('.navigation');

const about = document.querySelector('.about-section');
const project = document.querySelector('.projects-section');
const contact = document.querySelector('.contact-section');
const header = document.querySelector('.header')

/// functions \\\

function scrolling(button, section) {
    button.addEventListener('click', function () {
        section.scrollIntoView();
        section.classList.add('section-drive')
    })
}

scrolling(aboutBtn, about);
scrolling(projectBtn, project);
scrolling(contactBtn, contact);
scrolling(headerBtn, about);


function checkOffset(element) {

    let startFlag = true;

    document.addEventListener('scroll', function() {

        
        if (element.offsetTop <= (window.scrollY + (element.offsetTop / 2))) {
            element.classList.remove('section-drive-back')
            element.querySelector('h2').classList.remove('title-drive-back')
            
            element.classList.add('section-drive')
            element.querySelector('h2').classList.add('title-drive');
        };

        if (element.offsetTop >= (window.scrollY + (element.offsetTop / 2)) ) {
            element.classList.remove('section-drive')
            element.querySelector('h2').classList.remove('title-drive')

            element.classList.add('section-drive-back');
            element.querySelector('h2').classList.add('title-drive-back')

        }

        
    })
   

}


checkOffset(about)
checkOffset(project)
checkOffset(contact)


/// header opa and typing \\\

function checkOffsetHeader(element) {
    let heightToAction = element.offsetHeight / 1.9;
    let actualOffset = element.offsetTop + heightToAction;
    

    document.addEventListener('scroll', function () {
        let windowPosition = window.scrollY;

        if (windowPosition >= actualOffset) {
            element.classList.add('opa-on')
            element.classList.remove('opa-off')
            
        };

        if (windowPosition <= actualOffset) {
            element.classList.add('opa-off');
            element.classList.remove('opa-on')
        }

        
        
      
    })
    
   

}

checkOffsetHeader(header);

setTimeout(function() {
    headerBtn.classList.remove('hidden');
    navigation.classList.remove('hidden')
}, 7000)