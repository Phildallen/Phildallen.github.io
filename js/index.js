const about = [
    '<p class="largeButtonText">about</p>',
    '<p>a</p>'
]

const projects = [
    '<p class="largeButtonText">projects</p>',
    '<p class="largeP">p</p>'
]

const contact = [
    '<p class="largeButtonText">contact</p>',
    '<p>c</p>'
]
const smallHome = [
    '<p class="smallButtonText">home</p>',
    '<p class="smallH">h</p>'
]
const smallProjects = [
    '<p class="smallButtonText">projects</p>',
    '<p class="smallP">p</p>'
]
const smallContact = [
    '<p class="smallButtonText">contact</p>',
    '<p>c</p>'
]
const smallAbout = [
    '<p class="smallButtonText">about</p>',
    '<p>a</p>'
]

let currentIndex = 0;
let index = 4;
function updateHTML(element1,elementName1,element2,elementName2,element3,elementName3) {

    let HTMLElement1 = document.getElementById(elementName1);
    let HTMLElement2 = document.getElementById(elementName2);
    let HTMLElement3 = document.getElementById(elementName3);

    if (index === 0 || index === 4) {
        HTMLElement1.classList.add("hide");
        HTMLElement2.classList.add("hide");
        HTMLElement3.classList.add("hide");
    }

    setTimeout(function () {
        index < 4 ? currentIndex = 1 : currentIndex =0;
        HTMLElement1.innerHTML = element1[currentIndex];
        HTMLElement2.innerHTML = element2[currentIndex];
        HTMLElement3.innerHTML = element3[currentIndex];

        HTMLElement1.classList.remove("hide");
        HTMLElement2.classList.remove("hide");
        HTMLElement3.classList.remove("hide");

        index = (index + 1) % 5;

    }, 500);
}

function indexHTML(){
    updateHTML(about,"about",
        projects,"projects",
        contact,"contact")
}
function aboutHTML(){
    updateHTML(smallHome,"smallHome",
        smallProjects,"smallProjects",
        smallContact,"smallContact")
}

function projectsHTML(){
    updateHTML(smallHome,"smallHome",
        smallAbout,"smallAbout",
        smallContact,"smallContact")
}
function contactHTML(){
    updateHTML(smallHome,"smallHome",
        smallAbout,"smallAbout",
        smallProjects,"smallProjects")
}

function pageSelectHTML() {
    let currentPage= window.location.pathname;
    if (currentPage === "/Portfolio/index.html"){
        setInterval(indexHTML,2000)
    } else if (currentPage === "/Portfolio/indexabout.html"){
       setInterval(aboutHTML,2000)
    } else if (currentPage === "/Portfolio/indexprojects.html"){
        setInterval(projectsHTML,2000)
    } else if (currentPage === "/Portfolio/indexcontact.html"){
        setInterval(contactHTML,2000)
    }
}

pageSelectHTML();
