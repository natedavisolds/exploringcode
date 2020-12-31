---
title: 'Getting it out there.'
author: 'nate.'
---
The best time to automate deployment is when the site has very few moving parts.  Two main reasons:
1. Reduced complexity involved in the automation
2. Ensures that content from now on can be published

I considered making a completely static site first, pushing it up to GitHub, and then automating the deployment from there.  But I think there is a more direct approach.

## The plan.
1. Use the barebones nextjs configuration to build these three pages with default settings (we may explore these later).
2. Drop the site into Netlify admin settings to deploy. Github hooks, continuous delivery, and DNS setting are all beyond our scope for now.

### Getting NextJs running.

Using [Create Next App | Next.js](https://nextjs.org/docs/api-reference/create-next-app) I create a new folder and basic setup.
```
$ yarn create next-app exploration
$ yarn dev
```

Now, browsing at https://localhost:3000 shows:

![](/assets/getting-it-out-there/nextjs-welcome.png)

### Adding the content pages.
NextJs comes built in with pages and module CSS support.

Opening up _pages_index.js

I removed the footer tag, erased the content that was in `<main>` , replaced it with ‘An invitation to code content’, and changed the head information to use davisolds.com.

```JSX
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
        <header>
          <h1 className={styles.title}>An invitation to explore code with me.</h1>
        </header>

        <article>
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

```

Updated the css in

```css
/* below .main */
.main > * {
  width: 66%; /* tightening up the content */
}

.title {
  margin: 0;
  line-height: 1.15;
  font-size: 4rem; /* reduced from 5rem */
}
```

And it looks like
![](/assets/getting-it-out-there/initial-homepage.png)

No links. Nothing special on style.  Just content.  Perfect.  Now, let’s deploy it using Netlify.

### Deploy with Netlify.
I setup the domain to link to netlify and hooked the netlify config to connect with the GitHub repo.  I thought I would deploy manually, but again, Netlify service makes it easier to setup through GitHub than to process manually.  They even recently added a plugin for nextjs that took care of most of the configuration that I would need to do.  Two hurdles:
1. Make sure the build directory is set to `/.next/`
2. And that the site production build is working through `yarn build` and `yarn start`.
![](/assets/getting-it-out-there/live-domain.png)
### Result
The site is now hooked to deploy whenever we push to the main branch.


#deployment
