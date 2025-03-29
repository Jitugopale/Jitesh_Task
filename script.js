const bundleForm = document.getElementById("bundleForm");
const totalValue = document.getElementById("totalValue");
const bundles = document.querySelectorAll(".bundle-option");

function updateTotal() {
  const selectedOption = document.querySelector('input[name="bundle"]:checked');
  if (!selectedOption) return;
  const newPrice = selectedOption.value;
  totalValue.textContent = `$${newPrice} USD`;
}

const bundleOptions = document.querySelectorAll(".bundle-option");

bundleOptions.forEach((option) => {
  const label = option.querySelector(".option-label");
  const expandable = option.querySelector(".expandable-content");

  label.addEventListener("click", () => {
    if (expandable.classList.contains("expanded")) {
      expandable.classList.remove("expanded");
    } else {
      document.querySelectorAll(".expandable-content").forEach((el) => {
        el.classList.remove("expanded");
      });
      expandable.classList.add("expanded");
    }
  });
});

bundles.forEach(bundle => {
  bundle.addEventListener("click", function () {
      bundles.forEach(b => b.classList.remove("selected"));
      this.classList.add("selected");
      const radio = this.querySelector("input[type='radio']");
      if (radio) {
          radio.checked = true;
      }
  });
});

bundleForm.addEventListener("change", updateTotal);

updateTotal();
