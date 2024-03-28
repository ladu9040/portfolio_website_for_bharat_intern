/*==== Resize navbar on Scrool ====*/
var navbar = document.querySelector(".navbar");
// when the scroll is higher than 20 viewport height, add the sticky classes to the tag with a class navbar
window.onscroll = () => {
  this.scrollY > 30
    ? navbar.classList.add("sticky")
    : navbar.classList.remove("sticky");
};

/*===== Nav Toggler =====*/
const navMenu = document.querySelector(".menu");
      navToggle = document.querySelector(".menu-btn");
      if (navToggle) {
        navToggle.addEventListener("click", ()=>{
          navMenu.classList.toggle("active");
        })
      }

      //closing menu when link is clicked
      const navLink = document.querySelectorAll(".nav-link");
      function linkAction(){
        const navMenu = document.querySelector(".menu")
        navMenu.classList.remove("active")

      }
      navLink.forEach(n => n.addEventListener("click", linkAction))

      /*===== Scroll Section Active Link ======*/

      const section = document.querySelectorAll("section[id]")
      function scrollActive(){
        const scrollY = window.pageYOffset
        section.forEach = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute("id")
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          document.querySelector(".links a[href*=" + sectionId + "]").classList.add("active")
          
        }else{
          document.querySelector(".links a[href*=" + sectionId + "]").classList.remove("active")
        }
      }
      window.addEventListener("scroll", scrollActive);

/*==== Skills Animations ====*/
const skills_wrap = document.querySelector(".about-skills"),
  skills_bar = document.querySelectorAll(".progress-line");
window.addEventListener("scroll", () => {
  skillsEffect();
});

function checkScroll(el) {
  let rect = el.getBoundingClientRect();

  if (window.innerHeight >= rect.top + el.offsetHeight) {
    return false;
  }
}

function skillsEffect() {
  if (!checkScroll(skills_wrap)) {
    skills_bar.forEach((skill) => {
      skill.style.width = skill.dataset.progress;
    });
  }
}

/*==== portfolio item filter ====*/
const FilterContainer = document.querySelector(".portfolio-filter"),
  filterBtns = FilterContainer.children;
totalFilterBtn = filterBtns.length;
portfolioItems = document.querySelectorAll(".portfolio-item"),
  totalportfolioItem = portfolioItems.length;
for (let i = 0; i < totalFilterBtn; i++) {
  filterBtns[i].addEventListener("click", function(){
    FilterContainer.querySelector(".active").classList.remove("active");
    this.classList.add("active");
    const filterValue = this.getAttribute("data-filter")
    for (let k = 0; k < totalportfolioItem; k++) {
      if (filterValue===portfolioItems[k].getAttribute("data-catagory")) {
        portfolioItems[k].classList.remove("hide");
        portfolioItems[k].classList.add("show");
      }else{
        portfolioItems[k].classList.remove("show");
        portfolioItems[k].classList.add("hide");
      }
      if (filterValue==="all") {

         portfolioItems[k].classList.remove("hide");
        portfolioItems[k].classList.add("show");
      }
    }
  })
}

/*===== Lightbox =====*/

const lightbox = document.querySelector(".lightbox"),
     lightboxImg = lightbox.querySelector(".lightbox-img"),
     lightboxClose = lightbox.querySelector(".lightbox-close"),
     lightboxText = lightbox.querySelector(".caption-text"),
     lightboxCounter = lightbox.querySelector(".caption-counter");
     let itemIndex = 0;
     for (let i = 0; i < totalportfolioItem; i++) {
      
      portfolioItems[i].addEventListener("click", function(){
      itemIndex = i;
      changeItem();
      toggleLightbox();
      

    } )
  
  }

  function nextItem(){
    if (itemIndex == totalportfolioItem) {
      itemIndex=0;
      
    }else{
      itemIndex++
    }
    changeItem();
  }
  function prevItem(){
    if (itemIndex == 0) {
      itemIndex=totalportfolioItem;
      
    }else{
      itemIndex--
    }
    changeItem();
  }

  function toggleLightbox(){
    lightbox.classList.toggle("open");
  }

    function changeItem(){
      imgSrc = portfolioItems[itemIndex].querySelector(".portfolio-img img").getAttribute("src")
        lightboxImg.src=imgSrc;
        lightboxText.innerHTML=portfolioItems[itemIndex].querySelector( "h4").innerHTML;
        lightboxCounter.innerHTML=(itemIndex +1)+ "  of  " + totalportfolioItem

  }

  /*===== close lightbox ====== */
  lightbox.addEventListener("click", (e)=>{
    if( e.target === lightboxClose || e.target === lightbox){
      toggleLightbox()
    }
  })

