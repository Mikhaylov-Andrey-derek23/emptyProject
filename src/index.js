import examplImg  from './img/more.jpg';
import './style/main.scss';
console.log("Как интересно!", examplImg)

const heading = document.createElement("h1");
heading.textContent =  "Как итересно!!!!!!!!!";

class Game {
    name = "Morrowind"
}

const game = new Game()

const p = document.createElement('p')
p.textContent = `I like  ${game.name}`

const img = document.createElement('img');
img.setAttribute('src', examplImg);
img.setAttribute('width', 300);
img.style.display = "block";

const root = document.querySelector("#root")
root.append(p)
root.append(img);
root.append(heading)
