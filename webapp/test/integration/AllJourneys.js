/*global QUnit*/

jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 KredaSet in the list
// * All 3 KredaSet have at least one Orders

sap.ui.require([
	"sap/ui/test/Opa5",
	"git/zkeren_git/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"git/zkeren_git/test/integration/pages/App",
	"git/zkeren_git/test/integration/pages/Browser",
	"git/zkeren_git/test/integration/pages/Master",
	"git/zkeren_git/test/integration/pages/Detail",
	"git/zkeren_git/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "git.zkeren_git.view."
	});

	sap.ui.require([
		"git/zkeren_git/test/integration/MasterJourney",
		"git/zkeren_git/test/integration/NavigationJourney",
		"git/zkeren_git/test/integration/NotFoundJourney",
		"git/zkeren_git/test/integration/BusyJourney"
	], function () {
		QUnit.start();
	});
});