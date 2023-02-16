// // for first card
// document.getElementById("first-card").addEventListener("click", function () {
//   // console.log(for test your code)

//   //step-1: get the data from html ,using ID
//   const productName = document.getElementById("first-name").innerText;
//   const productPrice = document.getElementById("first-price").innerText;
//   const productQuantity = document.getElementById("first-quantity").innerText;

//   // multiply
//   const priceTotal = parseInt(productPrice) * parseInt(productQuantity);

//   //   step-2: show the data (normal way)
//   //   const container = document.getElementById("table-container");

//   //   //   create a element in html
//   //   const tr = document.createElement("tr");
//   //   tr.innerHTML = `
//   //   <td>${1}</td>
//   //   <td>${productName}</td>
//   //   <td>${productPrice}</td>
//   //   <td>${productQuantity}</td>
//   //   <td>${priceTotal}</td>
//   //   `;
//   //   //   add a element in html
//   //   container.appendChild(tr);

//   displayData(productName, productPrice, productQuantity, priceTotal);
// });
//

//---------------------------------------------
// for first card
let serial = 0;
document.getElementById("first-card").addEventListener("click", function () {
  // console.log(for test your code)
  serial += 1;

  //step-1: get the data from html ,using ID
  const productName = document.getElementById("first-name").innerText;
  const productPrice = document.getElementById("first-price").innerText;
  const productQuantity = document.getElementById("first-quantity").innerText;

  // multiply
  const priceTotal = parseInt(productPrice) * parseInt(productQuantity);

  displayData(productName, productPrice, productQuantity, priceTotal);
  disabledButton("first-card");
});
//

// ---------------------------------
// second card
// using event object from browser
document.getElementById("second-card").addEventListener("click", function (e) {
  serial += 1;
  const pName = e.target.parentNode.parentNode.children[0].innerText;
  const pPrice =
    e.target.parentNode.parentNode.children[2].children[0].innerText;
  const pQuantity =
    e.target.parentNode.parentNode.children[3].children[0].innerText;

  const sumTotal = parseInt(pPrice) + parseInt(pQuantity);

  displayData(pName, pPrice, pQuantity, sumTotal);
  disabledButton("second-card");
});

// -------------------------------------------

// 3rd card
document.getElementById("third-card").addEventListener("click", function () {
  // console.log(for test your code)
  serial += 1;

  //step-1: get the data from html ,using ID
  const productName = document.getElementById("third-title").innerText;
  const productPrice = document.getElementById("third-price").innerText;
  const productQuantity = document.getElementById("third-quantity").innerText;

  // multiply
  const priceTotal = parseInt(productPrice) - parseInt(productQuantity);

  displayData(productName, productPrice, productQuantity, priceTotal);
  disabledButton("third-card");
});

// ------------------------------------

// 4th card
document.getElementById("fourth-card").addEventListener("click", function () {
  // console.log(for test your code)
  serial += 1;

  //step-1: get the data from html ,using ID
  const productName = document.getElementById("fourth-title").innerText;
  const productPrice = document.getElementById("fourth-price").innerText;
  const productQuantity = document.getElementById("fourth-quantity").innerText;

  // multiply
  const priceTotal = parseInt(productPrice) * parseInt(productQuantity);

  displayData(productName, productPrice, productQuantity, priceTotal);
  disabledButton("fourth-card");
});
//

// last card
document.getElementById("last-card").addEventListener("click", function () {
  serial += 1;
  const productName = document.getElementById("last-title").innerText;
  const productPrice = document.getElementById("first-input").value;
  const productQuantity = document.getElementById("second-input").value;

  if (
    productPrice == "" ||
    productQuantity == "" ||
    productPrice <= 0 ||
    productQuantity <= 0
  ) {
    return alert("please enter any valid number");
  }

  const total = parseInt(productPrice) / parseInt(productQuantity);

  displayData(productName, productPrice, productQuantity, total);
  disabledButton("last-card");
});

// --------------------------------------------------
// common function to display data

function displayData(nameOfP, priceOfP, quantityOfP, result) {
  const container = document.getElementById("table-container");

  //   create a element in html
  const tr = document.createElement("tr");
  tr.innerHTML = `
  <td>${serial}</td>
  <td>${nameOfP}</td>
  <td>${priceOfP}</td>
  <td>${quantityOfP}</td>
  <td>${result}</td>
  `;
  //   add a element in html
  container.appendChild(tr);
}

// --------------------------
// for one click disable button
function disabledButton(id) {
  document.getElementById(id).setAttribute("disabled", true);
}

// function for grand total
function getAllData() {
  const totalProducts = document.getElementById("total-product");
  console.log(totalProducts);
}
