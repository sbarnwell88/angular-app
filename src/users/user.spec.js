describe('Users Controller', function()   {
    // declaring variables for global scope
    var controller,
        scope,
        rootScope,
        vmUsers,
        userService,
        httpBackend,
        q,
        timeout;
    beforeEach(angular.mock.module('userApp'));
    beforeEach(inject(function($injector) {
        // grabbing user service
        userService = $injector.get('userService');
        // angular promise library
        q = $injector.get('$q');
        // built in angular controller service. Ability to create controller from test. Constructor
        //allows us to create the blueprint
        //take user controller and create a new instance of it
        // controller has the blueprint and scope properties 
        controller = $injector.get('$controller');
        // scoperoot is parent of scope. Across the app. Touches multiple controllers 
        // data model object acting as the "view". One per controller
        // data that you're putting in this instance
        // scope = object
        scope = {};
        //angular's library to set timeouts
        timeout = $injector.get('$timeout');
        // setting up test data 
        var users = [{name: "Benjamin", email: "beniscool@gmail.com"}];
        var user = {name: "benjamin", email: "sample email"};
        //created listener to watch functions 
        //mock functions 
        // return data we tell it to
        // first parameter is the service we're gonna be watching
        // second parameter is the function you wanna watch 
        // return value = mock it and return fake data back
        // resolving the promise 
        spyOn(userService, 'getUsers').and.returnValue(q.resolve({data: users}));
        spyOn(userService, 'createUser').and.returnValue(q.resolve({data: user}));
        // controller created a new instance of the controller 
        // copies userCtrl for us and it passes the scope (empty object)
        vmUsers = controller('MainCtrl', {$scope: scope});
    }));
    describe('getUsers', function() {
        fit('it should get all users', function() {
            // calls getUsers in the instance of the controller we created
            // calls userService.getUser
            // spyOn returns data from promise
            vmUsers.getUsers();
            // force promise to resolve
            timeout.flush();
            // expect for data to look correct
            expect(vmUsers.users[0]).toEqual({name: "Benjamin", email: "beniscool@gmail.com"});
            // spy comes into play. Just saying that this should have been called
            expect(userService.getUsers).toHaveBeenCalled();
        });
    });
});