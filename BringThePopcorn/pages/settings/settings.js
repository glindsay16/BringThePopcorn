﻿var BtPo;
(function (BtPo) {
    var UI;
    (function (UI) {
        var Pages;
        (function (Pages) {
            var SettingsPage = (function () {
                function SettingsPage() {
                }
                SettingsPage.prototype.processed = function (element, options) {
                };
                SettingsPage.prototype.pageNavActivate = function () {
                    this.serversettings.renderSettings();
                };
                SettingsPage.url = "/pages/settings/settings.html";
                return SettingsPage;
            })();
            Pages.SettingsPage = SettingsPage;
            WinJS.UI.Pages.define(SettingsPage.url, SettingsPage);
        })(Pages = UI.Pages || (UI.Pages = {}));
    })(UI = BtPo.UI || (BtPo.UI = {}));
})(BtPo || (BtPo = {}));

//# sourceMappingURL=settings.js.map
