let originalPrice = 0;
let discountedPrice = 0;
const validPromoCode = "Amal-Qtairi";
let promoCodeUses = 0; 

function showProductDetail(title, imageSrc, price, specs) {
    document.getElementById('product-grid').style.display = 'none';
    document.getElementById('product-detail').style.display = 'flex';
    document.getElementById('footer').style.display = 'none';
    document.getElementById('detail-title').textContent = title;
    document.getElementById('detail-image').src = imageSrc;
    document.getElementById('detail-price').textContent = `Price: $${price}`;
    originalPrice = price;
    discountedPrice = price;
    resetPromoCode();

    // Clear existing specs
    document.getElementById('screen').textContent = specs.Screen || "N/A";
    document.getElementById('cpu').textContent = specs.CPU || "N/A";
    document.getElementById('ram').textContent = specs.RAM || "N/A";
    document.getElementById('battery').textContent = specs.Battery || "N/A";
    document.getElementById('camera').textContent = specs.Camera || "N/A";
    document.getElementById('storage').textContent = specs.Storage || "N/A";
    document.getElementById('gpu').textContent = specs.GPU || "N/A";
    document.getElementById('powerSupply').textContent = specs.PowerSupply || "N/A";
    document.getElementById('cooler').textContent = specs.Cooler || "N/A";
    document.getElementById('case').textContent = specs.Case || "N/A";
}



function applyDiscount() {
    const promoCode = document.getElementById("promoCode").value.trim();
    const finalPriceElement = document.getElementById("finalPrice");
    const priceElement = document.getElementById("detail-price");

    if (promoCode === validPromoCode) {
        if (promoCodeUses < 3) {
            promoCodeUses++;  // Increment the promo code use count
            discountedPrice = originalPrice * 0.5; // Apply 50% discount
            priceElement.classList.add("strikethrough"); // Apply strike-through to original price
            finalPriceElement.textContent = `Discounted Price: $${discountedPrice.toFixed(2)}`;
        } else {
            finalPriceElement.textContent = "Promo code limit reached!";
        }
    } else {
        finalPriceElement.textContent = "Invalid promo code!";
    }
}

function buyNow() {
    if (discountedPrice < originalPrice) {
        alert(`Thank you for your purchase! You paid $${discountedPrice.toFixed(2)}`);
    } else {
        alert("You have missed the opportunity to use a promo code. Find one to buy more.");
    }
}

function closeProductDetail() {
    document.getElementById('product-grid').style.display = 'grid';
    document.getElementById('product-detail').style.display = 'none';
    document.getElementById('footer').style.display = 'block';  // Show footer when back to products
}

function resetPromoCode() {
    // Reset promo code input and any previous error messages
    document.getElementById("promoCode").value = "";
    document.getElementById("finalPrice").textContent = "";  // Clear the final price text
    document.getElementById("detail-price").classList.remove("strikethrough");  // Remove the strike-through
}
