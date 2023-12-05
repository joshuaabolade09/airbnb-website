const toggle = document.querySelector('.toggle');
let price = document.querySelectorAll('.price');
const showMore =document.getElementById('showe')


toggle.addEventListener('click', function() {
  for (let element of price) {
    updatePrice(element);
  }
});
//Increase price by 2.2 when the toggle button is on 
function updatePrice(element) {
  let currentPrice = element.textContent.match(/\d+/)[0];
  console.log(currentPrice);

  if (toggle.classList.contains('on')) {
    let currentNo = parseInt(currentPrice);
    let newPrice = Math.trunc(currentNo * 2.2); // Multiply by 2.2 instead of multiplying
    console.log(currentNo);
    let updatedPrice = element.textContent.replace(/\d+/, newPrice);
    console.log(updatedPrice);
    element.textContent = updatedPrice;
  } else {
    let defaultPrice = element.getAttribute('data-default-price');
    element.textContent = "$" + defaultPrice + " night";
  }
}


// Creating image  json

const imageLead=[
  {
    src: "img/nanats 1b.webp",
    price:"$52 night",
    Date:"Dec 12-15",
    Location:"Nantes, France",
    description: "Stay with Maracana, Coach"


  },
  {
  src: "img/paris 1b.webp",
    price:"$52 night",
    Date:"Dec 12-15",
    Location:"Monaco, France",
    description: "Stay with Maracana, Coach"
  },

  {
    src: "img/paris 1c.webp",
      price:"$65 night",
      Date:"Dec 13-17",
      Location:"Reinnes, France",
      description: "Stay with Neymar , Dribbler"
    },

    {
      src: "img/paris 1c.webp",
        price:"$65 night",
        Date:"Dec 13-17",
        Location:"Reinnes, France",
        description: "Stay with Neymar , Dribbler"
      },
      
    {
      src: "img/paris 1e.webp",
        price:"$22 night",
        Date:"Dec 13-17",
        Location:"Stuggart, Germany",
        description: "Stay with Tuchel, Coach"
      },

      {
        src: "img/paris 2a.webp",
          price:"$54 night",
          Date:"Feb 12-14",
          Location:"Munich , Germany",
          description: "Stay with Klopp , Coach"
        },
        
      {
        src: "img/paris 2b.webp",
          price:"$64 night",
          Date:"Feb 12-14",
          Location:"Dortmund, Germany",
          description: "Stay with Serena Williams , Tennis player"
        },
        {
          src: "img/paris 2c.webp",
            price:"$48 night",
            Date:"Mar 22-26",
            Location:"Tel Aviv, Israel",
            description: "Stay with Serena Williams , Tennis player"
          },
          {
            src: "img/paris 2d.webp",
              price:"$48 night",
              Date:"Mar 22-26",
              Location:"Berlin, Germany",
              description: "Stay with Maracana , Coach"
            },

            {
              src: "img/paris 2e.webp",
                price:"$48 night",
                Date:"Dec 8-12",
                Location:"Leverkusen, Germany",
                description: "Stay with Adeyemi, Player"
              },

              {
                src: "img/paris 3a.webp",
                  price:"$72 night",
                  Date:"Dec 8-12",
                  Location:"Granada, Spain",
                  description: "Stay with Burnaboy , Afro Beat Artiste"
                },
                {
                  src: "img/paris 3b.webp",
                    price:"$60 night",
                    Date:"April 12-16",
                    Location:"Paris, France",
                    description: "Stay with Donjazzi "
                  },
                  {
                    src: "img/paris 3c.webp",
                      price:"$220 night",
                      Date:"May 12-14",
                      Location:"Abuja, Nigeria",
                      description: "Stay with Tinubu, Agbado man"
                    },

                    {
                      src: "img/paris 3d.webp",
                        price:"$48 night",
                        Date:"Dec 8-12",
                        Location:"Free Town, South Africa",
                        description: "Stay with Manacrella , Me sef no sabi am"
                      },

                      {
                        src: "img/paris 3e.webp",
                          price:"$120 night",
                          Date:"June 12-16",
                          Location:"Alaves, Spain",
                          description: "Stay with Guardiola , Coach"
                        },
                        {
                          src: "img/paris 1b.webp",
                            price:"$120 night",
                            Date:"Dec 8-12",
                            Location:"Paris, France",
                            description: "Stay with Maracana , Coach"
                          },
                          {
                            src: "img/nanats 1b.webp",
                              price:"$55 night",
                              Date:"July 12-15 ",
                              Location:"Paris, France",
                              description: "Stay with Elumelu, Business Man"
                            },
              
          
          
                            {
                              src: "img/nanats 1c.webp",
                                price:"$68 night",
                                Date:"Oct 11-15 ",
                                Location:"Paris, France",
                                description: "Stay with Rick Ross , Pop Artiste"
                              },
                              {
                                src: "img/nanats 1d.webp",
                                  price:"$408 night",
                                  Date:"Nov 8-12 ",
                                  Location:"Paris, France",
                                  description: "Stay with oluwaeistein , CTO"
                                },
                                {
                                  src: "img/london 1a.webp",
                                    price:"$72 night",
                                    Date:"Nov 8-12 ",
                                    Location:"Wigan, England",
                                    description: "Stay with Saparu Coach"
                                  },
                                  {
                                    src: "img/london 1b.webp",
                                      price:"$55 night",
                                      Date:"Jan 12-16 ",
                                      Location:"Athletic Club, Spain",
                                      description: "Stay with Richard , Dancer"
                                    },
                                    {
                                      src: "img/london 1e.webp",
                                        price:"$43 night",
                                        Date:"Dec 8-12",
                                        Location:"Seradane, England",
                                        description:"Stay with Serland, Body fitness Coach"
                                      },
                                      {
                                        src: "img/paris 1b.webp",
                                          price:"$66 night",
                                          Date:"Dec 8-12",
                                          Location:"Paris, France",
                                          description:"Stay with Maracana , Coach"
                                        },
                        
]

let currentPage = 1
let imagePerPage= 10


function displayPage(page){
  const startImage= (page-currentPage)*imagePerPage
  const endPage = imagePerPage + startImage

  const imageToshow= imageLead.slice(startImage, endPage)

imageToshow.forEach((image)=>{
const images=  document.createElement('img'); 
images.src= image.src

const descriptiveElement =document.createElement('p')
descriptiveElement.textContent=image.description

const descriptivelocation =document.createElement('p')
descriptivelocation.textContent=image.Location

const priceElement = document.createElement('p');
    priceElement.textContent = image.price;
    
    const containerElement = document.createElement('div');
    containerElement.appendChild(images);
    containerElement.appendChild(descriptiveElement);
    containerElement.appendChild(priceElement);
    containerElement.appendChild(descriptivelocation);

    document.getElementById('image-pack-grid').appendChild(containerElement);
})
}

displayPage(currentPage, endPage)

showMore.addEventListener("click", function() {
  currentPage++;
  displayPage(currentPage);
});
