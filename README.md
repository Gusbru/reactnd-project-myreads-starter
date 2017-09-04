This is the final project for Udacity's React Fundamentals course, developed by [React Training](https://reacttraining.com). This application enables you to search and save books in your personal bookshelf. You can organize your books in three different shelves: Currently Reading, Wanto to Read and Read.


## Installation
To install this application you need to install the [Node JS](https://nodejs.org) server framework. Follow the instructions on the webpage to install Node JS for your plataform (Windows/Mac/Linux).

To manage the NodeJS packages you can use both [NPM](https://www.npmjs.com/)] or [YARN](https://yarnpkg.com/). Fell free to choose the option that best fit your needs. Here, we are going to give the instructions using NPM, however, the instructions for YARN should be similar. 

After install NodeJS and one package manager (NPM or YARN), you need to install the `create-react-app` (you may need the administrator password in this step):

```
npm install -g create-react-app
```

After install the `create-react-app` you can clone the repository, using git:

```
git clone https://github.com/Gusbru/reactnd-project-myreads-starter.git
```

After download the application, you need to install the packages necessary by the application. Enter in the application directory and type:

```
npm install
```

When the download is finished, you need to start the server:

```
npm start
```

If everything went well until here, you should see a message in the screen that the app was compiled successfully and it is running at `http://localhost:3000/`. 

If the browser did not open automatically, open a new window an type:

```
http://localhost:3000/
```

You shold see your initial bookshelf.


## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results. 

