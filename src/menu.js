export function loadMenu() {
    const content = document.querySelector("#content");
    content.innerHTML = `
      <div class="contentBox">
        <div class="card">
            <h4>Burger</h4>
            <p class="pMenu">Juicy grilled beef patty with fresh lettuce and cheese.</p>
            <p class="pMenu">Price: ₹120</p>
        </div>
        <div class="card">
            <h4>French fries</h4>
            <p class="pMenu">Crispy golden fries seasoned with salt and herbs.</p>
            <p class="pMenu">Price: ₹60</p>
        </div>
        <div class="card">
            <h4>Onion Capsicum Pizza</h4>
            <p class="pMenu">Delicious pizza topped with fresh onions and green capsicum.</p>
            <p class="pMenu">Price: ₹250</p>
        </div>
        <div class="card">
            <h4>Cold drink</h4>
            <p class="pMenu">Refreshing chilled beverage to cool you down instantly.</p>
            <p class="pMenu">Price: ₹40</p>
        </div>
        <div class="card">
            <h4>Chicken Wings</h4>
            <p class="pMenu">Spicy and crispy chicken wings, perfect for snack lovers.</p>
            <p class="pMenu">Price: ₹180</p>
        </div>
        <div class="card">
            <h4>Bread crumbs</h4>
            <p class="pMenu">Crunchy bread crumbs used for coating or adding texture.</p>
            <p class="pMenu">Price: ₹30</p>
        </div>
      </div>
    `;
  }
  