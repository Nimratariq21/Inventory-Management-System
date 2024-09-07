interface Product {
    name: string;
    quantity: number;
    price: number;
}

let products: Product[] = [];

function addProduct() {
    const name = (document.getElementById("productName") as HTMLInputElement).value;
    const quantity = parseInt((document.getElementById("productQuantity") as HTMLInputElement).value);
    const price = parseFloat((document.getElementById("productPrice") as HTMLInputElement).value);

    // Validation
    if (!name || quantity <= 0 || price <= 0) {
        alert("Please enter valid product details.");
        return;
    }

    products.push({ name, quantity, price });
    displayProducts();

    // Clear inputs
    (document.getElementById("productName") as HTMLInputElement).value = '';
    (document.getElementById("productQuantity") as HTMLInputElement).value = '';
    (document.getElementById("productPrice") as HTMLInputElement).value = '';
}

function displayProducts() {
    const tbody = document.querySelector("tbody")!;
    tbody.innerHTML = ""; // Clear table rows

    products.forEach(product => {
        const row = document.createElement("tr");

        const nameCell = document.createElement("td");
        nameCell.textContent = product.name;
        row.appendChild(nameCell);

        const quantityCell = document.createElement("td");
        quantityCell.textContent = product.quantity.toString();
        row.appendChild(quantityCell);

        const priceCell = document.createElement("td");
        priceCell.textContent = product.price.toString();
        row.appendChild(priceCell);

        tbody.appendChild(row);
    });
}
