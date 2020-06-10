import {Observable} from "./Observable";

export type Subscriber = (value?: any) => void;

export class Subscription {
  constructor(
    readonly observable: Observable,
    readonly subscriber: Subscriber,
    readonly id: number) {
  }

  unsubscribe() {
    this.observable.unsubscribe(this);
  }

  update(value?: any) {
    this.subscriber(value);
  }
}
