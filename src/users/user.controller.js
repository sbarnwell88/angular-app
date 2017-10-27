(function () {
    angular.module('userApp').controller('MainCtrl', MainCtrl);

    function MainCtrl(_userService_, $scope) {
        var vmUsers = this;
        var userService = _userService_;

        vmUsers.users = [];
        vmUsers.newUser = {};
        vmUsers.getUsers = getUser;
        vmUsers.createUser = createUser;
        vmUsers.deleteUser = deleteUser;

        function init() {
            vmUsers.getUsers();
        }

    init();

    function getUser() {
        return userService.getUsers().then(function(res) {
            console.log(res.data);
            vmUsers.users = res.data;
        });
    }

    function createUser(newUser) {
        return userService.createUser(newUser).then(function(res) {
            console.log(res.data)
            vmUsers.users.push(res.data);
            vmUsers.newUser = {};
            vmUsers.newUser = '';
        });
    }

    function deleteUser(user) {
        return userService.deleteUser(user.id).then(function(res) {
            _.pull(vmUsers.users, user);
        }, function(res) {
            _.pull(vmUsers.users, user);
        });
    }
}
})();



