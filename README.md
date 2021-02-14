# Asynchronous Programming

> "Synchronous basically means that you can only execute one thing at a time. Asynchronous means that you can execute multiple things at a time and you don't have to finish executing the current thing in order to move on to next one."
>
> - [Mike](https://stackoverflow.com/a/33585047)

---

"The Internet", "The Web", "Web Apps". All of these terms describe something that is interconnected. If you zoom out a bit, the entire internet is basically billions of computers all sharing information and software! But so far your projects have been all alone on your computer :(

Everything you have learned so far happens on the _callstack_, everything on the callstack executes _synchronously_. Synchronous means that each line of code will finish executing before the next one starts. Think of infinite loops, your browser freezes because nothing else can happen while the loop is looping!

What makes web development so cool is the ... web. Being able to build applications that connect computers form across the internet. This also introduces some challenges, it can take some time for computers to talk to each other across the internet. You don't want your apps freezing while you wait to hear back from another computer.

Enter _asynchronous programming_: writing code that tells your browser to start one task and move on to a new task while you wait for the first to finish. This is possible because of the _Event Loop_.

## Contents

- [Learning Objectives](#learning-objectives)
- [Suggested Study](#suggested-study)
- Sundays & Projects
  - [Week 1](#week-1)
  - [Week 2](#week-2)
  - [Week 3](#week-3)
- [Class Recordings](#class-recordings)
- [Curriculum](https://home.hackyourfuture.be/curriculum) (external)
- [HYF Home](https://home.hackyourfuture.be/) (external)

## Getting Started

How to study the code in this repo.

> You will need [NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) and [nvm](https://github.com/nvm-sh/nvm#installing-and-updating) on your computer to study this material
>
> Using a browser with good DevTools will make your life easier: [Chromium](http://www.chromium.org/getting-involved/download-chromium), [FireFox](https://www.mozilla.org/en-US/firefox/new/), [Edge](https://www.microsoft.com/edge), [Chrome](https://www.google.com/chrome/)

1. Install or update the `study-lenses` package globally
   - `npm install -g study-lenses` (if you do not have it already)
   - `npm update -g study-lenses` (if you already have it installed)
2. Clone this repository:
   - `git clone git@github.com:HackYourFutureBelgium/asynchronous-programming.git` (SSH) (recommended)
   - `git clone https://github.com/HackYourFutureBelgium/asynchronous-programming.git` (HTTPS)
   - `gh repo clone HackYourFutureBelgium/asynchronous-programming` (GH CLI)
3. `cd` into the repository
   - `cd asynchronous-programming`
4. Run the `study` command from your CLI
   - `study`
5. The material will open in your default browser, you're good to go!

> If you have a windows computer and get this error:
>
> - `... /study.ps1 cannot be loaded because running scripts ...`
>
> follow the instructions in [this StackOverflow answer](https://stackoverflow.com/a/63424744), that should take care of it ; )

[TOP](#asynchronous-programming)

---

## Learning Objectives

- Browser
  - Using `setTimeout` and `setInterval` to schedule tasks on the _Event Loop_
  - Using `Promise` to write more manageable asynchronous code
  - Refactoring promises to `async`/`await`
  - Using `fetch` to get and consume data from APIs
- Node
  - Using `node-fetch` to make API calls from Node
  - Using `fs` to read and write files
  - Using `utils.promisify` to convert `fs` from callbacks to promises

[TOP](#asynchronous-programming)

---

## About the Projects

Projects in this module will build on what you learned in the last module by adding in _network calls_ to APIS and scheduled tasks on the event loop.

[TOP](#asynchronous-programming)

---

## Suggested Study

References and Practice to help you master this module.

<details>
<summary>expand/collapse</summary>

### Closure & Callstack

- `this` and `() => {}`
  - [tyler mcginnis](https://tylermcginnis.com/arrow-functions/)
  - [dario garcia moya](https://www.codementor.io/@dariogarciamoya/understanding-this-in-javascript-with-arrow-functions-gcpjwfyuc)
  - [youtube search](https://www.youtube.com/results?search_query=arrow+function+binding+this)

### The Event Loop

- [Loupe](http://latentflip.com/loupe/) (+10)
- [In the Loop](https://www.youtube.com/watch?v=cCOL7MC4Pl0) (+10)
- [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop)
- [flavicops](https://flaviocopes.com/javascript-event-loop/)
- [javascript.info/settimeout-setinterval](https://javascript.info/settimeout-setinterval)
- [https://javascript.info/event-loop](https://javascript.info/event-loop)
- [Use case for using setTimeout(0)](https://javascript.info/event-loop#use-case-3-doing-something-after-the-event)
- [Beau from FCC](https://www.youtube.com/watch?v=kOcFZV3c75I) (timeouts & intervals)

### Callbacks, Promises, Async

- References
  - [Coding Train](https://www.youtube.com/watch?v=QO4NXhWo_NM&list=PLRqwX-V7Uu6bKLPQvPRNNE65kBL62mVfx)
  - [Dev Ed](https://www.youtube.com/watch?v=_8gHHBlbziw)
  - [Traversy](https://www.youtube.com/watch?v=PoRJizFvM7s)
  - [javascript.info](https://javascript.info/async)
  - MDN: [Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise), [Using Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises)
  - HYF ... [AMS](https://github.com/HackYourFuture/JavaScript3/), [CPH](https://github.com/HackYourFuture-CPH/JavaScript/tree/master/javascript3)
  - [Async/Await - FunFunFunction](https://www.youtube.com/watch?v=568g8hxJJp4)
  - [`return await` (advanced)](https://stackoverflow.com/questions/38708550/difference-between-return-await-promise-and-return-promise)
- Practice
  - [learn-promises](https://github.com/oliverjam/learn-promises)
  - [promise-practice](https://github.com/oliverjam/promise-practice)
  - JS 30:
    - Whack-a-Mole
    - Slide in on Scroll
    - Countdown Timer
    - JS & CSS Clock
    - Webcam Fun

### APIs

- [What is JSON?](https://www.youtube.com/watch?v=JuFdz8f-cT4)
- APIs 101
  - [How do they work?](https://www.programmableweb.com/api-university/what-are-apis-and-how-do-they-work)
  - [Like a Restaurant](https://www.youtube.com/watch?v=s7wmiS2mSXY)
- **DevTools**, the Network Tab:
  - [chrome/ium](https://developers.google.com/web/tools/chrome-devtools/network/)
  - [firefox](https://developer.mozilla.org/en-US/docs/Tools/Network_Monitor)
- What is RESTful
  - JSON Placeholder:[live](https://jsonplaceholder.typicode.com/), [more docs](https://github.com/typicode/json-server)
  - [restfulapi.net](https://restfulapi.net/)
- [Coding Train](https://www.youtube.com/playlist?list=PLRqwX-V7Uu6YxDKpFzf_2D84p0cyk4T7X)
- [what is CORS?](https://www.codecademy.com/articles/what-is-cors)

### `fetch`

- References
  - [Javascript Promises and Fetch for beginners](https://www.youtube.com/watch?v=IHjzyhjKxtc)
  - [javascript.info/fetch](https://javascript.info/fetch)
  - [Traversy](https://www.youtube.com/watch?v=Oive66jrwBs)
  - [Coding Train](https://www.youtube.com/watch?v=tc8DU14qX6I)
  - [Fetch API Introduction](https://www.youtube.com/watch?v=PoRJizFvM7s)
  - [Learn Fetch API](https://www.youtube.com/watch?v=cuEtnrL9-H0)
  - [Async/Await Javascript and Promises - Fetch API vs Axios](https://www.youtube.com/watch?v=XCLtVQl1if0)
  - [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Basic_concepts)
  - [this-to-fetch](https://github.com/hackyourfuturebelgium/this-to-fetch-example)
- Practice
  - [learn-fetch](https://github.com/oliverjam/learn-fetch)
  - [real-world-fetch](https://github.com/oliverjam/real-world-fetch)
  - [github-api-crash-course tutorial](https://www.youtube.com/watch?v=5QlE6o-iYcE). (hint: avoid pushing your GitHub auth token!)
  - [Fetching REST](https://github.com/HackYourFutureBelgium/fetching-rest)
  - JS 30: Type Ahead

### Node.js

- `node-fetch`
- `fs`
- `utils.promisify`
- [Mosh: Node.js in 1 Hour](https://www.youtube.com/watch?v=TlB_eWDSMt4)
- [Friendly Node.js `fs` guide](https://areknawo.com/node-js-file-system-api-beginner-friendly-guide/)
- [Node.js examples to study](https://github.com/tertiarycourses/NodeJSTraining)
- [learnyounode](https://github.com/workshopper/learnyounode) through `MAKE IT MODULAR`

### Other

take your frontend skills above and beyond:

- [client-side-routing](https://github.com/oliverjam/learn-client-side-routing)
- [learn-component-architecture](https://github.com/oliverjam/learn-component-architecture)

</details>
<br>

[TOP](#asynchronous-programming)

---

## Week 1

The Event Loop!

<details>
<summary>expand/collapse</summary>

### Before Class

- The Event Loop
  - [Loupe](http://latentflip.com/loupe/) (+10)
  - [In the Loop](https://www.youtube.com/watch?v=cCOL7MC4Pl0) (+10)
  - `setTimeout` and `setInterval`: [js.info](https://javascript.info/settimeout-setinterval), [Beau](https://www.youtube.com/watch?v=kOcFZV3c75I)
- Isolate
  - 0. Callstack
  - 0. Closure (1. identifying closure)
  - 0. Labeled Logger

### During Class

#### Before Break

- Isolate
  - 1. Event Loop

#### After break

- Integrate
  1. Event Loop

### After Class

_individual project_

Reverse-Engineer [pomofocus.io](https://pomofocus.io/) (minus the Report, Settings and Login buttons). You can use the [classes-starter](https://github.com/HackYourFutureBelgium/classes-starter).

#### Checklist

```md
- [ ] [repo](https://github.com/_/_) (with a complete README)
- [ ] [live demo](https://_.github.io/_)
- Planning
  - [ ] [Backlog](https://github.com/_/_/tree/master/project-planning/backlog.md)
  - [ ] [Development Strategy](https://github.com/_/_/tree/master/project-planning/development-strategy.md)
- Implementation
  - [ ] ES Modules (`import`/`export`)
  - [ ] at least one `class`
  - [ ] at least one `setTimeout` and one `setInterval`
  - [ ] Logs of each user interaction
```

</details>
<br>

[TOP](#asynchronous-programming)

---

## Week 2

Promises & `fetch`

<details>
<summary>expand/collapse</summary>

### Before Class

- Promises
  - [js.info](https://javascript.info/async): 1 -> 4
  - Isolate: 3. Promises
  - [Callbacks, Promises, Async](#callbacks-promises-async)
- APIs & REST
  - [Restful Routes?](https://medium.com/@atingenkay/restful-routes-what-are-they-8fe221521bb)
  - JSON Placeholder:[live](https://jsonplaceholder.typicode.com/guide.html), [more docs](https://github.com/typicode/json-server)
  - [Presentation - Javascript Fetch and REST API](./slides/fetch-and-rest-api.html)
- **DevTools**, the Network Tab:
  - [chrome/ium](https://developers.google.com/web/tools/chrome-devtools/network/)
  - [firefox](https://developer.mozilla.org/en-US/docs/Tools/Network_Monitor)
- [`fetch`](#fetch)
  - Isolate: 4. `fetch` (examples)

### During Class

#### Before Break

- Isolate
  - `fetch`
  - `fetch` REST

#### After Break

- Integrate
  `fetch` REST

### After Class

_individual project_

You've made it this far, time to show off a bit! Build yourself a sick portfolio to showcase all of your work so far. Using the [GitHub API](https://docs.github.com/en/free-pro-team@latest/rest) gather stats, links and collaborators to showcase your best work. You can again use the [classes-starter](https://github.com/HackYourFutureBelgium/classes-starter) repo, and here's a [helpful tutorial](https://www.youtube.com/watch?v=5QlE6o-iYcE) to get you rolling (hint: avoid pushing your GitHub auth token!).

#### Checklist

```md
- [ ] [repo](https://github.com/_/_) (with a complete README)
- [ ] [live demo](https://_.github.io/_)
- Planning
  - [ ] [Backlog](https://github.com/_/_/tree/master/project-planning/backlog.md)
  - [ ] [Development Strategy](https://github.com/_/_/tree/master/project-planning/development-strategy.md)
  - [ ] [Project board](https://github.com/_/_/projects/_)
- Implementation
  - [ ] ES Modules (`import`/`export`)
  - [ ] at least one `class`
  - [ ] at least one call to the GitHub API
  - [ ] Logs of each user interaction
```

Looking for an extra challenge? Try to implement these concepts:

- [learn-component-architecture](https://github.com/oliverjam/learn-component-architecture)
- [client-side-routing](https://github.com/oliverjam/learn-client-side-routing)

</details>
<br>

[TOP](#asynchronous-programming)

---

## Week 3

`async`/`await`

<details>
<summary>expand/collapse</summary>

### Before Class

- `async`/`await`
  - Coding Train: [pt 1](https://www.youtube.com/watch?v=XO77Fib9tSI), [pt 2](https://www.youtube.com/watch?v=chavThlNz3s&feature=emb_rel_pause)
  - [FunFunFunction](https://www.youtube.com/watch?v=568g8hxJJp4)
  - [javascript.info](https://javascript.info/async-await)
- URI encoding: [URI or component?](https://stackoverflow.com/questions/4540753/should-i-use-encodeuri-or-encodeuricomponent-for-encoding-urls), [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent)
- isolate
  - 6. `await` vs. `then`
  - 7. `async`/`await` - `fetch` (examples)

### During Class

#### Before Break

- isolate
  - 7. `async`/`await` - `fetch` (exercises)
  - 8. `async`/`await` - `fetch` REST

#### After Break

- [integrate](./integrate/README.md)
  - 3. `async`/`await` refactor

### After Class

_group project_

Remember todo lists? Here's another to add to yours :) There are more detailed instructions in `INSTRUCTIONS.md`

- [restful-pjs](https://github.com/HackYourFutureBelgium/restful-pjs).

#### Checklist

```md
- [ ] [repo](https://github.com/_/_) (with a complete README)
- Planning
  - [ ] [Backlog](https://github.com/_/_/tree/master/project-planning/backlog.md)
  - [ ] [Development Strategy](https://github.com/_/_/tree/master/project-planning/development-strategy.md)
  - [ ] [Project board](https://github.com/_/_/projects/_)
- Implementation
  - [ ] ES Modules (`import`/`export`)
  - [ ] at least one `class`
  - [ ] `async`/`await`
  - [ ] Logs of each user interaction
- [ ] [deployed demo]() (optional challenge)
```

#### Deployment (challenge)

Because this project has a backend it's not possible to deploy it with GitHub Pages. Choose one person in your group to be responsible for _dev-ops_ and _deployment_. There's more info on deployment in the starter repository.

</details>
<br>

[TOP](#asynchronous-programming)

---

## Class Recordings

- **Students**: Here you can find recordings of this module from past classes. Enjoy!
- **Coaches**: When sending your PR's with links please ...
  - Indicate which class you were teaching
  - Which week it was (if the module is more than 1 week)
  - Give your name
  - and a helpful description

---

### Class 7 & 8

> [Anthony](https://github.com/Toinne/), [Kevin](https://github.com/kevintss/)

1. week 1:
   - Part 1: [The Event Loop](https://vimeo.com/406780143)
   - Part 2: [Whack-a-Mole](https://vimeo.com/408313126)
2. week 2:
   - Part 1: [`fetch` & REST](https://vimeo.com/409437916)
   - Part 2: [Explore Users](https://vimeo.com/409459062)
3. week 3:
   - Part 1: [`import` and `export`](https://vimeo.com/412299042)
   - Part 2: [Explore Pokemon](https://vimeo.com/412616444)

---

### [class-9-10](https://github.com/hackyourfuturebelgium/class-9-10)

> [Bram](https://github.com/bramdevries), [Deni](https://github.com/denichodev)

1. week 1:
   - Part 1: [Isolate - The Event Loop](https://vimeo.com/459858141)
   - Part 2: [Integrate - Event Loop](https://vimeo.com/460082162)
   - Part 3: [Recap & Project Intro](https://vimeo.com/460082763)
1. week 2:
   - Part 1: [Isolate - Fetch & REST](https://vimeo.com/462531506)
   - Part 2: [Integrate - Fetch & REST](https://vimeo.com/462536889)
1. week 3:
   - Part 1: [Isolate - `async`/`await`](https://vimeo.com/465272582)
   - Part 2: [Integrate - `async`/`await`](https://vimeo.com/465276266)
   - Wednesday Review: [Deploying to Heroku](https://vimeo.com/466119979)

### [class-11-12](https://github.com/hackyourfuturebelgium/class-11-12)

> [Bram](https://github.com/bramdevries), [Thibault](https://github.com/ThibaultLesuisse)

1. week 1: Scheduling & The Event Loop. `setTimeout`, `setInterval`
   - [slides](./slides/week-1-bram.pdf)
   - [isolate](https://vimeo.com/507186101)
   - [integrate](https://vimeo.com/507186832)
   - [homework](https://vimeo.com/507187398)
   - [wednesday review](https://vimeo.com/508373774)
2. week 2: Promises & `fetch`
   - [slides](./slides/week-2-bram.pdf)
   - [isolate](https://vimeo.com/509470203), [exercises](https://vimeo.com/509470785)
   - [integrate](https://vimeo.com/509471044), [exercises](https://vimeo.com/509470529)
   - [homework](https://vimeo.com/509471326)
