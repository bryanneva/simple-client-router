import {Observable} from "./Observable";

export type Subscriber = () => void;

export class Subscription {
  constructor(
    readonly observable: Observable,
    readonly subscriber: Subscriber,
    readonly id: number) {
  }

  unsubscribe() {
    this.observable.unsubscribe(this);
  }

  update() {
    this.subscriber()
  }
}
