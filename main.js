const pets = [
    {
      name: "Dusty",
      color: "Green",
      specialSkill: "Gives sincere apologies.",
      type: "cat",
      imageUrl: "http://kittentoob.com/wp-content/uploads/2015/06/funny-cat-with-a-towel.jpg"
    },
    {
      name: "Trouble",
      color: "Brown",
      specialSkill: "Just picks the tomatoes off of a sandwich instead of requesting a whole new sandwich.",
      type: "dino",
      imageUrl: "https://media.istockphoto.com/photos/dinosaur-picture-id637756652?b=1&k=20&m=637756652&s=170667a&w=0&h=um7-AfKHugoT1qxsMOErFLQwMpm7pHEPFkBeyY4E1Qs="
    },
    {
      name: "Whiskers",
      color: "Yellow",
      specialSkill: "Can prove he is a real man by drinking whiskey.",
      type: "dino",
      imageUrl: "https://mydinosaurs.com/wp-content/uploads/2017/02/2-3-600x400.jpg"
    },
    {
      name: "Coco",
      color: "Black",
      specialSkill: "Burps minimally.",
      type: "dog",
      imageUrl: "http://cdn.akc.org/content/article-body-image/funny-pembroke_welsh_corgi.jpg"
    },
    {
      name: "Spooky",
      color: "Brown",
      specialSkill: "Comfortable in the outdoors for up to eight hours.",
      type: "cat",
      imageUrl: "http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg"
    },
    {
      name: "Tiger",
      color: "Black",
      specialSkill: "Can read (but cannot understand) Hebrew.",
      type: "dog",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Basset_Hound_600.jpg"
    },
    {
      name: "Oreo",
      color: "Yellow",
      specialSkill: "Able to stop chewing ice or whistling on request.",
      type: "cat",
      imageUrl: "https://i.pinimg.com/originals/9d/da/3e/9dda3e5fd2b9886fc3d13ee47f52e8a0.jpg"
    },
    {
      name: "Ginger",
      color: "Grey",
      specialSkill: "Comfortable in the outdoors for up to eight hours.",
      type: "dino",
      imageUrl: "https://images.unsplash.com/photo-1559999127-b8b7f927dab8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      name: "Sassy",
      color: "Brown",
      specialSkill: "Adept at talking self and others out of fights.",
      type: "cat",
      imageUrl: "https://tailandfur.com/wp-content/uploads/2015/09/40-Amazing-Cat-Funny-Moment-Pictures-Feature-Image.jpg"
    },
    {
      name: "Sammy",
      color: "Blue",
      specialSkill: "Listens attentively to boring stories.",
      type: "cat",
      imageUrl: "https://i.pinimg.com/originals/04/54/92/0454926d39eeb420f4f01948e94e9e41.jpg"
    },
    {
      name: "Coco",
      color: "Orange",
      specialSkill: "Can be around food without staring creepily at it.",
      type: "dino",
      imageUrl: "https://images.unsplash.com/photo-1615395885712-d87a8d091c1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MjN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      name: "Buster",
      color: "Green",
      specialSkill: "Does not use excessive acronyms.",
      type: "dog",
      imageUrl: "https://i.pinimg.com/originals/1f/30/8c/1f308c9c108a384b91b39430cc7312e9.jpg"
    },
    {
      name: "Chester",
      color: "Red",
      specialSkill: "Expertly quotes and recognizes dialogue from early seasons of The Simpsons.",
      type: "dog",
      imageUrl: "https://images.pexels.com/photos/4587971/pexels-photo-4587971.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      name: "Samantha",
      color: "Brown",
      specialSkill: "Always up for dessert.",
      type: "cat",
      imageUrl: "http://3.bp.blogspot.com/-RzIFLsIO-XQ/UFoMLOT66JI/AAAAAAAAVps/JRF98hdA9S8/s640/funny-cat-pictures-016-027.jpg"
    },
    {
      name: "Coco",
      color: "Red",
      specialSkill: "Burps minimally.",
      type: "cat",
      imageUrl: "http://cathumor.net/wp-content/uploads/2013/12/cat-humor-funny-karate-cat-2.jpg"
    },
    {
      name: "Smokey",
      color: "Brown",
      specialSkill: "Drives at a safe rate of speed in snow or rain.",
      type: "dino",
      imageUrl: "https://static.vecteezy.com/system/resources/thumbnails/006/338/803/small/dimorphodon-dinosaur-on-smoke-background-photo.jpg"
    },
    {
      name: "Muffin",
      color: "Yellow",
      specialSkill: "Does not freak out if you haven’t seen his favorite movie (The Big Lebowski).",
      type: "cat",
      imageUrl: "https://wallpaperaccess.com/full/428176.jpg"
    },
    {
      name: "Salem",
      color: "Brown",
      specialSkill: "Proficient in air guitar",
      type: "dino",
      imageUrl: "https://media.istockphoto.com/photos/dinosaur-plush-doll-picture-id1348963418?b=1&k=20&m=1348963418&s=170667a&w=0&h=26S9YmcMIRAONgnj_bOhS0LH1MN_Ox_9fE53wfD3pFo="
    },
    {
      name: "Callie",
      color: "Blue",
      specialSkill: "Listens attentively to boring stories.",
      type: "dog",
      imageUrl: "https://images.unsplash.com/photo-1505628346881-b72b27e84530?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y3JhenklMjBkb2d8ZW58MHx8MHx8&w=1000&q=80"
    },
    {
      name: "Spooky",
      color: "Black",
      specialSkill: "Uses litter box at appropriate hours.",
      type: "cat",
      imageUrl: "https://wallpaperaccess.com/full/428168.jpg"
    },
    {
      name: "Miss kitty",
      color: "Red",
      specialSkill: "Owns a Nintendo Power Glove.",
      type: "dino",
      imageUrl: "https://cdn.pixabay.com/photo/2021/02/08/16/03/dinosaur-5995333__340.png"
    },
    {
      name: "Snuggles",
      color: "Orange",
      specialSkill: "Is comfortable with jokes about his receding hairline.",
      type: "cat",
      imageUrl: "https://wallpaperaccess.com/full/428160.jpg"
    },
    {
      name: "Buddy",
      color: "Red",
      specialSkill: "Enjoys fine wine.",
      type: "dog",
      imageUrl: "http://1.bp.blogspot.com/-VjM0CmtN-vU/T7YX-LXa09I/AAAAAAAADA0/Vt1oGWEG0lw/s1600/sheepdog+border+collie+shakes+off+water+funny+picture+photo+pulling+faces+raspberry+tongue.jpg"
    },
    {
      name: "George",
      color: "Brown",
      specialSkill: "Participates in karaoke but does not force others to go out to karaoke.",
      type: "dog",
      imageUrl: "https://images.unsplash.com/photo-1541848156497-67cadcfbc7de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y3JhenklMjBkb2d8ZW58MHx8MHx8&w=1000&q=80"
    },
    {
      name: "Salem",
      color: "Red",
      specialSkill: "Knows the words to 4 rap songs.",
      type: "cat",
      imageUrl: "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    },
    {
      name: "Bubba",
      color: "Yellow",
      specialSkill: "Cleans himself.",
      type: "dog",
      imageUrl: "https://www.thetrendywhippet.co.uk/wp-content/uploads/2016/11/IMG_1651-600x400.jpg"
    },
    {
      name: "Chloe",
      color: "Green",
      specialSkill: "Admits he is wrong",
      type: "dino",
      imageUrl: "https://assets.creationmuseum.org/img/pages/1703-DinoDen-TwoCard.jpg"
    },
    {
      name: "Nala",
      color: "Purple",
      specialSkill: "Dances when he has to.",
      type: "cat",
      imageUrl: "https://tailandfur.com/wp-content/uploads/2016/03/40-Scary-and-Funny-Cat-Pictures-8.jpg"
    },
    {
      name: "Oscar",
      color: "Green",
      specialSkill: "Gives hugs with appropriate pressure and for the right length of time.",
      type: "cat",
      imageUrl: "http://img.izismile.com/img/img2/20090219/cats_02.jpg"
    },
    {
      name: "Lucy",
      color: "Red",
      specialSkill: "Doesn’t get weirded out by the word “moist.”",
      type: "dino",
      imageUrl: "https://png.pngitem.com/pimgs/s/157-1578723_transparent-cute-dinosaur-clipart-cute-dinosaur-cartoon-png.png"
    }
  ];

  //Utility function
  const renderToDom = (divId, textToRender) => {
    const selectedElement = document.querySelector(divId);
    selectedElement.innerHTML = textToRender;
  };

  const createPetModal = () => {
    const domString = `
      <!-- Button trigger modal -->
      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#add-pet">
      Add Pet
      </button>
      <!-- Modal -->
      <div class="modal fade" id="add-pet" tabindex="-1" aria-labelledby="add-pet" aria-hidden="true">
        <div class="modal-dialog modal-fullscreen-md-down">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Add Pet Details</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body" id="modal-body">
            <form>
            <div class="form-floating mb-3">
              <input class="form-control form-control-lg" type="text" placeholder="name" id="name" aria-label="name" required>
              <label for="name">Pet Name</label>
            </div>
        
            <div class="form-floating mb-3">
              <input class="form-control form-control-lg" type="text" placeholder="color" id="color" aria-label="color" required>
              <label for="color">Color</label>
            </div>
        
            <div class="form-floating mb-3">
             <input class="form-control form-control-lg" type="text" placeholder="specialSkill" id="specialSkill" aria-label="specialSkill" required>
             <label for="specialSkill">Special Skill</label>
            </div>

            <div class="form-floating mb-3">
             <input class="form-control form-control-lg" type="text" placeholder="imageUrl" id="imageUrl" aria-label="imageUrl" required>
             <label for="imageUrl">Image URL</label>
            </div>

            <div class="form-floating mb-3">
              <select class="form-select form-control-lg" id="type" aria-label="type" required>
                <option value="">Select a type</option>
                <option value="dog">Dog</option>
                <option value="cat">Cat</option>
                <option value="dino">Dino</option>
              </select>
              <label for="type">Type</label>
            </div> 
        
            <button 
              type="submit" 
              class="btn btn-success" 
            >
              Submit
            </button>
          </form>
            </div>
          </div>
        </div>
      </div>
    `;
    renderToDom('#createPetContainer', domString);
  };
  
  const pet = document.querySelector("#pet");   //bubbling=adding an event listener to a container
const filterButtons = () => {
  let domString=`
  <div class="d-flex flex-wrap justify-content-between my-3">
    <button id="cat-btn" class="btn btn-primary" type="button">cat</button>
    <button id="dog-btn" class="btn btn-primary" type="button">dog</button>
    <button id="dino-btn" class="btn btn-primary" type="button">dino</button>
    <button id="clear-btn" class="btn btn-primary" type="button">all</button>
  </div>
  `;
renderToDom('#filterContainer', domString); 
}

//Card on DOM

const cardsOnDom = (array) => {
  let domString = '';
  for (const indPet of array) {
    domString += `
    <div class="card" text-center">
    <header><h5 class="card-title">${indPet.name}</h5></header>
    <img src="${indPet.imageUrl}" class="card-img-top" alt="pet image">
    <div class="card-body">
      <p class="pet-color">${indPet.color}</p>
      <p class="special-skill">${indPet.specialSkill}</p>
      </div> <div>
      <button class="btn btn-danger" id="delete--${indPet.name}">Delete</button>
    </div>
      <div class="card-footer footer-for-${indPet.type}">${indPet.type}
      </div>
  </div>`;
    }
 renderToDom('#petContainer',domString);
 }

const eventListeners = () => {
  // Bootstrap for grabbing modal so can manually open and close
  const formModal = new bootstrap.Modal(document.querySelector('#add-pet'));
  //Filter buttons
 //selecting element on DOM
 document.querySelector('#filterContainer').addEventListener('click', (e) => {
  // ***filter on category (either use .filter or a loop)***
  // rerender DOM with new array (use the cardsOnDom function) 
  // console.log(e);
  if (e.target.id === "clear-btn") {
    cardsOnDom(pets);
  } else if (e.target.id === 'cat-btn') {
      // console.log('clicked the cats button', e.target.id); event.target(what was clicked).id 
    cardsOnDom(pets.filter((animal) => animal.type=== 'cat'));
  } else if (e.target.id === "dog-btn") {
    // console.log('clicked the cats button', e.target.id);
  cardsOnDom(pets.filter((animal) => animal.type==='dog'));
} else if (e.target.id === "dino-btn") {
  // console.log('clicked the cats button', e.target.id);
cardsOnDom(pets.filter((animal) => animal.type==='dino'));
   }
});

document.querySelector('#petContainer').addEventListener('click', (e) => {
  // check to make sure e.target.id is not empty
  if (e.target.id) {
    // get the name off the button ID
    const [method, name] = e.target.id.split("--");
    // find the index of the object in the array
    const index = pets.findIndex ((animal)=> animal.name === name);

    // delete: this will find the index of item in array and use .splice method
    // if 2 pets have the same name, this will delete the first one in the array
    if (e.target.id.includes('delete')) { //checks to see if delete id matches before using splice method
      pets.splice(index, 1);   //uses splice method to delete index [0], and only 1 delete count
    //renders the array minus the deleted card back on the DOM
      cardsOnDom(pets);  //renders cards back on the DOM
    }
  }
});

  // FORM SUBMIT
  const form = document.querySelector('form');
  form.addEventListener('submit', (e) => {
    e.preventDefault(); // this goes in EVERY form submit to prevent page reload
    
    const newPetObj = {                                 //creates a new obect from the form inputs
      name: document.querySelector('#name').value,
      color: document.querySelector('#color').value,
      specialSkill: document.querySelector('#specialSkill').value,
      type: document.querySelector('#type').value,
      imageUrl: document.querySelector('#imageUrl').value,
    };

    // push that object to the data array
    pets.push(newPetObj);
    cardsOnDom(pets);
    formModal.hide()
    form.reset();
  });
};

 const startApp = ()=> {
   createPetModal();
   filterButtons(); 
   cardsOnDom(pets);
   eventListeners();
 };

 //starts app to use funtions above^^
 startApp();
