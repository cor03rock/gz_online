define( function( require ) {
	'use strict';

	var Marionette = require( 'marionette' );

	var Communicator = Marionette.Controller.extend( {
		initialize: function( options ) {
			console.log( "initialize a Communicator" );

	var Communicator = Marionette.Controller.extend( {
		initialize: function () {
			// create a pub sub
			this.mediator = new Backbone.Wreqr.EventAggregator();

			//create a req/res
			this.reqres = new Backbone.Wreqr.RequestResponse();

			// create commands
			this.command = new Backbone.Wreqr.Commands();
		}
	} );

	return new Communicator();

} );