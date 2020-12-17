const directorsContainer = document.querySelector(".directors__container");

const directors = [
  {
    name: "Nikita Marks",
    position: "Founder & CEO",
    photo: "images/avatar-nikita.jpg",
    text: `“It always amazes me how much talent there is in every corner
    of the globe.”`,
  },
  {
    name: "Cristian Duncan",
    position: "Co-founder & COO",
    photo: "images/avatar-christian.jpg",
    text: `“Distributed teams required unique processes. You
    need to approach work in a new way.” `,
  },
  {
    name: "Cruz Hamer",
    position: "Co-founder & CTO",
    photo: "images/avatar-cruz.jpg",
    text: `“Technology is at the forefront of enabling distributed teams. That's where
    we come in.”`,
  },
  {
    name: "Drake Heaton",
    position: "Business Development Lead",
    photo: "images/avatar-drake.jpg",
    text: `“Hiring similar people from similar
    backgrounds is a surefire way to stunt innovation.”`,
  },
  {
    name: "Griffin Wise",
    position: "Lead Marketing",
    photo: "images/avatar-griffin.jpg",
    text: `“Unique perspectives shape unique products, which is what
    you need to survive these days.”`,
  },
  {
    name: " Aden Allan",
    position: "Head of Talent",
    photo: "images/avatar-aden.jpg",
    text: `“Empowered
    teams create truly amazing products. Set the north star and let them follow
    it.”`,
  },
];

function makeDirectorsMarkup(directors) {
  const html = directors
    .map((el, i) => {
      return `
      <div class="director">
      <div class="card__content">
        <input type="checkbox" name="" id="dir${i}" class="check" />
        <label class="director__label" for="dir${i}"></label>
        <div class="director__front">
          <div class="avatar director__avatar">
            <img src=${el.photo} alt="${el.name} avatar" />
          </div>
          <div class="director__publisher">
            <p class="name director__publisher--name">${el.name}</p>
            <p class="position director__publisher--position">
              ${el.position}
            </p>
          </div>
        </div>

        <div class="director__back">
          <div class="director__info">
            <p class="name director__info--name">${el.name}</p>
            <p class="director__info--text">
              ${el.text}
            </p>
            <div class="director__social">
              <a href="#" class="social__logo"
                ><img src="images/icon-linkedin.svg" alt="pinterest"
              /></a>
              <a href="#" class="social__logo"
                ><img src="images/icon-twitter.svg" alt="twitter"
              /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
        `;
    })
    .join("");

  directorsContainer.innerHTML = "";
  directorsContainer.insertAdjacentHTML("afterbegin", html);
}

makeDirectorsMarkup(directors);
