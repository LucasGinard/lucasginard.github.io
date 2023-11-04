function switchLangueg(isEnglish) {
  if (isEnglish) {
    changeLanguage('#eng')
  } else {
    changeLanguage('#es')
  }
}

function changeLanguage(lang) {
  location.hash = lang;
  location.reload();
}

var language = {
  eng: {
    descriptionRoshka: "I'm working on Roshka in Android Native with Kotlin/Java and iOS Native with Swift, implementing flows and redesigns, improving user experience, using Rest services, improving security with dexguard and encrypting sensitive information.",
    descriptionLogi: "Worked in the IT support area providing hardware and software solutions to both colleagues and customers.",
    titleExperience: "Experience",
    titleProjectPersonal: "Personal Projects",
    emailFooter: "Contact me: contactolucasginard@gmail.com",
    NetworksFooter: "Networks",
    MadePY: "Made in Paraguay🇵🇾",
    descriptionPortfolio: "Portfolio web made with Html,Css and javascript vanilla",
    descriptionAireLibre: "AireLibre is a community response to the need to know about air quality in a free, collaborative and decentralized way. Application based on the web airelib.re.com, made with Kotlin and Compose applying the MVVM architecture",
    descriptionDolar: "Obtain the dollar exchange rate in guaraníes in more than 10 locations. Obtaining the information from a webService, based on the web: dolar.melizeche.com. Application made with kotlin applying MVVM architecture",
    textAvailable:"Available in:",
    timePassRoshka:"20-October-2020 - Present",
    timePassLogi:"14-February-2019 - 14-March-2020",
  },
  es: {
    descriptionRoshka: "Trabajo en Roshka como desarrollador móvil con Kotlin/Java para Android nativo y Swift para iOS nativo, implementandos flujos y rediseños, mejorando la experencia del usuario consumiendo servicios Rest mejorando la seguridad con dexguard e informacion sensible",
    descriptionLogi: "Trabajé en el área de soporte de TI brindando soluciones de hardware y software tanto a colegas como a clientes.",
    titleExperience: "Experiencia",
    titleProjectPersonal: " Proyectos Propios",
    emailFooter: "Contáctame: contactolucasginard@gmail.com",
    NetworksFooter: "Redes",
    MadePY: "Hecho en Paraguay🇵🇾",
    descriptionPortfolio: "Portafolio web realizado con Html,Css y javascript",
    descriptionAireLibre: "AireLibre es una respuesta comunitaria a la necesidad de conocer la calidad del aire de forma libre, colaborativa y descentralizada. Aplicación basada en la web airelib.re.com, realizada con Kotlin y Compose aplicando la arquitectura MVVM",
    descriptionDolar: "Obtener el cambio del dólar en guaraníes en más de 10 localidades. Obtención de la información desde un webService, basado en la web: dolar.melizeche.com. Aplicación realizada con kotlin aplicando la arquitectura MVVM",
    textAvailable:"Disponible:",
    timePassRoshka:"20-Octubre-2020 - Presente",
    timePassLogi:"14-Febrero-2019 - 14-Marzo-2020",
  }
};

if (window.location.hash) {
  if (window.location.hash == "#es") {
    descriptionRoshka.textContent = language.es.descriptionRoshka;
    descriptionLogi.textContent = language.es.descriptionLogi;
    titleExperience.textContent = language.es.titleExperience;
    titleProjectPersonal.textContent = language.es.titleProjectPersonal;
    EmailFooter.textContent = language.es.emailFooter;
    NetworksFooter.textContent = language.es.NetworksFooter;
    MadePY.textContent = language.es.MadePY;
    descriptionPortfolio.textContent = language.es.descriptionPortfolio;
    descriptionAireLibre.textContent = language.es.descriptionAireLibre;
    descriptionDolar.textContent = language.es.descriptionDolar;
    var textAvailable = document.getElementsByClassName('textAvailableClass');
    for(i=0;i<textAvailable.length;i++){
      textAvailable[i].textContent = language.es.textAvailable;
    }
    document.getElementById("timePassRoshka").textContent  = language.es.timePassRoshka;
    document.getElementById("timePassLogi").textContent  = language.es.timePassLogi;
    
  } else if (window.location.hash == "#eng") {
    descriptionRoshka.textContent = language.eng.descriptionRoshka;
    descriptionLogi.textContent = language.eng.descriptionLogi;
    titleExperience.textContent = language.eng.titleExperience;
    titleProjectPersonal.textContent = language.eng.titleProjectPersonal;
    EmailFooter.textContent = language.eng.emailFooter;
    NetworksFooter.textContent = language.eng.NetworksFooter;
    MadePY.textContent = language.eng.MadePY;
    descriptionPortfolio.textContent = language.eng.descriptionPortfolio;
    descriptionAireLibre.textContent = language.eng.descriptionAireLibre;
    descriptionDolar.textContent = language.eng.descriptionDolar;
    var textAvailable = document.getElementsByClassName('textAvailableClass');
    for(i=0;i<textAvailable.length;i++){
      textAvailable[i].textContent = language.eng.textAvailable;
    }
    document.getElementById("timePassRoshka").textContent  = language.eng.timePassRoshka;
    document.getElementById("timePassLogi").textContent.textContent  = language.eng.timePassLogi;
  }
}

let timePassLogi = calculateDatePass(new Date(2019, 1, 14),new Date(2020, 2, 14))
document.getElementById("timePassLogi").textContent += timePassLogi

let timePassRoshka = calculateDatePass(new Date(2020, 9, 20))
document.getElementById("timePassRoshka").textContent += timePassRoshka
