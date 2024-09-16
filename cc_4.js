// Inventory Management System

// Task 1: Create an inventory array of product objects
let inventory = [
    {"name" : "Notebook",
        "price" : 8,
        "quantity" : 3000,
        "lowStockLevel" : 300,
    },
    {"name" : "Folder",
        "price" : 1,
        "quantity" : 5000,
        "lowStockLevel" : 200,
    },
    {"name" : "Pens",
        "price" : 5,
        "quantity" : 50,
        "lowStockLevel" : 500,
    },
    {"name" : "Pencils",
        "price" : 4,
        "quantity" : 5000,
        "lowStockLevel" : 400,
    },
    {"name" : "Backpack",
        "price" : 40,
        "quantity" : 20,
        "lowStockLevel" : 50,
    }
];

// Log this array into the console
console.log(inventory);

// Task 2: Create a function to display product details
function displayProductDetails () {
    for (let index = 0; index < inventory.length; index++) {
        if (inventory[index].quantity <= inventory[index].lowStockLevel) {
        console.log(`Low stock: ${inventory[index].name} with ${inventory[index].quantity} items left.`)
        }
        else {
        console.log(`In stock: ${inventory[index].name} with ${inventory[index].quantity} items left.`);
        };
    };
};
// call function
let runDisplay = displayProductDetails ();

// Task 3: Create a function to update product stock after sales
function updateStock (product, unitsSold) {
    // determine if there is enough stock
    if (unitsSold <= product.quantity) {
        product.quantity -= unitsSold;
    }
    else {
        return `Not enough stock.`;
    }
    // display stock status with return
    const productStatus = (product.quantity <= product.lowStockLevel) ? "Low Stock" : "In Stock";
    return `${product.name}: ${productStatus}`;
}
    
console.log(updateStock(inventory[3], 90));

// Task 4: Create a function to check low stock products
let lowStock = [];
inventory.forEach((item) => {
    if (item.quantity <= item.lowStockLevel) { //populating the vacant array so that it can be logged
        lowStock.push(`\n${item.name}`);
    };   
});
console.log(`Low stock: ${lowStock}`);

// Task 5: Create a function to calculate total inventory value
function calculateInventoryValue (inv) {
    let totals = [];
    for (let index = 0; index < inv.length; index++) {
        let total = inv[index].price * inv[index].quantity;
        totals.push(total); // populate empty totals array so it can be displayed
    }
    return totals;
};
console.log(calculateInventoryValue(inventory));

// Task 6: Create a function to process a sale
function processSale(units) {
    let prods = inventory.find((prod) => prod.name === "Backpack");
    updateStock(prods,units); // call updateStock to proccess the sale
    return inventory;
}
console.log(processSale(5));