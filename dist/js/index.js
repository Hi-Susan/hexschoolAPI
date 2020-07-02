/*! GLP Lucky Draw Platform */
'use strict';

const uuid = "79461a77-1e28-45a1-8d5c-dca988a7ae07";
const apiPath = "https://course-ec-api.hexschool.io/";

function getProducts() {
  axios.get(`${apiPath}api/${uuid}/ec/products`).then(function (response) {
    const myData = response.data.data;
    myData.forEach(element => getProductInfo(element.id));
  });
}

function getProductInfo(id) {
  axios.get(`${apiPath}api/${uuid}/ec/product/${id}`).then(function (response) {
    const myData = response.data.data;
    renderProductList(myData);
  });
}

function renderProductList(data) {
  // <div class="products-card-tag">8折</div>
  let templateProductList = `
  <div>
    <div class="products-card">
      <div class="products-card-image" style="background-image: url('${data.imageUrl}')"><a class="products-card-button" href="javascript:;">加入購物車</a></div>
      <div class="products-card-title">${data.title}</div>
      <div class="products-card-price">${data.price}</div>
      <div class="products-card-info">${data.content}</div>
      <a class="products-card-link" href="javascript:;"></a>
    </div>
  </div>
  `;
  document.querySelector('#productsList').innerHTML += templateProductList;
}

getProducts();
