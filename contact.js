document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  Array.from(e.target.querySelectorAll("input")).forEach(
    (el) => (el.value = "")
  );
  e.target.querySelector("textarea").value = "";
});
