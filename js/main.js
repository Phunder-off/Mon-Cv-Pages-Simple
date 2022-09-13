const btn = document.getElementById("btn-hb");

btn.addEventListener("click", () => (btn.dataset.enable = !(btn.dataset.enable == "true")));
