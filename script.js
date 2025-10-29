const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

const paragraph = document.createElement("p");
paragraph.style.color = 'red';
paragraph.textContent = "Hey I'm red!";
container.appendChild(paragraph);

const headingThree = document.createElement("h3");
headingThree.style.color = 'blue';
headingThree.textContent = "I'am a blue h3!";
container.appendChild(headingThree);

const pinkDiv = document.createElement("div");
pinkDiv.style.backgroundColor = 'pink';
pinkDiv.style.cssText = "background:pink; border: 2px black solid;"
const headingText = document.createElement('div');
headingText.textContent = "I'm in a div";
const paragraphText = document.createElement('p');
paragraphText.textContent = "ME TOO!";
pinkDiv.appendChild(headingText);
pinkDiv.appendChild(paragraphText);
container.appendChild(pinkDiv);
