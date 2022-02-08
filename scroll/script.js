//-----------SET DATE--------------
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

// ---------CLOSE LINKS------------
const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

navToggle.addEventListener("click", () => {
  //linksContainer.classList.toggle("show-links");
  //calculate the nav height , we are not allowed to hardcode the height instaed we can make it dynamic
  const containerHeight = linksContainer.getBoundingClientRect().height;
  //console.log(containerHeight);
  const linksHeight = links.getBoundingClientRect().height;
  //console.log(linksHeight);

  if (containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
});

// ---------FIXED NAVBAR-------------
//The read-only Window property pageYOffset is an alias for scrollY ; as such, it returns the number of pixels the document is currently scrolled along the vertical axis
const navbar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");
window.addEventListener("scroll", () => {
  //console.log(window.pageYOffset);
  const scrollHeight = window.pageYOffset;
  const navHeight = navbar.getBoundingClientRect().height;
  if (scrollHeight > navHeight) {
    navbar.classList.add("fixed-nav");
  } else {
    navbar.classList.remove("fixed-nav");
  }
  if (scrollHeight > 500) {
    topLink.classList.add("show-link");
  } else {
    topLink.classList.remove("show-link");
  }
});

//-----------SMOOTH SCROLL------------
const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    //prevent default
    e.preventDefault();
    //navigate to sepecific spotThe slice() method extracts a part of a string. The slice() method returns the extracted part in a new string. The slice() method does not change the original .

    //The slice() method extracts a part of a string. The slice() method returns the extracted part in a new string. The slice() method does not change the original string.
    const id = e.currentTarget.getAttribute("href").slice(1);
    //console.log(id);
    const element = document.getElementById(id);
    // The offsetTop property returns the top position (in pixels) relative to the top of the offsetParent element.
    // calculate the heights

    const navHeight = navbar.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const fixedNav = navbar.classList.contains("fixed-nav");
    let position = element.offsetTop - navHeight;
    //console.log(position);

    if (!fixedNav) {
      position = position - navHeight;
    }
    if (navHeight > 82) {
      position = position + containerHeight;
    }
    window.scrollTo({
      left: 0,
      top: position,
    });
    linksContainer.style.height = 0;
  });
});
