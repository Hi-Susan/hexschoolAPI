(function () {
  'use strict';

  var uuid = "79461a77-1e28-45a1-8d5c-dca988a7ae07";
  var apiPath = "https://course-ec-api.hexschool.io/";

  function getProducts() {
    axios.get(apiPath + "api/" + uuid + "/ec/products").then(function (response) {
      var myData = response.data.data;
      myData.forEach(function (element) {
        return getProductInfo(element.id);
      });
    });
  }

  function getProductInfo(id) {
    axios.get(apiPath + "api/" + uuid + "/ec/product/" + id).then(function (response) {
      var myData = response.data.data;
      renderProductList(myData);
    });
  }

  function renderProductList(data) {
    // <div class="products-card-tag">8折</div>
    var templateProductList = "\n  <div>\n    <div class=\"products-card\">\n      <div class=\"products-card-image\" style=\"background-image: url('" + data.imageUrl + "')\"><a class=\"products-card-button\" href=\"javascript:;\">\u52A0\u5165\u8CFC\u7269\u8ECA</a></div>\n      <div class=\"products-card-title\">" + data.title + "</div>\n      <div class=\"products-card-price\">" + data.price + "</div>\n      <div class=\"products-card-info\">" + data.content + "</div>\n      <a class=\"products-card-link\" href=\"javascript:;\"></a>\n    </div>\n  </div>\n  ";
    document.querySelector('#productsList').innerHTML += templateProductList;
  }

  getProducts();

}());
