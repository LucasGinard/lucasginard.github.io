function calculateDatePass(start,end = new Date()) {
    var yearDescription = "year";
    var yearsDescription = "years";
    var monthsDescription = "moths";
    if(window.location.hash) {
        if (window.location.hash == "#es") {
            yearDescription = "año";
            yearsDescription = "años";
            monthsDescription = "meses";
        }
    }

    var datePass = end - start;
    var segs = 1000;
    var mins = segs * 60;
    var hours = mins * 60;
    var days = hours * 24;
    var monthsBase = days * 30.416666666666668;
    var years = monthsBase * 12;

    var yearInput = Math.floor(datePass / years);
    datePass = datePass - (yearInput * years);
    var moths = Math.floor(datePass / monthsBase);
    let titleYear = yearsDescription;
    if(yearInput < 2) titleYear = yearDescription;

    if(moths != 0){
        return ` · ${yearInput} ${titleYear} ${moths} ${monthsDescription}`;
    }else{
        return ` · ${yearInput} ${titleYear}`;
    }
}