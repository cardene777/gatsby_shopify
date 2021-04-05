import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'

import SEO from '~/components/seo'
import ProductGrid from '~/components/ProductGrid'

const IndexPage = () => {
    const data = useStaticQuery(graphql`
    query allContentfulArticle {
      allContentfulArticle {
        nodes {
          id
          title
          summary
        }
      }
    }
  `)
  return (
    <>
      <SEO title="Home" />
      <h1>Hi people</h1>
      {/* 取得したデータを表示する処理を追加 */}
      {data.allContentfulArticle.nodes.map(({ id, title, summary }) => (
        <div key={id}>
            <h3>{title}</h3>
            <h3>{summary}</h3>
        </div>
      ))}
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      </div>

      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

      <Link to="/page-2/">Go to page 2</Link>
    </>
  )
//  <>
//    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
//    <h1>Hi people</h1>
//    <p>Welcome to your new Shop powered by Gatsby and Shopify.</p>
//    <ProductGrid />
//    <Link to="/page-2/">Go to page 2</Link>
//  </>
}

export default IndexPage
