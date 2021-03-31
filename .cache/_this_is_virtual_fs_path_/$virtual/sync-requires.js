
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-js": preferDefault(require("/Users/spindd/Desktop/spin1/gatsby_shpify/src/pages/404.js")),
  "component---src-pages-cart-js": preferDefault(require("/Users/spindd/Desktop/spin1/gatsby_shpify/src/pages/cart.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/spindd/Desktop/spin1/gatsby_shpify/src/pages/index.js")),
  "component---src-pages-page-2-js": preferDefault(require("/Users/spindd/Desktop/spin1/gatsby_shpify/src/pages/page-2.js")),
  "component---src-templates-product-page-index-js": preferDefault(require("/Users/spindd/Desktop/spin1/gatsby_shpify/src/templates/ProductPage/index.js"))
}

