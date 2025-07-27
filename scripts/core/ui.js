/**
 * The following listeners are executed on script load, since they apply to
 * elements that are not removed/added
 */

document.getElementById("plan").addEventListener("click", (e) => {
    kroosterAdapter.fetchKroosterApiUserData(document.getElementById("krooster").value);
});