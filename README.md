# Music Library for React/Redux Course
Our goal will be to build a website that will allow a user to search for an artist and see a list of songs.
A user will be able to click on a song to open a "detail" view of that song.

The itunes API is used to allow users to search keywords, including artist's name
and song title. The keyword search retrieves data from the API.

This project was forked from https://github.com/HackerUSA-CE/RR-Music-Library main branch.
# Purpose
- ✨ To build a music library interface that searches for music and catalogs it, in sort. 
Allowed author to practice React fundamentals like dataflow(using FETCH and managing state among components).
- ✨ Name: Music Library
# Design/look
     * Styling: React Bootstrap
     * Colors: Minimal but would like to improve (see Future Tasks)
     * Images: any pictures are provided by the iTunes API

## Project Wireframe/Structure:
  * A simple index page with a search bar and prompt to "Search for Music!" Submit and any relevant data will appear.
  * Clicking on any of the tiles will provide an image and further data pertaining to what was clicked on.
  * Another click on a link will route user to a page that should load even more details 
    ^ this route is VERY slow, currently and needs addtional debugging (FUTURE TASK)

---
### Languages and Tools :
 - ✨ Front-end: React, Bootstrap & React Bootstrap, CSS
 - ✨ Back-end: Javascript (MC skeleton)
 - ✨ Database: iTunes API
 - ✨ Other concepts: useEffect, useState, importing, DataContext, useContext, useRef()

---
## ✨ Future Tasks✨
 - Use CSS/Sass to improve styling
 - use Python to imporve backend fuctionality (Python was taught after this porject was worked on)
 - debug slow loading of routes

## ✨ Requirements/useful tools
* Any Operating System (ie. MacOS X, Linux, Windows)
* Internet Browser (ie. Google Chrome)
* Source Code Editor (ie. VSCode)
* MongoDB Compass/Atlas
* Postman (for Backend testing if needed)

## Available Scripts
In the project directory, you can run:
### `npm start`
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
The page will reload when you make changes.\
You may also see any lint errors in the console.

## 👤 Author(s)
* Katie Eells: [@kleells](https://github.com/kleells)

## 📝 License
MIT License

Copyright (c) 2022 brentonring

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).