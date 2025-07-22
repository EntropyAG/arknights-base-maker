/**
 * The following listeners are executed on script load, since they apply to
 * elements that are not removed/added
 */

// Target dummies

document.getElementById("plan").addEventListener("click", (e) => {
    kroosterAdapter.retrieve(document.getElementById("krooster").value);
});