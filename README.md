This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

1. Save your changes.
2. Run 'bun run build' in your terminal, in order to 'build' the javascript on the frontend to reflect your changes.
3. Run 'bun run dev' in your terminal, in order to run a development website that's on your localhost.
4. Repeat. Profit. Make sure you control C to exit dev mode.

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
  
