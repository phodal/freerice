define([
        'jquery'
    ],function ($) {
        'use strict';
        function setItem(key, value, showError) {
            try { window.localStorage.setItem(key, value); }
            catch (ignore) {}
        }

        function getItem(key, showError) {
            try { return window.localStorage.getItem(key); }
            catch (ignore) {}
        }
        function removeItem(key, showError) {
            try { return window.localStorage.removeItem(key); }
            catch (ignore) {}
        }
        function checkItem(key, showError) {
            try {
                var isFound = false;
                if (window.localStorage.hasOwnProperty(key)) {
                    isFound = true;
                }
                return isFound;
            }
            catch (ignore) {}
        }

        function setItemFromObject(key, data) {
            if (!this.getItem(key)) {
                this.setItem(key, "{}");
            }

            var value = JSON.parse(this.getItem(key)) || {};
            var i;
            for (i in data) {
                if (data.hasOwnProperty(i)) {
                    value[i] = data[i];
                }
            }
            this.setItem(key, JSON.stringify(value));
        }

        function getPropertyFromItem(key, property) {
            var returnValue = "",
                value = this.getItem(key);

            if (value) {
                value = JSON.parse(value) || {};
                returnValue = value[property];
            }
            return returnValue;
        }

        return {
            "getItem": getItem,
            "setItem": setItem,
            "removeItem": removeItem,
            "checkItem": checkItem,
            "setItemFromObject": setItemFromObject,
            "getPropertyFromItem": getPropertyFromItem
        };
    }
);
