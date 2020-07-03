
var products = {
  uuid: "79461a77-1e28-45a1-8d5c-dca988a7ae07",
  apiPath: "https://course-ec-api.hexschool.io/",
  getProducts () {
    const vm = this;
    axios
      .get(`${vm.apiPath}api/${vm.uuid}/ec/products`)
      .then(function(response) {
        const myData = response.data.data
        myData.forEach(element => vm.getProductInfo(element.id))
      })
  },
  getProductInfo (id) {
    const vm = this;
    axios
      .get(`${vm.apiPath}api/${vm.uuid}/ec/product/${id}`)
      .then(function(response) {
        const myData = response.data.data
        vm.renderProductList (myData)
      })
  },
  renderProductList (data) {
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
    `
    document.querySelector('#productsList').innerHTML += templateProductList
  }
}
products.getProducts();

