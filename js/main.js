//? PRE-ENTREGA 2

//! CARGA DATOS PARA REGISTRO -------------------------*
alert("Por favor, regístrate para comenzar a comprar.");

let username = "";
let password = "";

while (username === ""){
    username = prompt("Ingresa un nombre de usuario: ");
}

while (password === "" || password.length<8 || password.length>14){
    password = prompt("Ingresa una contraseña (entre 8 y 14 caracteres): ");
}

alert("Registro exitoso.\nTe damos la bienvenida a nuestra tienda " + username);

console.log("Guarda esta información en un lugar seguro para tus futuras compras.\nNombre de usuario: " + username + "\n" + "Contraseña: " + password) + "\n";

//! FILTRAR BÚSQUEDA Y STOCK DE PRODUCTO (FILTER/SOME) -------*

const searchProducts = [
    {
        name: "joggers",
        price: 25
    },
    {
        name: "joggers drill",
        price: 35
    },
    {
        name: "joggers french-terry",
        price: 20
    },
    {
        name: "polos camisero",
        price: 25
    },
    {
        name: "polos",
        price: 22
    },
    {
        name: "shorts",
        price: 13
    },
    {
        name: "vinchas",
        price: 5
    },
    {
        name: "peinetas",
        price: 7
    },
    {
        name: "medias",
        price: 10
    },
    {
        name: "toallas medianas",
        price: 18
    },
    {
        name: "toallas grandes",
        price: 23
    },
];

let chosenProd = prompt("Ingrese el producto a buscar: ");
console.log (searchProducts.filter((elem) => elem.name.includes(chosenProd)));

let stockProd = prompt("Ingrese el producto a consultar: ");
console.log (searchProducts.some((elem) => elem.name == stockProd));

//! REALIZANDO COMPRA DE LOS PRODUCTOS  --------------------*
//LISTA DE PRODUCTOS
    let products = [
        {
            name: "joggers",
            price: 35
        },
        { 
            name: "polos",
            price: 25
        },
        { 
            name: "vinchas",
            price: 5
        },
        { 
            name: "peinetas",
            price: 7
        },
        { 
            name: "medias packx3",
            price: 10
        },
        { 
            name: "toallas",
            price: 18
        },
    ];

  //MOSTRAR LISTA
    function showProducts() {
        console.log("--- LISTA DE PRODUCTOS ---");
        for (let i = 0; i < products.length; i++) {
        console.log(`${i + 1}. ${products[i].name} - S/ ${products[i].price}`);
        }
    }

  //COMPRAR PRODUCTOS
    function buyProducts() {
        let cart = [];
        let option;
    
        while (option !== "0") {
        showProducts();
        console.log("0. Terminar compra");
        option = prompt("Selecciona un producto (un número) para comprar (0 para terminar)");
    
        if (option !== "0") {
            let productIndex = Number(option) - 1;
    
            if (productIndex >= 0 && productIndex < products.length) {
            let quantity = Number(prompt(`¿Cuántos ${products[productIndex].name} quieres comprar?`));
            let product = {
                ...products[productIndex],
                quantity: quantity
            };
            cart.push(product);
            alert(`Producto añadido al carrito: ${product.name}`);
            console.log(`Producto añadido al carrito: ${product.name}`);
    
            alert(`La cantidad que compraste: ${product.quantity}`);
            console.log(`La cantidad que compraste: ${product.quantity}`);
            } else {
            alert("Esa opción no es válida. Inténtalo nuevamente.")
            }
        }
        }

        alert("NOTA: Los productos como las medias u otros similares, el precio unitario equivale a un pack x 3")
        console.log("NOTA: Los productos como las medias u otros similares, el precio unitario equivale a un pack x 3")

        console.log("--- RESUMEN DE COMPRA ---");
        let total = 0;

        for (let i = 0; i < cart.length; i++) {
        let product = cart[i];
        alert(`${product.quantity} ${product.name} - S/ ${product.price} (precio unitario)`);
        console.log(`${product.quantity} ${product.name} - S/ ${product.price} (precio unitario)`);
        total += product.price * product.quantity;
        }

        let igv = total * 0.18;
        let subtotal = total - igv;

        alert(`Subtotal: S/ ${subtotal.toFixed(2)}`);
        console.log(`Subtotal: S/ ${subtotal.toFixed(2)}`);
        alert(`IGV (18%): S/ ${igv.toFixed(2)}`);
        console.log(`IGV (18%): S/ ${igv.toFixed(2)}`);
        alert(`Total a pagar : S/ ${total.toFixed(2)}`);
        console.log(`-------------------\nTotal a pagar : S/ ${total.toFixed(2)}`);
    }

  //EJECUTAR COMPRA DE PRODUCTOS
    buyProducts();

//! ESCOGE COLOR Y TALLA DEL PRODUCTO -----------------*

let colour = prompt("Elige un color (negro, azul, guinda y blanco)");

let size = prompt("Ahora, elige una talla (S, M, L, XL)");

switch (colour) {
    case "negro":
        alert(`Has elegido el color negro en talla ${size}`);
        console.log(`Has elegido el color negro en talla ${size}`);
        break;
    case "azul":
        alert(`Has elegido el color azul en talla ${size}`);
        console.log(`Has elegido el color azul en talla ${size}`);
        break;
    case "guinda":
        alert(`Has elegido el color guinda en talla ${size}`);
        console.log(`Has elegido el color guinda en talla ${size}`);
        break;
    case "blanco":
        alert(`Has elegido el color blanco en talla ${size}`);
        console.log(`Has elegido el color blanco en talla ${size}`);
        break;
    default:
        alert("Color no válido");
}
