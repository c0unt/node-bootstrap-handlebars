// Set up routes for the app

module.exports = function(app) {

	var index = require('../app/controllers/index');
	app.get('/', index.index);

    var auth = require('../app/controllers/auth');
    app.post('*login', auth.login);
    app.get('*login', auth.login);
    app.get(['/auth','/home','/ag'], auth.checksession)
    app.get('/auth/test', auth.test);
    app.get('*logout', auth.logout);
    app.get('/auth/getUserMenu', auth.getUserMenu);



    //   var dashboard = require('../app/controllers/test');
 //   app.get('/dashboard', test.dashboard);

 //    var test = require('../app/controllers/test');
 //    app.get('/test', test.index);



    var home = require('../app/controllers/home');
    app.get('/home', home.index);
    app.get('/home/test', home.test);


    var ag = require('../app/controllers/ag/index');
    app.get('/ag', ag.index);
    app.get('/ag/addGuest', ag.addGuest);
    app.get('/ag/getGuest', ag.getGuest);



}

