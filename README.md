# Shall Eat?

React web application that picks restaurants for you!
Each restaurants business hour will be shown as remaining time until closing or opening. Also, this remaining time keeps updating every second. Thus, if somebody asks you "when will Sohyang Korean restaurant be opening?, you can say something like "Oh, the restaurant will be opening in 1hours 24munitues 25 seconds" or "the restaurant will be closing in 2hours 18munitues 38seconds" **without having to check current time and calculate the difference between current time and closing or opening hour.** I hope you will enjoy with ShallEat. Thank you 😁

## Demo

> 👇 Pick for me button demo. (green = {openNow: true), dark = {openNow: false})

> <img src="./gifs/pick_me_btn_demo.gif" width="500" height="300" />

> 👇 Main search box demo.

> <img src="./gifs/main_search_box_demo.gif" width="500" height="300" />

> 👇 Another main search box demo. (This search box accepts other mesures as well)

> <img src="./gifs/main_search_box_demo_2.gif" width="500" height="300" />

> 👇 Restaurant info box demo.

> <img src="./gifs/info_box_demo.gif" width="300" height="500" />

## Getting Started

This application needs backend server that provides REST API to authenticate users and recieve restaurant data. In Prerequisites, there is an instruction to clone that server as well.

### Prerequisites

1.  You need to install npm or yarn.
2.  You need to get Google Map API(for frontend) and ~~Google Place API(for backend) here is link(https://cloud.google.com/maps-platform/)~~
3.  Assign google map api key to `googleMapAPI`. You can find this variable by typing 👇 commands in terminal after you clone this repository.
    <u>some text</u>
    ~~

```
$ __cd ShallEat-React__

$ mv src/requests/example_configuration.js src/requests/configuration.js

$ open src/requests/configuration.js
```

4.  After you store map api key, then follow next instruction.

### Installing

This command to set up REST API server. (100% JavaScript)

```
$ git clone git@github.com:sunny-heo/ShallEat-API.git
```

The rest of setup instruction for the server is available here 👇:  
 https://github.com/sunny-heo/ShallEat-API

This command to clone ShallEat-React application (98% JavaScript)

```
$ git clone git@github.com:sunny-heo/ShallEat-React.git
```

Install packages with npm or yarn

```
$ npm install
$ yarn install
```

Run server

```
$ npm start
$ yarn start
```

\*\* ~~Since this application is running by fetching data from the server, if you did't set up and run ShallEat-API server yet, this application will not work as expected.~~

## Deployment

This application has not been deployed yet, but the web API server has been deployed on Heroku. Thus, you do not need to set up backend server on your local machine to run this application.

## Built With

- react
- recompose
- google-map-react
- daemonite-material
- react-animated-css
- react-star-ratings
- reactstrap
- moment
- animejs
- react-tippy

## Usage

There are two seach box, one at the navbar(main search box), another at the right above the review list.

1.  Main search box

- Type "`Keyword` in `radius`" eg. "`Korean restaurants` in `10km`"
- This serach box support following units:
  - mile(miles)
  - cm
  - m
  - km
  - inch(inches)
  - yard
  - foot

2.  Second search box

- Type "`restaurant name`" eg. "`A&W`"
- This will only display matching restaurants in reveiw list and markers on google map
