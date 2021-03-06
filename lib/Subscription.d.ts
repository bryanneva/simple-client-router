import { Observable } from "./Observable";
export declare type Subscriber = (value?: any) => void;
export declare class Subscription {
    readonly observable: Observable;
    readonly subscriber: Subscriber;
    readonly id: number;
    constructor(observable: Observable, subscriber: Subscriber, id: number);
    unsubscribe(): void;
    update(value?: any): void;
}
