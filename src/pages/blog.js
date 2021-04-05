import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'

import SEO from '~/components/seo'
import ProductGrid from '~/components/ProductGrid'

const BlogPage = () => {
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
      {data.allContentfulArticle.nodes.map(({ id, title, summary }) => {
      console.log(title)
      return(
      <div key={id}>
            <h3>Title:{title}</h3>
            <h3>summary:{summary}</h3>
            <p>###################</p>
        </div>
      )

      })}
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      </div>

      <p><Link to="/page-2/">Go to page 2</Link></p>
      <p><Link to="/blog/">Go to blog</Link></p>
    </>
  )
}

export default BlogPage
