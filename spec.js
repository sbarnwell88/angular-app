describe('Angular Demo App', function() {
    it('should have a title', function() {
        browser.get('http://localhost:3001');

        expect(browser.getTitle()).toEqual('Fun User Page');
    })
})