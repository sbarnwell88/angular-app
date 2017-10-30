describe('Users service', function() {
    var Users;

    beforeEach(angular.mock.module('userApp'));

    beforeEach(inject(function(_userService_) {
        userService = _userService_;
    }));

    it('should exist', function() {
        expect(Users).toBeDefined();
    });
});