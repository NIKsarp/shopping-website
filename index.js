// --------------------------------------------
// createElement() Function Start

const createElement = (tagName, textContent) => {
  const element = document.createElement(tagName);

  if (textContent) {
    element.appendChild(document.createTextNode(textContent));
  }

  return element;
};

// createElement() Function End
// --------------------------------------------
// card

const createCard = () => {
  const container = document.getElementById(`cards`);

  // ELEMENTS
  const article = createElement(`article`);
  const figure = createElement(`figure`);
  const img = createElement(`img`);
  const div = createElement(`div`);
  const h2 = createElement(`h2`, `Buy this product`);
  const p = createElement(
    `p`,
    `Lorem ipsum dolor sit amet consectetur adipisicing.`
  );

  const div2 = createElement(`div`);
  const btn = createElement(`button`, `BUY`);
  const btn2 = createElement(`button`, `ADD TO CART`);

  // ATTRIBUTES
  img.src = `shoppping-bag.png`;
  img.alt = `shopping`;

  // CLASSNAME
  article.className = `card`;
  figure.className = `figure`;
  img.className = `card__img`;
  div.className = `card__body`;
  h2.className = `card__title`;
  p.className = `card__text`;
  div2.className = `card__btn-group`;
  btn.className = `card__btn`;
  btn2.className = `card__btn`;

  // APPEND ELEMENTS
  article.append(figure, div);
  figure.appendChild(img);

  div.append(h2, p, div2);
  div2.append(btn, btn2);

  container.appendChild(article);

  return article;
};

createCard();
createCard();
createCard();
createCard();
createCard();
// --------------------------------------------
