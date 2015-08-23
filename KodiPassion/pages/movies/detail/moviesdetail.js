﻿/// <reference path="../../../dist/kodi.js" />
(function () {
    "use strict";

    WinJS.UI.Pages.define("/pages/movies/detail/moviesdetail.html", {
        processed: function (element, options) {
            var page = this;
            page.movie = options.movie;
            
            return WinJS.Binding.processAll(element, options.movie);
        },

        unload: function () {
            // TODO: Respond to navigations away from this page.
        },

        updateLayout: function (element) {
            /// <param name="element" domElement="true" />

            // TODO: Respond to changes in layout.
        }
    });
})();