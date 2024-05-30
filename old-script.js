let foody = [];
let prices = [];
let amount = [];
// let categories = ['pizza', 'pasta', 'dessert'];

let dish = {
    "pizza": [
      { "name": "Pizza Salami", "ingredients": "Salami, Mozarella, Basilikum", "price": 5.99 },
      { "name": "Pizza Tuna", "ingredients": "Thunfisch, Zwiebeln, Mozarella", "price": 7.99 },
      { "name": "Pizza Prosciutto e Rucola", "ingredients": "Schinken, Rucola, Mozarella", "price": 6.99 }
    ],
    "pasta": [
      { "name": "Pasta Carbonara", "ingredients": "Fusilli, Käse, Speck", "price": 9.99 },
      { "name": "Pasta Arrabiata", "ingredients": "Oliven, scharfe Soße, Zucchini", "price": 8.99 },
      { "name": "Pasta Anton", "ingredients": "Anton, Spaghetti, Schinken", "price": 10.99 }
    ],
    "dessert": [
      { "name": "Tiramisu", "ingredients": "Eis, Schokolade, Kaffee", "price": 4.99 },
      { "name": "Ben & Jerrys", "ingredients": "Schokodrops, Schokoladeneis, Vanilleeis", "price": 6.99 },
      { "name": "Eiskonfekt", "ingredients": "Schokolade, Vanilleeis, Konfekt", "price": 3.99 }
    ]
  };

function loadBody() {
    renderShoppingCart();
    cartTemplate();
    renderPizza();
    renderPasta();
    renderDessert();
    renderFood();
    renderPrice();
}

function renderFood() {
  let foodRender = document.getElementById('filledBasket');
  foodRender.innerHTML = '';
  for (let i = 0; i < foody.length; i++) {
    const food = foody[i];
    foodRender.innerHTML += 
    `<div class="shoppingCartFilledBasket">
    <div class="filledBasketItem">
      <h2 class="number">${amount[i]}</h2>
      <h2 class="dishItem">${food}</h2>
      <p class="showPrice">${prices[i]}</p>
    </div>
    <div class="filledBasketCounter">
      <img class="itemCount" src="./img/icons/minus.svg" alt="" />
      <p>X</p>
      <img class="itemCount" src="./img/icons/plus.svg" alt="" />
    </div>
  </div>`;
  }

}

function renderPrice() {
  let priceRender = document.getElementById('filledBasket');

  priceRender.innerHTML += `
    <div class="calculationContainer">
      <div class="priceList">
        <p>Zwischensumme</p>
        <p>X€</p>
      </div>
      <div class="priceList">
        <p>Lieferkosten</p>
        <p>X€</p>
      </div>
      <div class="priceList">
        <p>Gesamt</p>
        <p>X</p>
      </div>
    </div>
    <button class="btnPay">Bezahlen</button>
  `;
}



function renderPizza() {
    let categoryPizza = document.getElementById('sectionPizza');
    categoryPizza.innerHTML = ''; 

    const pizzas = dish['pizza'];

    for (let i = 0; i < pizzas.length; i++) {
        const pizza = pizzas[i];
        categoryPizza.innerHTML += `
        <div class="content-shoppingCart" id="shoppingDish">
          <div class="ingredients-container">
            <h3 id="pizzaName${i}">${pizza['name']}</h3>
            <p>${pizza['ingredients']}</p>
            <h3 id="pizzaPrice${i}">${pizza['price']}</h3>
          </div>
          <div class="add-container">
            <img src="./img/icons/plus.svg" alt="Add Button" onclick="addToDish(${i})" class="addBtn" id="addButton">
          </div>
        </div>
      `;
    }
}

function renderPasta() {
    let categoryPasta = document.getElementById('sectionPasta');
    categoryPasta.innerHTML = ''; 

    const pastas = dish['pasta'];

    for (let i = 0; i < pastas.length; i++) {
        const pasta = pastas[i];
        categoryPasta.innerHTML += `
        <div class="content-shoppingCart">
          <div class="ingredients-container">
            <h3 id="pastaName${i}">${pasta['name']}</h3>
            <p>${pasta['ingredients']}</p>
            <h3 id="pastaPrice${i}">${pasta['price']}</h3>
          </div>
          <div class="add-container">
            <img src="./img/icons/plus.svg" alt="Add Button" onclick="addToDish(${i})" class="addBtn">
          </div>
        </div>
      `;
    }
}

function renderDessert() {
  let categoryDessert = document.getElementById('sectionDessert');
  categoryDessert.innerHTML = ''; 

  const desserts = dish['dessert'];

  for (let i = 0; i < desserts.length; i++) {
      const dessert = desserts[i];
      categoryDessert.innerHTML += `
      <div class="content-shoppingCart">
        <div class="ingredients-container">
          <h3 id="dessertName${i}">${dessert['name']}</h3>
          <p>${dessert['ingredients']}</p>
          <h3 id="dessertPrice${i}">${dessert['price']}</h3>
        </div>
        <div class="add-container">
          <img src="./img/icons/plus.svg" alt="Add Button" onclick="addToDish(${i})" class="addBtn">
        </div>
      </div>
    `;
  }
}


// Load Shopping Cart 

function renderShoppingCart() {
    let contentCart = document.getElementById('shoppingCart');
    contentCart.innerHTML = '';

    contentCart.innerHTML += cartTemplate();

}

// Include HTML 

function cartTemplate() {
    return `
    <div class="cart-section" id="cartSection">
    <img class="icon-cart" src="./img/icons/bag.svg" alt="Shopping Bag">
        <h3>Fülle deinen Warenkorb</h3>
        <p class="descriptionCart"">Füge einige leckere Gerichte aus der Speisekarte hinzu und bestelle dein Essen.</p>
    </div>

    <div id="filledBasket" class="filled-basket"></div>
    
    </div>
    

    `;
}

function addToDish (i) {
    let pizzenNames = document.getElementById(`pizzaName${i}`);
    let pastasNames = document.getElementById(`pastaName${i}`)
    let dessertsNames = document.getElementById(`dessertName${i}`)

    let pizzenPrice = document.getElementById(`pizzaPrice${i}`);
    let pastasPrice = document.getElementById(`pastaPrice${i}`);
    let dessertsPrice = document.getElementById(`dessertPrice${i}`);

    let pizzenNamesText = pizzenNames.innerText;
    let pastaNamesText = pastasNames.innerText;
    let dessertsNamesText = dessertsNames.innerText;


    foody.push(pizzenNamesText);
    foody.push(pastaNamesText);
    foody.push(dessertsNamesText);

    renderFood();
    renderPrice();
    amount.push(1);
    
}