import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Exploring Code - davisolds.com</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>An invitation to explore code.</h1>

        <article className={styles.article}>
          <p>If anyone tells you there is a “right”  syntax or format to write web applications, they haven’t been programming long enough.  There are countless techniques and styles that people have adopted as <em>the way</em> to code and while it works for the them in their niche domain space, it will not universally fit every problem.  As coders, the closest we can get to the one way is to have practices and patterns that are mutually agreed upon within a team to solve that domain problem.  But to decide on the right practice or pattern, we first need to explore and share the challenges and advantages of each approach.</p>

          <p>In this series, I aim to explore various ways to accomplish the same problem.  Every segment, the problem space will be viewed with a different lens resulting in different decisions and results.  The end code will work for that case but also be available to compare and contracts its strengths with other approaches.</p>

          <p>Through this exploration, I aim to gain a more robust understanding of the possible ways to solve a problem and be able to articulate and then choose the right pattern for the next problem that I am trying to solve.  By documenting this exploration, there will be a repository of reference material to support decisions for the practices and patterns agreed upon within a team.</p>

          <p>I invite you to join me.  Through deep analysis and discussion, I believe the approaches (and then the decisions) will be sharpened to its distinguishing point.  And by knowing the distinguishing point, we will make better choices when writing code.  With better choices, comes cleaner code that is developed quicker and is easier to maintain long term.</p>

          <p>Let’s get started.</p>
        </article>
      </main>
    </div>
  )
}
