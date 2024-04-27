# Recap

## Section 2 - Lecture 9: Islands architecture

- While [Astro](https://astro.build/) does support client-side navigation like in a singe-page app (SPA), Astro is designed to be a framework for multi-page apps (MPA)
- `Hydration` is when we add client-side JavaScript to a web page that has already been rendered statically (`static rendering mode`) or on-demand (`server-side rendering mode`). Hydration makes the web page interactive and dynamic
- The islands architecture involves `selective hydration`, which means we hydrate only certain sections of a web page, not the entire web page. So most of the page content can be statically rendered or server-rendered resulting in a performance boost.
- In Astro, `selective hydration` applies only to components created with other UI libraries such as React, Vue or Svelte. So the only components that can be island components are components created with other UI libraries.
- Island components can be imported into Astro components **but not the other way around**. Island components can only import other island components of the same type. React components can only import other React components, and so on.
- Astro components are the only components that are capable of rendering island components. In other words, Astro components are the only components that are capable of rendering components created with other UI libraries.
- Astro’s islands architecture makes it possible to render components from different UI libraries on the same web page.
- This makes Astro the ideal framework for micro frontends or for gradually migrating components from other libraries to Astro.
- Island components are not hydrated by default. Astro provides template directives beginning with `client:` that we can apply to island components to hydrate them. Some examples are `client:load` and `client:only`
  - https://docs.astro.build/en/reference/directives-reference/#client-directives
- In addition to the above, we also learned that Astro’s functionality can be extended by adding `integrations` to an Astro project. In this lecture, we added the React and Vue integrations and many more integrations are available
  - https://astro.build/integrations/
