let cart = [];
let prices = [];
let names = [];
let categories = ['pizza', 'pasta', 'dessert'];

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
            <h3>${pizza['name']}</h3>
            <p>${pizza['ingredients']}</p>
            <h3>${pizza['price']}</h3>
          </div>
          <div class="add-container">
            <img src="./img/icons/plus.svg" alt="Add Button" onclick="addDish()" class="addBtn" id="addButton">
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
            <h3>${pasta['name']}</h3>
            <p>${pasta['ingredients']}</p>
            <h3>${pasta['price']}</h3>
          </div>
          <div class="add-container">
            <img src="./img/icons/plus.svg" alt="Add Button" onclick="addDish()" class="addBtn">
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

    <div id="cartFull">
    </div>
    `;
}

function addToDish () {
    let addNew = document.getElementById('shoppingDish');

    dish.push(shoppingDish.innerHTML);
}