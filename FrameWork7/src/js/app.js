//import $ from 'dom7';
//import Framework7 from 'framework7';

import Framework7, { getDevice } from 'framework7';

// Import F7 Styles
import 'framework7/css/bundle';

// Import Icons and App Custom Styles
import '../css/icons.css';
import '../css/app.scss';


// Import Routes
import routes from './routes.js';
// Import Store
import store from './store.js';

// Import main app component
import App from '../app.f7';

// Import additional components
import Searchbar from 'framework7/components/searchbar/';
import Calendar from 'framework7/components/calendar/';
import Popup from 'framework7/components/popup/';

// Import components styles
import 'framework7/components/searchbar/css';
import 'framework7/components/calendar/css';
import 'framework7/components/popup/css';


var app = new Framework7({
  // App root element
  el: '#app',
  // App Name
  name: 'My App',
  // Enable swipe panel
  panel: {
    swipe: true,
  },
  // Add default routes
  routes: [
    {
      path: '/about/',
      url: 'about.html',
    },
  ],
  // ... other parameters
});

// Import core framework
//import Framework7 from 'framework7';

// Install F7 Components using .use() method on class:
Framework7.use([Searchbar, Calendar, Popup]);

// Init app
var device = getDevice();

var mainView = app.views.create('.view-main');