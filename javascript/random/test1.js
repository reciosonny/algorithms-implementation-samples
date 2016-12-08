"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AnotherClass = (function () {
    function AnotherClass() {
    }
    Object.defineProperty(AnotherClass.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (v) {
            this._value = v;
        },
        enumerable: true,
        configurable: true
    });
    return AnotherClass;
}());
var ClassName = (function (_super) {
    __extends(ClassName, _super);
    function ClassName() {
        _super.apply(this, arguments);
    }
    return ClassName;
}(AnotherClass));
