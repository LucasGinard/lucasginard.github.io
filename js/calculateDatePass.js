function calculateDatePass(start,end = new Date()) {
    var datePass = end - start
    var segs = 1000;
    var mins = segs * 60;
    var hours = mins * 60;
    var days = hours * 24;
    var monthsBase = days * 30.416666666666668;
    var years = monthsBase * 12;

    var yearInput = Math.floor(datePass / years);
    datePass = datePass - (yearInput * years);
    var moths = Math.floor(datePass / monthsBase)
    let titleYear = "years"
    if(yearInput < 2) titleYear = "year";

    if(moths != 0){
        return ` · ${yearInput} ${titleYear} ${moths} months`
    }else{
        return ` · ${yearInput} ${titleYear}`
    }
}

let timePassLogi = calculateDatePass(new Date(2019, 1, 14),new Date(2020, 2, 14))
document.getElementById("timePassLogi").textContent += timePassLogi

let timePassRoshka = calculateDatePass(new Date(2020, 9, 20))
document.getElementById("timePassRoshka").textContent += timePassRoshka