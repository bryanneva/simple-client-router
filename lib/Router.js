"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Router = void 0;
var Observable_1 = require("./Observable");
var Router = /** @class */ (function (_super) {
    __extends(Router, _super);
    function Router(currentRoute) {
        var _this = _super.call(this) || this;
        _this.currentRoute = currentRoute;
        _this.routes = {};
        return _this;
    }
    Router.prototype.getCurrentPath = function () {
        return this.currentRoute || '';
    };
    Router.prototype.register = function (name, matcher) {
        var route = { matcher: matcher, name: name };
        this.routes[route.name] = route;
        return route;
    };
    Router.prototype.goTo = function (name) {
        if (name in this.routes) {
            this.currentRoute = name;
            window.history.pushState({ page: name }, name, "/" + name);
            this.updateSubscribers();
        }
        else {
            throw new Error("Route " + name + " not registered");
        }
    };
    return Router;
}(Observable_1.Observable));
exports.Router = Router;
