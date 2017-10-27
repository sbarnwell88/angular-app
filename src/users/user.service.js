(function () {

angular.module('userApp').factory('userService', userService);
//angular.module goes and finds the module we created
// factory is a constructor/helper methods
//takes 2 parameters: what you name it and its properties 

function userService($http) {
    //this is where we get the properties
    // properties are set equal to functions that we defined right underneath
    return {
        getUsers : getUsers,
        createUser: createUsers,
        deleteUser: deleteUser
    }


function getUsers() {
    return $http.get('http://jsonplaceholder.typicode.com/users');
}

function createUsers(user) {
    return $http.post('http://jsonplaceholder.typicode.com/users', user);
}

function deleteUser(id) {
    return $http.delete('http://jsonplaceholder.typicode.com/users/' + id)
}
}

})();
