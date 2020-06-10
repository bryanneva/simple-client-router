"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Observable = void 0;
var Subscription_1 = require("./Subscription");
var Observable = /** @class */ (function () {
    function Observable() {
        this.id = 0;
        this.subscribers = [];
    }
    Observable.prototype.subscribe = function (subscriber) {
        var subscription = new Subscription_1.Subscription(this, subscriber, this.id++);
        this.subscribers.push(subscription);
        return subscription;
    };
    Observable.prototype.getSubscribers = function () {
        return this.subscribers;
    };
    Observable.prototype.unsubscribe = function (subscription) {
    };
    Observable.prototype.updateSubscribers = function (value) {
        this.subscribers.forEach(function (subscriber) { return subscriber.update(value); });
    };
    return Observable;
}());
exports.Observable = Observable;
