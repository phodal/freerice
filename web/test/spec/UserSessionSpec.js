define([
    'js/lib/UserSession'
], function(UserSession) {
    'use strict';

    describe("User Session", function() {
        it("should return default name,accessToken be null", function() {
            expect(UserSession.defaults.userName).toBe(null);
            expect(UserSession.defaults.accessToken).toBe(null);
        });

        it("should be authenticated after save session", function() {
            UserSession.save({
                name: "test",
                accessToken: "test"
            });
            expect(UserSession.authenticated()).toBe(true);
        });

        it("should can load session after save session", function() {
            UserSession.save({
                name: "test",
                accessToken: "test"
            });
            spyOn(UserSession, 'load');
            UserSession.initialize();
            expect(UserSession.load).toHaveBeenCalled();
        });
    });
});
