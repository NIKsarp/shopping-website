const createElement = (tagName, className, textContent) => {
  const element = document.createElement(tagName);
  element.className = className;
  textContent && element.appendChild(document.createTextNode(textContent));
  return element;
};
// --------------------------------------------
// card
const createCard = () => {
  const card = createElement(`article`, `card`);
  const figure = createElement(`figure`, `figure`);
  const figureImg = createElement(`img`, `figure-img`);
  const cardBody = createElement(`div`, `card__body`);
  const cardTitle = createElement(`h2`, `card__title`, `Buy this product`);
  const cardText = createElement(
    `p`,
    `card__text`,
    `Lorem ipsum dolor sit amet consectetur adipisicing.`
  );
  const btnGroup = createElement(`div`, `btnGroup`);
  const btnBuy = createElement(`button`, "btn", `BUY`);
  const btnCart = createElement(`button`, "btn", `ADD TO CARD`);
  // --------------------------------------------
  card.append(figure, cardBody);
  figure.appendChild(figureImg);
  figureImg.src = `shoppping-bag.png`;
  figureImg.alt = `shopping`;
  cardBody.append(cardTitle, cardText, btnGroup);
  btnGroup.append(btnBuy, btnCart);
  const container = document.getElementById(`container`);
  container.appendChild(card);
  
  return card;
};
createCard();
createCard();
createCard();
createCard();
createCard();
// --------------------------------------------
