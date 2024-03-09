const screenMode = document.querySelector(".screenMode");

screenMode.addEventListener("click", () => {
  if (screenMode.value === "라이트 모드") {
    screenMode.value = "다크 모드";
    document.body.classList.add("dark-mode")
    screenMode.classList.add("dark-mode");
  } else {
    screenMode.value = "라이트 모드";
    document.body.classList.remove("dark-mode")
    screenMode.classList.remove("dark-mode");
  }
});
