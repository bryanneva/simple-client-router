import {Observable} from "./Observable";

export interface Route {
  readonly matcher: string
  readonly name: string
}

export interface RouteRegistry {
  [name: string]: Route
}

interface RouterConfig {
  currentRoute?: string
  routes?: RouteRegistry
}

export class Router extends Observable {
  private currentRoute: string;
  readonly routes: RouteRegistry;

  constructor(config: Partial<RouterConfig> = {}) {
    super();
    this.currentRoute = config.currentRoute || '';
    this.routes = config.routes || {};
  }

  getCurrentPath(): string {
    return this.currentRoute;
  }

  register(name: string, matcher: string): Route {
    const route = {matcher, name};
    this.routes[route.name] = route;
    return route;
  }

  goTo(name: string): void {
    if (name in this.routes) {
      this.currentRoute = name;
      window.history.pushState({page: name}, name, `/${name}`);
      this.updateSubscribers(name);
    } else {
      throw new Error(`Route ${name} not registered`);
    }
  }
}
