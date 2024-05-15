AOS.init();

// MOOCs Cards

const moocs = document.querySelector(".moocs");
const moocscards = [
  {
    title: "Between the World and Me",
    cardImage: "assets/images/education-page/betweenTheWorldAndMe.svg",
    moocLink: "https://iberian-connections.yale.edu/wp-content/uploads/2020/09/Between-the-World-and-Me-by-Ta-Nehisi-Coates.pdf",
  },
  {
    title: "The Water Dancer",
    cardImage: "assets/images/education-page/waterDance.svg",
    moocLink: "https://cdn.penguin.co.uk/dam-assets/books/9780241982518/9780241982518-sample.pdf",
  },
  {
    title: "Black Panther and the Crew",
    cardImage: "assets/images/education-page/blackPanther.svg",
    moocLink: "https://ta-nehisicoates.com/graphic-novels/black-panther-and-the-crew/",
  },
  
   {
    title: "THE FIRST WHITE PRESIDENT",
    cardImage: "assets/images/theAtlantic.svg",
    moocLink: "https://www.theatlantic.com/magazine/archive/2017/10/the-first-white-president-ta-nehisi-coates/537909/",
  },
  {
    title: "I’M NOT BLACK, I’M KANYE",
    cardImage: "assets/images/education-page/notBlackKanye.svg",
    moocLink: "https://www.theatlantic.com/entertainment/archive/2018/05/im-not-black-im-kanye/559763/",
  },
  {
    title: "The Case for Reperations",
    cardImage: "assets/images/education-page/caseForReperations.svg",
    moocLink: "https://www.theatlantic.com/magazine/archive/2014/06/the-case-for-reparations/361631/",
  },
  {
    title: "We Were Eight Years in Power: An American Tragedy",
    cardImage: "assets/images/education-page/eightYearsInPower.svg",
    moocLink: "https://ta-nehisicoates.com/books/we-were-eight-years-in-power/",
  },
  {
    title: "The Black Family in the Age of Mass Incarceration",
    cardImage: "assets/images/education-page/blackFamilyMass.svg",
    moocLink:
      "https://www.theatlantic.com/magazine/archive/2015/10/the-black-family-in-the-age-of-mass-incarceration/403246/",
  },
  {
    title: "The Beautiful Struggle",
    cardImage: "assets/images/education-page/theBeatifulStruggle.svg",
    moocLink: "https://ta-nehisicoates.com/books/the-beautiful-struggle/",
  },
   {
    title: "‘Better Is Good’: Obama on Reparations, Civil Rights, and the Art of the Possible",
    cardImage: "assets/images/theAtlantic.svg",
    moocLink: "https://www.theatlantic.com/politics/archive/2016/12/ta-nehisi-coates-obama-transcript-ii/511133/",
  },
  {
    title: "Testimony before U.S. House of Representatives on reparations",
    cardImage: "assets/images/education-page/americanFlag.svg",
    moocLink:
      "https://www.congress.gov/116/meeting/house/109648/witnesses/HHRG-116-JU10-Wstate-CoatesT-20190619.pdf",
  },
  {
    title: "Fear of a Black President",
    cardImage: "assets/images/theAtlantic.svg",
    moocLink: "https://www.theatlantic.com/magazine/archive/2012/09/fear-of-a-black-president/309064/",
  },
  
];

const experience = [
  {
    img: "assets/images/education-page/c1.png",
  },
  {
    img: "assets/images/education-page/c2.jpg",
  },
  {
    img: "assets/images/education-page/c3.png",
  },
  {
    img: "assets/images/education-page/c4.png",
  },
  {
    img: "assets/images/education-page/c5.jpg",
  },
];

let currentItem = 0;

const img = document.getElementById("image");

const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

window.addEventListener("DOMContentLoaded", function () {
  showExperience();
});

function showExperience() {
  setInterval(function () {
    if (currentItem === experience.length) {
      currentItem = 0;
    }
    const item = experience[currentItem];
    img.src = item.img;
    currentItem++;
  }, 3000);
}

const showCards = () => {
  let output = "";
  moocscards.forEach(
    ({ title, cardImage, moocLink }) =>
      (output += `        
        <div class="col-6 col-md-3 col-sm-4 column" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="600" >  
            <div class="card mb-3 mx-auto">
               <div class="content">
                  <div class="content-overlay"></div>
                    <img src=${cardImage} class="card-img-top content-image">     
                  <div class="content-details fadeIn-bottom">
                    <a href="${moocLink}" target="_blank"><i class="fa fa-info-circle fa-2x" aria-hidden="true" style="color: white;"></i></a>                                   
                  </div>
                </div>
                <div class="card-body">
                    <h6 class="mt-0 py-2 text-center font-weight-bold mooc-title" style="font-size:12px;">${title}</h6>
                </div>
            </div>
        </div>        
      `)
  );
  moocs.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

/* Badges*/

const bagdes = document.querySelector(".badges");
const badgesection = [
  {
    title: "Google Developer Essentials",
    image: "assets/images/education-page/badge1.png",
    description: "Earned May 20, 2020",
  },
  {
    title: "VM Migration",
    image: "assets/images/education-page/badge2.png",
    description: "Earned June 20, 2020",
  },
  {
    title: "G Suite Essentials",
    image: "assets/images/education-page/badge3.png",
    description: "Earned July 20, 2020",
  },
];

const showCards1 = () => {
  let output = "";
  badgesection.forEach(
    ({ title, image, description }) =>
      (output += `       
      <div class="col-lg-4 col-md-6 p-2" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="600"> 
        <img class="img-fluid d-block mb-3 mx-auto hvr-grow" src="${image}" alt="Card image cap" width="200">
          <div class="text-center font-weight-bolder" style="font-size: 1.3em;">${title}</div>
          <div class="text-center text-muted font-weight-bolder p-2">${description}</div>
      </div>`)
  );
  bagdes.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards1);

/* Timeline Section*/

$(function () {
  window.sr = ScrollReveal();

  if ($(window).width() < 768) {
    if ($(".timeline-content").hasClass("js--fadeInLeft")) {
      $(".timeline-content")
        .removeClass("js--fadeInLeft")
        .addClass("js--fadeInRight");
    }

    sr.reveal(".js--fadeInRight", {
      origin: "right",
      distance: "300px",
      easing: "ease-in-out",
      duration: 800,
    });
  } else {
    sr.reveal(".js--fadeInLeft", {
      origin: "left",
      distance: "300px",
      easing: "ease-in-out",
      duration: 800,
    });

    sr.reveal(".js--fadeInRight", {
      origin: "right",
      distance: "300px",
      easing: "ease-in-out",
      duration: 800,
    });
  }

  sr.reveal(".js--fadeInLeft", {
    origin: "left",
    distance: "300px",
    easing: "ease-in-out",
    duration: 800,
  });

  sr.reveal(".js--fadeInRight", {
    origin: "right",
    distance: "300px",
    easing: "ease-in-out",
    duration: 800,
  });
});
