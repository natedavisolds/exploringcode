import ReactMarkdown from 'react-markdown'
import Link from 'next/link'

const Related = ({title="Related Posts",posts=[]}) =>
  <section className="related-posts">
    <header>{title}</header>
    <ul>
      { posts.map(post => <li key={post.slug}>
          <Link href={post.slug}><a>{post.title}</a></Link>
        </li>)}
    </ul>
  </section>


export default function Post({frontmatter={title:''},markdownBody="",allPosts=[]}) {
  return (
    <main className="main">
      <h1 className="title">{frontmatter.title}</h1>

      <article className="article">
        <ReactMarkdown source={markdownBody} />
        <Related posts={allPosts} />
      </article>
    </main>
  )
}
