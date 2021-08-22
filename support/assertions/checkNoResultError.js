import catalog from "../../pages/Catalog";
import assert from "assert";

export default () => {
    const noResulterrorMessage = catalog.noResultsErrorMessage;

assert(
    noResulterrorMessage
    .getText()
    .includes("No results were found for your search"),
    "No results error message was not found"
);
};