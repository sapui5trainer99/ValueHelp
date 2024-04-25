/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"valuehelp/valuehelp/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
