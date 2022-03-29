# People of Middle-Earth

### TODO:
- [ ] Task 1
- [ ] Task 1
- [ ] Task 1
- [ ] Task 1
- [ ] Task 1

## Pitch
People of Middle-Earth is a React JS interactive search engine website to search through over 900 characters in the Lord Of the Rings franchise using the [the-one-api](https://the-one-api.dev/). 

As a user:
I want to input a name in the search bar.
So that I can search and view the character with that name in the Lord of the Ring universe.

As a user: 
I want to use advanced search options.
So that I can filter characters based on their location, age, race, and gender.

## WireFrame
![wireframe image](wireframe.png)


## Setup
Our `src` folder contains the following:

```txt
src/
├── index.js
├── index.css
└── components/
    ├── App.js
    ├── Search.js
    ├── SearchForm.js
    ├── AdvancedFilter.js
    ├── CharactersContainer.js
    └── Character.js
```
Each character property has:
* name	
* wikiUrl	
* race	
* birth	
* gender	
* death	
* hair	
* height	
* realm	
* spouse	
* _id



## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.
