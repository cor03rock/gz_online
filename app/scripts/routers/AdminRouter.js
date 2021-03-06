define( function ( require ) {
	'use strict';

	var Marionette       = require( 'marionette' );
	var MiddlewareRouter = require( 'MiddlewareRouter' );

	return Marionette.MiddlewareRouter.extend( {
		'appRoutes' : {
			'admin/users'     : 'showUsers',
			'admin/assessors' : 'showAssessors',
			'admin/skills'    : 'showSkills',
			'admin*action'    : 'showUsers'
		}
	} );

} );
