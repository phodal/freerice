define([
	'jquery',
	'underscore',
	'mustache',
	'js/lib/User',
	'js/lib/UserSession'
],function($, _, Mustache, User, UserSession){
	'use strict';
	var Logout = function(){

	};

	Logout.prototype.logout = function(){
		UserSession.remove();
	};

	return Logout;
});