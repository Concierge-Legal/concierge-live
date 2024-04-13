# Concierge Technical Overview
## Development Process Guide
This guide will explain how to use Bun 
1. Save your changes.
2. Run 'bun run build' in your terminal, in order to 'build' the javascript on the frontend to reflect your changes.
3. Run 'bun run dev' in your terminal, in order to run a development website that's on your localhost.
4. Repeat. Profit. Make sure you control C to exit dev mode.

## Tech Stack
### Programming Languages
- JavaScript (TypeScript): The primary programming language we use is TypeScript, which is a superset of JavaScript. This means that TypeScript enhances JavaScript by adding features like static types and class-based object-oriented programming, making it easier to write robust and error-free code. Any JavaScript code is also valid TypeScript code, but TypeScript allows for stricter type-checking and more advanced programming constructs. Files containing TypeScript code have the .ts or .tsx (if they include JSX for React) file extensions.

- HTML: HTML, or HyperText Markup Language, is the standard markup language used to create the structure of web pages. It provides the skeletal framework into which other technologies like CSS and JavaScript are integrated to create fully functional webpages.

- CSS: CSS, or Cascading Style Sheets, is used to define the visual appearance of HTML elements. It is the primary technology used for styling, allowing developers to specify the layout, colors, fonts, and more for elements on a web page.

- SQL: SQL, or Structured Query Language, is the language we use to manage and manipulate our databases. We specifically use PostgreSQL, an advanced, open-source relational database system. Our SQL interactions are streamlined through Supabase, a platform that provides backend services like real-time databases and authentication.

### Web Frameworks
- Node.js: Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It enables developers to run JavaScript on the server side. Node.js is a crucial part of many web frameworks, including Next.js, and it allows for the development of scalable server-side applications.
https://nodejs.org/docs/latest/api/

- Next.js: Next.js is a powerful framework built on top of Node.js for building server-rendered React applications. It provides functionalities for both static and server-side rendering, making it easier to build optimized web applications that perform well on a variety of devices.
https://nextjs.org/docs

- Bun: Bun is a package manager for javascript packages. Bun makes sure we track our packages, keep them installed and updated, and makes sure everytime we build the website for hosting all of our packages we need are included. 'bun install' is used to add a new package. 'bun run $COMMAND' is used to run a variety of different commands. The two most important are 'build' and 'dev'. Build is necessary to make the website ready for being live, and dev is used to create a local dev site.
https://bun.sh/docs

- Vercel: Vercel is a cloud platform for hosting websites and web services that is optimized for Next.js, though it supports other frameworks as well. It provides a seamless deployment process and additional services like scale, performance monitoring, and analytics.
https://vercel.com/docs

### UI Frameworks
- React: React is a popular JavaScript library for building user interfaces, primarily for single-page applications where you need a fast, interactive user experience. It uses a component-based architecture, which means that the UI is broken down into individual components that manage their own state and compose together to form complex UIs.
https://react.dev/learn/tutorial-tic-tac-toe

- Tailwind CSS: Tailwind is a utility-first CSS framework for rapidly building custom designs. Unlike traditional CSS frameworks that come with predefined components, Tailwind provides low-level utility classes that you apply to HTML elements, which gives you more control over the design without battling against pre-defined styles.
https://tailwindcss.com/docs/installation

- NextJS UI Components: Within Next.js, you can also use built-in or third-party React components optimized for server-rendered applications. These components can help speed up development by providing commonly used functionality and UI elements out of the box.
[https://nextjs.org/docs/getting-started/installation](https://nextui.org/docs/frameworks/nextjs)

### Backend
- Database: Our backend storage relies on PostgreSQL, managed through Supabase which offers an easy-to-use interface and additional tools like real-time capabilities and automated backups.

- Authentication: We currently use Clerk for handling user authentication and management. Clerk offers advanced security features and is easy to integrate, but our choice of authentication provider is subject to change based on evolving needs.

- LLM Providers: We use language model providers like OpenAI and Anthropic to integrate advanced AI functionalities into our applications. These providers offer powerful language models that can generate text, summarize content, and even help automate responses or generate code.


## About the NextJS Structure
TLDR: Everything you need is in app. Most of our pages are in (visible). The API is in api/whateverAPIRoute. Components contains all the UI stuff, lib contains any other code we use on the frontend that doesn't necessarily belong in the API route folder.
### Folders

- .next: Don't worry about this
- node_modules: This is the folder that holds all of the imported libraries we use. This place is a hellhole. Do not go in here. If you commit this repository to github I will murder you. Your only interactions with node_modules should be in tandem with 'bun install'. Sometimes node_modules can get fucked and you will want to delete it entirely (this is ok) and then run 'bun install' to reinstall all of the packages into node_modules. Anytime you run 'bun install PACKAGENAME' in the terminal it puts the package into nodemodules. Anytime you use 'import 'blah' from 'package-folder'' in typescript, you are telling the typescript code to look into node modules to find the package.
- Public: Contains all public images. Most of our logos/pics/icons will be held here
- App: Contains all of the logic/pages of the website. Has the following important subdirectories:
1. (hidden): Contains all the hidden pages of our website. Any pages that we would export onto client's websites would go here. Not normally findable.
2. (visible): Contains all the regular, nonhidden pages of our website. Every folder inside visible is a separate 'page' on the website. It has it's own page.tsx.
3. api: Contains all of the API logic for our site. Most of the hardcore code needs to go here. Pages in (hidden) or (visible) can 'call' the API from the frontend. API is considered the 'backend'. This is where I thrive. The API contains folders which separate out functionality of the API, which each contain a 'route.ts'. Every different aspect of the API is considered a different 'API Route'.
4. components: Contains most of the reusable components we use on the frontend. Navbar? Created in the components in its own file. The idea is to create your UI stuff in components and then you can import the whole UI component into whatever 'page' you want on the frontend.
5. lib: Contains useful helper functions. Island of misfit toys, for code that doesn't really belong anywhere else.
6. sign-in: Contains sign in page stuff. Needs to be treated specially, but really it's just another 'page' on our site.
   


### Config Files
- .gitignore: Telling github which files to not allow to be tracked/uploaded to github. For example, node_modules should NEVER be allowed to be tracked or uploaded to github. Another good example is an environment or .env file. This .env file contains all our super secret passwords, and should NOT be uploaded to github.
- package.json: What packages should our project import and use? This should directly correlate with the contents of node_modules. In fact, when you delete node_modules and reinstall using 'bun install', bun will look inside of package.json in order to understand what packages should be reinstalled. 
- tsconfig.json: How should the typescript compile be configured in order to read and run all the typescript code. No touching.
- bun.lockb: You can't read this, don't mess with it. It's instructions for bun, our package manager.
- next.config.mjs: Unimportant for now.
- postcss.config.mjs: Unimportant for now.
- tailwind.config.ts: File for configuring tailwind (the package that makes our html look pretty). Don't touch this for now.


## Resources

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

It's already set up to be deployed on Vercel automatically.
**DO NOT DIRECTLY PUSH CHANGES TO MAIN**
- You will be put in the box of shame.
- Instead, push changes to a branch you're working on.
- You can view your working branch on vercel BEFORE you merge your working branch into main (the live website)
  
