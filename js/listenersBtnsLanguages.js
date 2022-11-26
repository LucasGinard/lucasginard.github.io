const 
      espFlag = document.querySelector(".esp"),
      engFlag = document.querySelector(".english"),
      espBar = document.getElementById("barrerSpanish"),
      engBar = document.getElementById("barrerEnglish");

espFlag.addEventListener("click", () => {
  switchLangueg(false)
});

engFlag.addEventListener("click", () => {
  switchLangueg(true)
});

const androidColor = "#0ba360"
const transparentColor = "#00000000"

if(window.location.hash == "#eng"){
  engBar.style.backgroundColor = androidColor
  espBar.style.backgroundColor = transparentColor
}else{
  espBar.style.backgroundColor = androidColor
  engBar.style.backgroundColor = transparentColor
}

if(window.location.hash != "#eng" && window.location.hash != "#es"){
  engBar.style.backgroundColor = transparentColor
  espBar.style.backgroundColor = transparentColor
  engBar.style.backgroundColor = androidColor
}