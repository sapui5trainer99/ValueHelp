/*global QUnit*/

sap.ui.define([
	"valuehelp/valuehelp/controller/Value_help.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Value_help Controller");

	QUnit.test("I should test the Value_help controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
