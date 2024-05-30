let foody = [];
let prices = [];
let amount = [];

let deliveryCost = 2.99;

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
        let food = foody[i];
        foodRender.innerHTML += 
        `<div class="shoppingCartFilledBasket">
            <div class="filledBasketItem">
                <h2 class="number">${amount[i]}</h2>
                <h2 class="dishItem">${food}</h2>
                <p class="showPrice">${(prices[i] * amount[i]).toFixed(2)}€</p>
            </div>
            <div class="filledBasketCounter">
                <img class="itemCount" src="./img/icons/minus.svg" alt="Minus" onclick="decreaseAmount(${i})" />
                <p>${amount[i]}</p>
                <img class="itemCount" src="./img/icons/plus.svg" alt="Plus" onclick="increaseAmount(${i})" />
            </div>
        </div>`;
    }
}

function renderPrice() {
    let priceRender = document.getElementById('calculation-container');
    let subtotal = 0;
    priceRender.innerHTML = '';
    for (let i = 0; i < prices.length; i++) {
        subtotal += prices[i] * amount[i];
    }

    let total = subtotal + deliveryCost;

    priceRender.innerHTML += `
        <div class="calculationContainer">
            <div class="priceList">
                <p>Zwischensumme</p>
                <p>${subtotal.toFixed(2)}€</p>
            </div>
            <div class="priceList">
                <p>Lieferkosten</p>
                <p>${deliveryCost.toFixed(2)}€</p>
            </div>
            <div class="priceList">
                <p>Gesamt</p>
                <p>${total.toFixed(2)}€</p>
            </div>
        </div>
        <div class="button-pay">
        <button id="btn-pay" class="btnPay" onclick="shipping()">Bezahlen</button>
        </div>
    `;
}

function shipping() {
    alert("Ihre Bestellung wurde weitergeleitet. Klicken Sie auf 'OK' um die Bestellung zu bestätigen.")

    let confirmation = document.getElementById('cartSection');
    confirmation.classList.add('d-flex');

    let deleteContainer = document.getElementById('shoppingCart');
    deleteContainer.classList.add('d-none')


}

function noDeliveryCost() {
    deliveryCost = 0;
    renderPrice();
}

function addDeliveryCost() {
    deliveryCost = 2.99;
    renderPrice();
}

function renderPizza() {
    let categoryPizza = document.getElementById('sectionPizza');
    categoryPizza.innerHTML = ''; 

    let pizzas = dish['pizza'];

    for (let i = 0; i < pizzas.length; i++) {
        let pizza = pizzas[i];
        categoryPizza.innerHTML += `
        <div class="content-shoppingCart" id="shoppingDish">
            <div class="ingredients-container">
                <h3 id="pizzaName${i}">${pizza['name']}</h3>
                <p>${pizza['ingredients']}</p>
                <h3 id="pizzaPrice${i}">${pizza['price'].toFixed(2)}€</h3>
            </div>
            <div class="add-container">
                <img src="./img/icons/plus.svg" alt="Add Button" onclick="addToDish('pizza', ${i})" class="addBtn" id="addButton">
            </div>
        </div>
        `;
    }
}

function renderPasta() {
    let categoryPasta = document.getElementById('sectionPasta');
    categoryPasta.innerHTML = ''; 

    let pastas = dish['pasta'];

    for (let i = 0; i < pastas.length; i++) {
        let pasta = pastas[i];
        categoryPasta.innerHTML += `
        <div class="content-shoppingCart">
            <div class="ingredients-container">
                <h3 id="pastaName${i}">${pasta['name']}</h3>
                <p>${pasta['ingredients']}</p>
                <h3 id="pastaPrice${i}">${pasta['price'].toFixed(2)}€</h3>
            </div>
            <div class="add-container">
                <img src="./img/icons/plus.svg" alt="Add Button" onclick="addToDish('pasta', ${i})" class="addBtn">
            </div>
        </div>
        `;
    }
}

function renderDessert() {
    let categoryDessert = document.getElementById('sectionDessert');
    categoryDessert.innerHTML = ''; 

    let desserts = dish['dessert'];

    for (let i = 0; i < desserts.length; i++) {
        let dessert = desserts[i];
        categoryDessert.innerHTML += `
        <div class="content-shoppingCart">
            <div class="ingredients-container">
                <h3 id="dessertName${i}">${dessert['name']}</h3>
                <p>${dessert['ingredients']}</p>
                <h3 id="dessertPrice${i}">${dessert['price'].toFixed(2)}€</h3>
            </div>
            <div class="add-container">
                <img src="./img/icons/plus.svg" alt="Add Button" onclick="addToDish('dessert', ${i})" class="addBtn">
            </div>
        </div>
        `;
    }
}

function renderShoppingCart() {
    let contentCart = document.getElementById('shoppingCart');
    contentCart.innerHTML = '';
    contentCart.innerHTML += cartTemplate();
}

function cartTemplate() {
    return `
    <div class="cart-section" id="cartSection">
        <img class="icon-cart" src="./img/icons/bag.svg" alt="Shopping Bag">
        <h3>Fülle deinen Warenkorb</h3>
        <p class="descriptionCart">Füge einige leckere Gerichte aus der Speisekarte hinzu und bestelle dein Essen.</p>
    </div>
    <div id="show-basket">
    <div id="filledBasket" class="filled-basket"></div>
    <div id="calculation-container"></div>
    </div>
    `;
}

function choice() {
    let yes = document.getElementById('btnPay');
    let basketCart = document.getElementById('filledBasket')

    if (yes && basketCart) {
        yes.addEventListener('click', function() {
            basketCart.classList.remove('d-none');
        }, { once: true });
    }
}

function addToDish(category, index) {
    choice();
    let selectedDish = dish[category][index];
    let dishName = selectedDish.name;
    let dishPrice = selectedDish.price;

    let existingIndex = foody.indexOf(dishName);

    if (existingIndex > -1) {
        amount[existingIndex] += 1;
    } else {
        foody.push(dishName);
        prices.push(dishPrice);
        amount.push(1);
    }

    renderFood();
    renderPrice();
}

function increaseAmount(index) {
    amount[index] += 1;
    renderFood();
    renderPrice();
}

function decreaseAmount(index) {
    if (amount[index] > 1) {
        amount[index] -= 1;
    } else {
        // Remove item if amount is 1
        foody.splice(index, 1);
        prices.splice(index, 1);
        amount.splice(index, 1);
    }
    renderFood();
    renderPrice();
}
