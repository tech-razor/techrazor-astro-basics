# Recap

## Section 2 - Lecture 8: Page routes

- [Astro](https://astro.build/) has two special folders under the src folder: pages and content
- Astro uses **file-based routing**, so any files or folders placed inside the pages folder will create page routes corresponding to the names of the files or folders
- The files allowed inside the `pages` folder are `.astro` files. Markdown files (`.md` and `.mdx`), and `.html` files
- For dynamic page routes, a page component’s file name can contain URL parameter names enclosed by square brackets, for example, `[id]-[title].astro`. This component can then serve a route such as `/1-javascript`
- In static rendering mode, files that handle dynamic page routes must export a function called `getStaticPaths`. This is because Astro will need to know all possible page routes at build time, including the dynamic page routes:
  - The `getStaticPaths` function must return an array of objects that have a nested params object. All possible values for the URL parameters must be provided. The parameter names must correspond to the words enclosed in square brackets in the file name, for example, if the file name is `[id]-[title].astro`, then the params object is `[{ params: { id: 1, title: ‘javascript } }]`.
- Along with props, the `Astro` global object also provides a `params` object and a `glob` function:

  - The `Astro.params` object lets us access URL parameters

    ```js
    const { id, title } = Astro.params;
    ```

  - The `Astro.glob` function lets us read files from the local filesystem:

    ```js
    const posts = await Astro.glob('./*.md');
    ```

- By the end of the lecture, we created the following page routes:

  ```
  /about
  /contact
  /articles
  /articles/[id]-[title]
  /posts
  /posts/1-post
  /posts/2-post
  /posts/3-post
  ```

- Apart from page routes, we also learned the following:
  - Markdown files have a section at the top of the page called `frontmatter`, which is used for metadata in the `YAML` or `JSON` format. In Astro, there is a special layout property that can be used in the frontmatter section to specify which layout component to use. The idea for the script section in Astro components is borrowed from Markdown’s frontmatter concept.
  - In an Astro component, we can use the special `frontmatter` prop to access metadata defined in the frontmatter section of a Markdown file
  - The script section/code-fence section supports top-level await and so we don’t need to explicitly put await inside an async function: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await#top_level_await
