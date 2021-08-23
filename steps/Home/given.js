import { Given } from "@cucumber/cucumber";
import goToPage from "../../support/actions/goToPage";

Given(/^the browser is at the "(Home|Login)" page$/, page => {
  goToPage(page);
});