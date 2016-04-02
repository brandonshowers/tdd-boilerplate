;(function () {
  // Node
  if (typeof module !== "undefined") {
    module.exports = boilerplate;
  }
  // Browser
  if (typeof window !== "undefined") {
    !window.boilerplate && (window.boilerplate = boilerplate);
  }

  function boilerplate() {
    return "boilerplate";
  }

})();
