/*global QUnit*/

jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

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
		"git/zkeren_git/test/integration/NavigationJourneyPhone",
		"git/zkeren_git/test/integration/NotFoundJourneyPhone",
		"git/zkeren_git/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});