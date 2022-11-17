// ITERATION 1

/* function updateSubtotal(product) {
  for (let i = 0; i < document.getElementsByClassName("product").length; i++) {
    console.log('Calculating subtotal, yey!');
    let price = document.querySelector(".product .price span").innerHTML;
    let quantity = document.querySelector(".input").value;
    console.log(`The price is ${price}`)
    console.log(`The quantity is ${quantity}`);
    console.log(price * quantity);
    let subTotal = price * quantity;
    document.querySelector(".product .subtotal span").innerHTML = subTotal;
  }
  //... your code goes here
} 
*/
// V - 01
function updateSubtotal(product) {
  //Traer los elementos del DOM
  const price = product.querySelector(".price span");
  const quantity = product.querySelector(".quantity input");

  //Extraer el valor del input
  const priceValue = parseFloat(price.innerText);
  const quantityValue = quantity.valueAsNumber;

  //Calcular estos valores
  const subtotalValue = priceValue * quantityValue;

  //Obtener elemento del DOM === subtotal
  const subTotal = product.querySelector(".subtotal span");

  // Settear la variable subTotal con un poquito de texto que equivale a la variable de subtotalValue
  subTotal.innerText = subtotalValue;

  //Retornamos el subtotalValue para poder usarlo correctamente en la función y poder reusarlo en nuestro código
  return subtotalValue;
}



function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test
  // ITERATION 2
  //... your code goes here
  
  // ITERATION 3
  //... your code goes here

  //VERSION DEL PROFE
  //Agarrar los elementos del DOM por CADA row
  const products = document.getElementsByClassName("product");

  // Declarar variable que vamos a usar para guardar el valor de cada iteración de los productos. Esta var inicialmente tiene un valor de 0.
  let totalValue = 0;

  // Iterar en base a cada elemento/producto y dentro del body de este buce vamos a actualisatr el valor de la variable totalValue y vamos a usar la funcion updateSubtotal para poder hacer el calculo

  for (let product of products) {
    totalValue += updateSubtotal(product);
  }
  //Darle display a el valor de este calculo iterado en el html, entonces apuntamos al elemento del dom que contiene ese TOTAL
  document.querySelector("#total-value span").innerText = totalValue;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  // Verificar que esta conectada la funcion post creacion del eventListener dentro del Window object
  console.log('The target in remove is:', target);

  //Usamos el parentNode para apuntar al ABUELO de row que contiene el evento especifico que estamos apuntando,casualmente el abuelo de este evento es el elemento TR con la clase product.
  const row = target.parentNode.parentNode;
  // Usamos el parentNode en la variable row para aprovechar los selectores de manipulacion del dom para eliminar el hiijo de parent.
  const parent = row.parentNode;

    // llamamos a parent con el metodo removeChild y le pasamos la variable row dentro del metodo
  parent.removeChild(row);

  // calculateAll() - vuelve a calcular los numeros para tener un resultado correcto una vez borremos el producto
  calculateAll();
}

// ITERATION 5

function createProduct() {
  //Parte 1
  const createRow = document.querySelector(".create-product");
  let newProdNameInput = createRow.querySelector("input");
  let newProdNameValue = newProdNameInput.value;
  let newProdPriceInput = createRow.querySelector("input[type='number']");
  let newProdPriceValue = Number(newProdPriceInput.valueAsNumber).toFixed(2);

  //Parte 2
  const newTableRow = document.createElement("tr");
  newTableRow.className = "product";
  newTableRow.innerHTML = `<td class="name">
      <span>${newProdNameValue}</span>
</td>
<td class="price">$<span>${newProdPriceValue}</span></td>
<td class="quantity">
  <input type="number" value="0" min="0" placeholder="Quantity" />
</td>
<td class="subtotal">$<span>0</span></td>
<td class="action">
  <button class="btn btn-remove">Remove</button>
</td>`;
  
  //Parte 3
  // Agarrar el parent de este row
  const parent = document.querySelector("#cart tbody");

  //Adjuntar (append) la variable newTableRow dentro de parent

  parent.appendChild(newTableRow);

  // Recibir logica de botones
  const removeBtn = newTableRow.querySelector(".btn-remove");
  removeBtn.addEventListener("click", removeProduct);

  // Limpiar los inputs una vez el usuario haya creado un producto
  newProdNameInput.value = "";
  newProdPriceInput.value = 0;
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  // Funcion para borrar productos
  const removeBtns = document.querySelectorAll(".btn-remove");
  for (let removeBtn of removeBtns) {
    removeBtn.addEventListener("click", removeProduct);
  }
  //... your code goes here

  // Dom para crear productos
  const createBtn = document.querySelector("#create");
  if (createBtn) {
    createBtn.addEventListener("click", createProduct);
  }
});
