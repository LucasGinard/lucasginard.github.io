const 
      espFlag = document.querySelector(".esp"),
      engFlag = document.querySelector(".english");

espFlag.addEventListener("click", () => {
  switchLangueg(false)
});

engFlag.addEventListener("click", () => {
  switchLangueg(true)
});