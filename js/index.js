var productName = document.getElementById("productName");
var productPrice = document.getElementById("productPrice");
var productCat = document.getElementById("productCat");
var productDesc = document.getElementById("productDesc");

var productList;

if (localStorage.getItem("productList") === null) {
  // if no data found in localstorage
  productList = [];
} else {
  // found data ,display data
  productList = JSON.parse(localStorage.getItem("productList"));
  //   console.log(productList);
  displayProducts(productList);
}

function createProduct() {
  var product = {
    name: productName.value,
    price: productPrice.value,
    category: productCat.value,
    description: productDesc.value,
  };

  productList.push(product);
  displayProducts(productList);

  localStorage.setItem("productList", JSON.stringify(productList));
  //   clearForm()
}

function clearForm() {
  productName.value = "";
  productPrice.value = "";
  productCat.value = "";
  productDesc.value = "";
}

/* '[{name:'jkedk, price:1000,category:'mobile',description:'good'},
{name:'jkedk, price:1000,category:'mobile',description:'good'}
,{name:'jkedk, price:1000,category:'mobile',description:'good'}]'*/

function displayProducts(list) {
  // loop , access
  var cartona = "";
  for (var i = 0; i < list.length; i++) {
    // template literal
    cartona += ` <tr>
    <td>${i}</td>
    <td>${list[i].name}</td>
    <td>${list[i].price}</td>
    <td>${list[i].category}</td>
    <td>${list[i].description}</td>
    <td><button class="btn btn-warning">Update</button></td>
    <td><button class="btn btn-danger" onclick='deleteProduct(${i})'>Delete</button></td>
  </tr>`;
  }

  document.getElementById("data").innerHTML = cartona;
}

// single responsibility

function deleteProduct(index) {
  // delete ele from array
  // delete row from table
  productList.splice(index, 1);
  displayProducts(productList);
  localStorage.setItem("productList", JSON.stringify(productList));
}

function searchProduct(letter) {
    var foundedProducts=[]
  for (var i = 0; i < productList.length; i++) {
    if (productList[i].name.toLowerCase().includes(letter.toLowerCase())) {
      // mwgood
      foundedProducts.push(productList[i]);
      displayProducts(foundedProducts)
    } else {
      // msh mwgood
      console.log("no");
    }
  }
}

/** ADD PRODUCT
 * create product (values from input )
 * add each product to the array
 * display data in table
 * clear form (delete old values )
 *
 *
 *
 *
 */

// localStorage.setItem('userName',`[{name:'jkedk, price:1000,category:'mobile',description:'good'},
// {name:'jkedk, price:1000,category:'mobile',description:'good'}
// ,{name:'jkedk, price:1000,category:'mobile',description:'good'}]`)
// localStorage.setItem('userAge','29')

// console.log(localStorage.getItem('userName'));
// localStorage.removeItem('userName')
// localStorage.clear()

// sessionStorage.setItem('userName','esraa')
// console.log(localStorage.key(0));
