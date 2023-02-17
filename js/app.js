
const sectionElements = document.querySelectorAll('section');
const navbarUl = document.getElementById('nav-list-ul');
// function to create a navbar
const createNav = () =>{
  //create an empty DocumentFragment
  const fragment = document.createDocumentFragment();
  //create list items
  sectionElements.forEach((section)=>{
    const li = document.createElement('li');
    const aTag=document.createElement('a');
    aTag.setAttribute('href',`#${section.id}`);
    aTag.className =`nav_link`;
    // aTag.className =`${section.id}`
    aTag.innerHTML+=section.dataset.nav;
    li.className=`${section.id}`; 
    li.appendChild(aTag);
    //add list item to DocumentFragment
    fragment.appendChild(li)
  })
  // Add DocumentFragment to Nav ul
  navbarUl.appendChild(fragment)
}
createNav()

// funtion adds and removes active class from nav items and also checks where on the page we are (which section we are in)
const activateNav =()=>{
  const navLi = document.querySelectorAll('nav #nav-list ul li')
window.addEventListener('scroll',()=>{
  let current ='';
  sectionElements.forEach(section =>{
    const topOfSection = section.offsetTop;
    const heightOfSection = section.clientHeight;
    if(pageYOffset>=(topOfSection-heightOfSection /3)){
      current = section.getAttribute('id')
    }
  })
  navLi.forEach(li =>{
    li.classList.remove("active");
    if(li.classList.contains(current)){
      li.classList.add("active");
    }
  })
})
}
activateNav();

// function allows us to scroll to a specific section of the site
const scrollableNav =() =>{
  const linkClicked = (event) => {
	event.preventDefault();
	const sectionId = event.target.getAttribute('href');
	const section = document.querySelector(sectionId);
	window.scrollTo({
		top: section.offsetTop - section.clientHeight /10,
		behavior: 'smooth',
	});
};
const navLinks = document.querySelectorAll('.nav_link');
navLinks.forEach((li) => li.addEventListener('click', linkClicked));
}
scrollableNav();


const topBtn = document.querySelector('.top-btn');
// this function allows the arrow button to appear on the page 
const scrollToTop = () =>{
  window.addEventListener("scroll",()=>{
    if(window.pageYOffset > 100){
      topBtn.classList.add("active");
    }else{
      topBtn.classList.remove("active")
    }
  })
}
scrollToTop();

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-list-ul");
// creates toggle menu for nav
const toggleNav = () =>{
  hamburger.addEventListener("click",()=>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  })
document.querySelectorAll(".nav_link").forEach(n=>n.addEventListener("click",()=>{
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
    })
  )
}
toggleNav();