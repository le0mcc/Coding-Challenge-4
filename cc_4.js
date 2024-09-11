// Inventory Management System

// Task 1: Create an inventory array of product objects
let inventory = [
    {"name" : "notebook",
        "price" : 8,
        "quantity" : 3000,
        "lowStockLevel" : 300,
    },
    {"name" : "folder",
        "price" : 1,
        "quantity" : 5000,
        "lowStockLevel" : 200,
    },
    {"name" : "pens",
        "price" : 5,
        "quantity" : 6000,
        "lowStockLevel" : 500,
    },
    {"name" : "pencils",
        "price" : 4,
        "quantity" : 5000,
        "lowStockLevel" : 400,
    },
    {"name" : "backpack",
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
        console.log(`Low stock: ${inventory[index].name} with${inventory[index].quantity} items left.`)
        }
        else {
        console.log(`In stock: ${inventory[index].name} with ${inventory[index].quantity} items left.`)
        }
    }
}

let runCode = displayProductDetails ()
