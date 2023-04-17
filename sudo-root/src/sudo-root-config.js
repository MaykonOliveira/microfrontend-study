import { registerApplication, start } from "single-spa";
import {
  constructApplications,
  constructRoutes,
  constructLayoutEngine,
} from "single-spa-layout";
import microfrontendLayout from "./microfrontend-layout.html";

const routes = constructRoutes(microfrontendLayout);
const applications = constructApplications({
  routes,
  loadApp({ name }) {
    return System.import(name);
  },
});
const layoutEngine = constructLayoutEngine({ routes, applications });

registerApplication({
  name: "@sudo/sudo-navbar",
  app: () => System.import("@sudo/sudo-navbar"),
  activeWhen: "/",
});

registerApplication({
  name: "@sudo/sudo-clients",
  app: () => System.import("@sudo/sudo-clients"),
  activeWhen: "/clients",
});

registerApplication({
  name: "@sudo/sudo-business",
  app: () => System.import("@sudo/sudo-business"),
  activeWhen: "/business",
});

layoutEngine.activate();

start({
  urlRerouteOnly: true,
});
