window.addEventListener('DOMContentLoaded', navigator, false)
window.addEventListener('hashchange', navigator, false)
const container = document.getElementById("root");
const homeLink = document.getElementById("homeTextLink");
const projectLink = document.getElementById("projectsTextLink")
const contactLink = document.getElementById("contactTextLink")

const createProjectCard = (name, father) => {
  const projectCard = document.createElement('div')
    projectCard.classList.add("project__card")

  const project = PROJECTS.find(project => { 
      if (project.name == name) {

      const cardImageLink = document.createElement('a')
          cardImageLink.classList.add("card__image-link")
          cardImageLink.setAttribute('href', `${project.liveUrl}`)
          cardImageLink.setAttribute('target', '_blank')
      
      const image = document.createElement('img')
            image.classList.add('card__img')
            image.setAttribute('src', `${project.img}`)
            image.setAttribute('alt', `${project.name}`)
      
      const cardInformation = document.createElement('div')
            cardInformation.classList.add('card__information')
      
      const cardTitle = document.createElement('h3')
            cardTitle.classList.add('card__title')
      
      const cardTitleText = document.createTextNode(project.name)
      
      const informationGithubLink = document.createElement('a')
            informationGithubLink.classList.add('informaion__github-link')
            informationGithubLink.setAttribute('href', `${project.githubUrl}`)
            informationGithubLink.setAttribute('target', '_blank')

      const SVG_NS = 'http://www.w3.org/2000/svg';
      const svg = document.createElementNS(SVG_NS, 'svg')
        svg.classList.add('github__logo')
        svg.setAttributeNS(null, "viewBox", "0 0 16 16")

        const path = document.createElementNS(SVG_NS, 'path')
        path.setAttributeNS(null, "d", "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z")
    
    svg.appendChild(path)
    informationGithubLink.appendChild(svg)

    cardTitle.appendChild(cardTitleText);
    cardInformation.appendChild(cardTitle);

    cardInformation.appendChild(informationGithubLink)
        
    cardImageLink.appendChild(image);

    projectCard.appendChild(cardImageLink);
    projectCard.appendChild(cardInformation);
    }
  }) 
    father.appendChild(projectCard)
    return projectCard
}

const favoritesProjects = (project1, project2, project3) => {
    createProjectCard(project1, topProjects)
    createProjectCard(project2, topProjects)
    createProjectCard(project3, topProjects)
}
const allProjects = () => {
    PROJECTS.map(project => {
        if (project.finished == true) {
          createProjectCard(project.name, projectsContainer) 
        }
    })
}
const PATHS = {
    home : {
        name : "home",
        content : `
        <header class="header__information">
          <div class="header__circles">
              <div class="circle__one"></div>
              <div class="circle__one circle__one--purple"></div>
          </div>
          <div class="text-header">
            <div class="header__img-container">
                <img src="./src/img/profile.png" alt="Francisco Gutierrez">
            </div>
            <div class="header__title-container">
              <h1>Hey, I'm <span>Francisco Gutierrez</span> & I'm a FrontEnd Developer.</h1>
            </div>
          </div>
          <div class="nav__buttoms">
              <a class="button primary-button" href="#contact">
                <p> Contact me </p>
              </a>
              <a class="button secundary--button" href="#projects"><p>View my Projects</p></a> 
          </div>
        </header> 

        <section class="projects">
        <h2 class="projects__title">My favorites Projects.</h2>

        <div class="cards__projects" id="topProjects">
             
        </div>

        <a class="button primary-button" href="#projects"><p> See the all Projects </p></a> 
        </section> 
        
        <section class="contact">
        <div class="header__circles">
          <div class="circle__one"></div>
          <div class="circle__one circle__one--purple"></div>
        </div>
          <div class="wave">
            <h1 class="contact__title">Contact</h1>
            <div class="contact__information-section">
              <!--Formulario con input : nombre, contenido y title, boton enviar formulario
              https://www.youtube.com/watch?v=qtH8PLuy1Ck
              -->
              <!-- TODO adding form -->
              <!-- <form class="form" id="form" action="https://formspree.io" method="POST">
                    <h3 class="form__title">Send me a message</h3>
                    <label class="form__label label__name" for="name">name</label>
                    <input class="form__input input__name" type="text" name="name" for="name" id="name" placeholder="Your name" required>
                    <label class="form__label label__email" for="email">Email</label>
                    <input class="form__input input__email" type="email" name="email" for="email" id="email" placeholder="email here" required type="text">
                    <label class="form__label label__message" for="message">Message</label>
                    <textarea class="form__textarea" required id="message" name="message" cols="30" rows="10"></textarea>
                    <button class="form__button button primary-button" type="submit">Send message</button>
        
                  </form> -->
              <!--Social Links-->
              <div class="information__container">
                <h1>Francisco Gutierrez<h1>
                <div class="social__networks">
                  <a href="https://www.linkedin.com/in/francisco-gutierrezsalazar/" target="_blank" class="icon">
                    <svg class="icon__svg" viewBox="0 0 24 24">
                      <path class="icon__path" d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                    </svg>
                  </a>
                  <a href="https://github.com/GutierrezFrancisco" target="_blank" class="icon">
                    <svg class="icon__svg" viewBox="0 0 16 16">
                      <path class="icon__path" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                  </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        ` 
    },
    projects : {
        name : "projects",
        content : `
        <section class="projects">
        <h2 class="projects__title">My Projects.</h2> 
        <h2>
        Hi there I am a new Junior Web Developer and QA Tester who previously was working in the human resource sector, was nominated with an award on the united nation representing my college at UCAB. Now looking for a new are in tech.
        </h2>
    <div class="cards__projects" id="projectsContainer">
        
    </div>

</section> 
        `
    },
    contact : {
    name: "contact",
    content:`           
 <section class="contact">
            <div class="header__circles">
              <div class="circle__one"></div>
              <div class="circle__one circle__one--purple"></div>
          </div>
            <h2 class="contact__title">Contact</h2>
            <div class="contact__information-section">
              <!--Formulario con input : nombre, contenido y title, boton enviar formulario
              https://www.youtube.com/watch?v=qtH8PLuy1Ck
              -->
              <!--Imager mia con la redes sociales abajo y el correo-->
              <div class="information__container">
                <img class="information__image" src="./src/img/profile.png" alt="Francisco Gutierrez">
                <div class="social__networks">

                  <a href="https://www.linkedin.com/in/francisco-gutierrezsalazar/" target="_blank" class="icon">
                    <svg class="icon__svg" viewBox="0 0 24 24">
                      <path class="icon__path" d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                    </svg>
                  </a>
                  <a href="https://github.com/GutierrezFrancisco/marketing-website" target="_blank" class="icon">
                    <svg class="icon__svg" viewBox="0 0 16 16">
                      <path class="icon__path" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                  </svg>
                  </a>
                </div>
              </div>
            </div>
          </section>
  `
}
}

const formFuncionality = () => {
  const form = document.getElementById('form')
            form.addEventListener('submit', handleSubmit)

            async function handleSubmit(event){
              event.preventDefault()
              const form = new FormData(this)
              const response = await fetch(this.action, {
                method: this.method,
                body: form,
                headers : {
                  'Accept': 'application/json'
                }
              })
              if (response.ok) {
                this.reset()
                alert('Gracias por contacterme, te escribire pronto')
              }
            }
}

function navigator() {
  if (location.hash.startsWith('/')){
      contactLink.classList.remove("link__text--active")
      homeLink.classList.add("link__text--active")
      projectLink.classList.remove("link__text--active")
      container.innerHTML = PATHS.home.content;
      
      const topProjects = document.getElementById("topProjects")
      favoritesProjects('Marketing Website')

  }else if (location.hash.startsWith('#projects')) {
      contactLink.classList.remove("link__text--active")
      homeLink.classList.remove("link__text--active")
      projectLink.classList.add("link__text--active")
      container.innerHTML = PATHS.projects.content 

      const projectsContainer = document.getElementById("projectsContainer")
      allProjects()
    

  }else if (location.hash.startsWith('#contact')) {
      contactLink.classList.add("link__text--active")
      homeLink.classList.remove("link__text--active")
      projectLink.classList.remove("link__text--active")
      container.innerHTML = PATHS.contact.content 
      formFuncionality();

  }else{
    contactLink.classList.remove("link__text--active")
    homeLink.classList.add("link__text--active")
    projectLink.classList.remove("link__text--active")
    container.innerHTML = PATHS.home.content;

    const topProjects = document.getElementById("topProjects")
    favoritesProjects('Marketing Website')

  }
    document.body.scrollTop = 0 ;
    document.documentElement.scrollTop = 0 ;
}



