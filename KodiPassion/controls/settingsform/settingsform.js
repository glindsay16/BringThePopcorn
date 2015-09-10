﻿var KodiPassion;
(function (KodiPassion) {
    var UI;
    (function (UI) {
        var SettingsFormControl = (function () {
            function SettingsFormControl() {
            }
            Object.defineProperty(SettingsFormControl.prototype, "setting", {
                get: function () {
                    return this.dataForm.item;
                },
                set: function (val) {
                    this.dataForm.item = val;
                },
                enumerable: true,
                configurable: true
            });
            SettingsFormControl.prototype.init = function (element, options) {
                element.classList.add("settingsformcontrol");
            };
            SettingsFormControl.prototype.ready = function (element, options) {
            };
            SettingsFormControl.prototype.validate = function () {
                return this.dataForm.validate();
            };
            SettingsFormControl.url = "/controls/settingsform/settingsform.html";
            return SettingsFormControl;
        })();
        UI.SettingsFormControl = SettingsFormControl;
        UI.SettingsForm = WinJS.UI.Pages.define(SettingsFormControl.url, SettingsFormControl);
    })(UI = KodiPassion.UI || (KodiPassion.UI = {}));
})(KodiPassion || (KodiPassion = {}));
//# sourceMappingURL=settingsform.js.map