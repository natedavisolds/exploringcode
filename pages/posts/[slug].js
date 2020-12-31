import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'
import {getAllPosts} from '../../lib/posts'
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


export default function Post({frontmatter,markdownBody,allPosts}) {
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

export async function getStaticProps({ ...ctx }) {
  const { slug } = ctx.params

  const content = await import(`../../data/posts/${slug}.md`)
  const config = await import(`../../data/site.json`)
  const data = matter(content.default)

  return {
    props: {
      siteTitle: config.title,
      frontmatter: data.data,
      markdownBody: data.content,
      allPosts: getAllPosts(['title','slug'])
    },
  }
}

export async function getStaticPaths() {
  const blogSlugs = ((context) => {
    const keys = context.keys()
    const data = keys.map((key, index) => {
      let slug = key.replace(/^.*[\\\/]/, '').slice(0, -3)

      return slug
    })
    return data
  })(require.context('../../data/posts', true, /\.md$/))

  const paths = blogSlugs.map((slug) => `/posts/${slug}`)

  return {
    paths,
    fallback: false,
  }
}
