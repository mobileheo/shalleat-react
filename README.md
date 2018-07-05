# Shall Eat?

React web application that picks restaurants for you!

## Demo

> 👇 Pick for me button demo

> <img src="./gifs/pick_me_btn_demo.gif" width="500" height="300" />

> 👇 Main search box demo

> <img src="./gifs/main_search_box_demo.gif" width="500" height="300" />

## Getting Started

This application needs backend server that provides REST API to authenticate users and recieve restaurant data. In Prerequisites, there is an instruction to clone that server as well.

### Prerequisites

1.  You need to install npm or yarn.
2.  You need to get Google Map API and Google Place API(for backend) here is link (https://cloud.google.com/maps-platform/)
3.  Assign google map api key to `googleMapAPI`. You can find this variable by typing 👇 in terminal after you clone this repository.

```
$ cd ShallEat-React
$ open src/requests/example_configuration.jsgit@github.com:sunny-heo/ShallEat-API.git
```

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

\*\* Since this application is running by fetching data from the server, if you did't set up and run ShallEat-API server yet, this application will not work as expected.

## Deployment

This application has not been deployed yet, but will be deployed soon on AWS and Heroku.

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
  - mile,
  - cm
  - m
  - km
  - inch
  - yard
  - foot

2.  Second search box

- Type "`restaurant name`" eg. "`A&W`"
- This will only display matching restaurants in reveiw list and markers on google map
