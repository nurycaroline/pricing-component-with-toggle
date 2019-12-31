"use-strict";

const handlePeriod = e => {
  e.preventDefault();
  document.getElementById("input-period").checked = !document.getElementById(
    "input-period"
  ).checked;

  checkedElements();
};

const checkedElements = () => {
  if (document.getElementById("input-period").checked) {
    const annually = document.getElementsByClassName("annually");
    Array.from(annually).map(p => p.classList.add("hidden"));

    const monthly = document.getElementsByClassName("monthly");
    Array.from(monthly).map(p => p.classList.remove("hidden"));
  } else {
    const monthly = document.getElementsByClassName("monthly");
    Array.from(monthly).map(p => p.classList.add("hidden"));

    const annually = document.getElementsByClassName("annually");
    Array.from(annually).map(p => p.classList.remove("hidden"));
  }
};

(function() {
  document.getElementById("period").addEventListener("click", handlePeriod);
  // checkedElements();
})();
