"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Subscription = void 0;
var Subscription = /** @class */ (function () {
    function Subscription(observable, subscriber, id) {
        this.observable = observable;
        this.subscriber = subscriber;
        this.id = id;
    }
    Subscription.prototype.unsubscribe = function () {
        this.observable.unsubscribe(this);
    };
    Subscription.prototype.update = function () {
        this.subscriber();
    };
    return Subscription;
}());
exports.Subscription = Subscription;
