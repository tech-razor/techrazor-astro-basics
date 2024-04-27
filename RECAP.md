# Recap

## Section 2 - Lecture 7: Astro components

- [Astro](https://astro.build/) components have the `.astro` file extension.
- The code for an Astro component has two sections:
  - A script section or “code fence” that runs at build time or on the server in SSR mode. In other words, the code in this section runs in the **backend**. We use three dashes (`---`) to mark the beginning and end of the script section. The syntax for the script section is JavaScript/TypeScript. As an example, we can expose values to the frontend if needed and we can even run API calls here.
  - A template section that contains markup, styles and scripts to be rendered and executed in a web browser. In other words, the code in this section is for the **frontend**. The syntax for the template section is just regular HTML, CSS and JavaScript/TypeScript along with a JSX-like syntax for dynamic expressions and rendering logic
- Astro lets us render components from other UI libraries like [React](https://react.dev/) and [Vue](https://vuejs.org/), making it the ideal framework for micro frontends (demonstrated in Lecture 9: Islands architecture) or for gradually migrating components from other libraries to Astro.
- CSS can be added to an Astro component by using a `<style>` tag in the template section. By default, the styles are scoped to the component and will not affect the rest of the web page.
- Astro provides some useful template directives. The `is:global` directive is one example. When applied to a `<style>` tag, the `is:global` directive will no longer scope the CSS rules to a component. The CSS rules will be available site-wide or in other words the CSS rules will be available globally.
- Client-side scripts can be included in an Astro component by using a standard `<script>` tag in the template section. Any code here only runs client-side and is not to be confused with the script section at the top of the component.
- By default, Astro automatically sets the type attribute to `module` for a `<script>` tag and so script execution is deferred. Also, the script will be injected into the `<head>` section of the page. However, by applying the `is:inline` template directive to a `<script>` tag, the code will stay in-place and will not be injected into the `<head>` section. Additionally, Astro will no longer bundle the code.
- Other than the `src` attribute, adding any attribute to a `<script>` tag will force the script to be inline even if we don’t explicitly apply the `is:inline` template directive.
- Astro components have access to a special global object called `Astro`. This global object provides a number of useful objects and functions. An example would be the `Astro.props` object.
- When an Astro component requires props, similar to props in libraries such as React, the props can be destructed from `Astro.props` from within the script section at the top of the component file. If default values are required for the props, these can be provided at the time of destructuring:

  ```js
  const {
    userName,
    isAdminUser,
    adminPanelTitle = 'Admin Control Panel'
  } = Astro.props;
  ```

- When using TypeScript, props can be typed by declaring a `type` or an `interface` called Props:

  ```js
  interface Props {
    userName: string;
    isAdminUser: boolean;
    adminPanelTitle?: string;
  }
  ```
