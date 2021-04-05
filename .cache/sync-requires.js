
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-js": preferDefault(require("/Users/spindd/Desktop/spin1/gatsby_shopify/src/pages/404.js")),
  "component---src-pages-blog-js": preferDefault(require("/Users/spindd/Desktop/spin1/gatsby_shopify/src/pages/blog.js")),
  "component---src-pages-cart-js": preferDefault(require("/Users/spindd/Desktop/spin1/gatsby_shopify/src/pages/cart.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/spindd/Desktop/spin1/gatsby_shopify/src/pages/index.js")),
  "component---src-pages-page-2-js": preferDefault(require("/Users/spindd/Desktop/spin1/gatsby_shopify/src/pages/page-2.js")),
  "component---src-templates-product-page-index-js": preferDefault(require("/Users/spindd/Desktop/spin1/gatsby_shopify/src/templates/ProductPage/index.js"))
}

