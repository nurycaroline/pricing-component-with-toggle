"use-strict";

const handlePeriod = e => {
  e.preventDefault();
  
  const elInputPeriod = document.getElementById("input-period");
  elInputPeriod.checked = !elInputPeriod.checked;

  checkedElements();
};

const checkedElements = () => {
  const elAnnually = document.getElementsByClassName("annually");
  const elMonthly = document.getElementsByClassName("monthly");

  const arrAnnually = Array.from(elAnnually);
  const arrMonthly = Array.from(elMonthly);

  if (document.getElementById("input-period").checked) {
    arrAnnually.map(p => p.classList.add("hidden"));
    arrMonthly.map(p => p.classList.remove("hidden"));
  } else {
    arrMonthly.map(p => p.classList.add("hidden"));
    arrAnnually.map(p => p.classList.remove("hidden"));
  }
};

(function() {
  document.getElementById("period").addEventListener("click", handlePeriod);
})();
