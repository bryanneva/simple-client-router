import { Subscriber, Subscription } from "./Subscription";
export declare class Observable {
    private id;
    private subscribers;
    subscribe(subscriber: Subscriber): Subscription;
    getSubscribers(): Subscription[];
    unsubscribe(subscription: Subscription): void;
    updateSubscribers(): void;
}
