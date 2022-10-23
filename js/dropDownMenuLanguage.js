const selectMenu = document.querySelector('#custom-select'),
      dropdown = document.querySelectorAll('.dropdown'),
      dropdownArray = Array.prototype.slice.call(dropdown,0),
      button = document.querySelector('a[data-toggle="dropdown"]'),
      menu = document.querySelector('.dropdown-menu'),
      arrow = button.querySelector('i.icon-arrow'),
      titleSelect = document.getElementById("titleLanguage"),
      itemListEng = document.getElementById("listEng"),
      itemListSpa = document.getElementById("listSpa");

function clickHandler(evt) {  
  evt.preventDefault();
  menu.classList.toggle('show');
  menu.classList.toggle('hide');
  arrow.classList.toggle('open');
  arrow.classList.toggle('close');
  
  let targ = evt.target;
  if (menu.contains(targ)) {
    titleSelect.textContent  = targ.dataset.optvalue;
    if(targ.dataset.optvalue == "Spanish"){
        switchLangueg(false)
    }else{
        switchLangueg(true)
    }
  }
}

// 'Click' event registration:
selectMenu.addEventListener('click', clickHandler, false);
if(window.location.hash == "#eng"){
    titleSelect.textContent  = "English"
    itemListEng.remove()

}else{
    titleSelect.textContent  = "Spanish"
    itemListSpa.remove()
}


// Purely your code below:
Element.prototype.hasClass = function(className) {
  return this.className && new RegExp("(^|\\s)" + className + "(\\s|$)").test(this.className);
};