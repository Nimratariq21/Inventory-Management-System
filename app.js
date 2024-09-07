var products = [];
function addProduct() {
    var name = document.getElementById("productName").value;
    var quantity = parseInt(document.getElementById("productQuantity").value);
    var price = parseFloat(document.getElementById("productPrice").value);
    // Validation
    if (!name || quantity <= 0 || price <= 0) {
        alert("Please enter valid product details.");
        return;
    }
    products.push({ name: name, quantity: quantity, price: price });
    displayProducts();
    // Clear inputs
    document.getElementById("productName").value = '';
    document.getElementById("productQuantity").value = '';
    document.getElementById("productPrice").value = '';
}
function displayProducts() {
    var tbody = document.querySelector("tbody");
    tbody.innerHTML = ""; // Clear table rows
    products.forEach(function (product) {
        var row = document.createElement("tr");
        var nameCell = document.createElement("td");
        nameCell.textContent = product.name;
        row.appendChild(nameCell);
        var quantityCell = document.createElement("td");
        quantityCell.textContent = product.quantity.toString();
        row.appendChild(quantityCell);
        var priceCell = document.createElement("td");
        priceCell.textContent = product.price.toString();
        row.appendChild(priceCell);
        tbody.appendChild(row);
    });
}
