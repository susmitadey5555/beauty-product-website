let cartCount = 0;

function addToCart() {
  cartCount++;
  document.getElementById("cart-count").innerText = cartCount;
}

function scrollToProducts() {
  document.getElementById("products").scrollIntoView({ behavior: "smooth" });
}

function toggleProduct(checkbox) {
  if (checkbox.checked) {
    checkbox.parentElement.style.border = "2px solid #ff69b4";
  } else {
    checkbox.parentElement.style.border = "1px solid #eee";
  }
}
