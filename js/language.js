const toggleSwitch2 = document.querySelector('.theme-switch-language input[type="checkbox"]');
function switchLangueg(e) {
    if (e.target.checked) {
        changeLanguage('#es')
    } else {
        changeLanguage('#eng')
    }
}
toggleSwitch2.addEventListener('change', switchLangueg, false);





    function changeLanguage(lang) {
        location.hash = lang;
        location.reload();
      }
    
      var language = {
        eng: {
          descriptionRoshka: "I'm working on Roshka in Android Native with Kotlin/Java and iOS Native with Swift, implementing flows and redesigns, improving user experience, using Rest services, improving security with dexguard and encrypting sensitive information.",
          descriptionLogi:"Worked in the IT support area providing hardware and software solutions to both colleagues and customers.",
          titleExperience: "Experience",
          titleProjectPersonal: "Personal Projects",
          emailFooter:"Contact me: contactolucasginard@gmail.com",
          NetworksFooter:"Networks",
          MadePY: "Made in Paraguay🇵🇾",
        },
        es: {
          descriptionRoshka: "Trabajo en Roshka como desarrollador móvil con Kotlin/Java para Android nativo y Swift para iOS nativo, implementandos flujos y rediseños, mejorando la experencia del usuario consumiendo servicios Rest mejorando la seguridad con dexguard e informacion sensible.",
          descriptionLogi:"Trabajé en el área de soporte de TI brindando soluciones de hardware y software tanto a colegas como a clientes.",
          titleExperience: "Experiencia",
          titleProjectPersonal: " Proyectos Personales",
          emailFooter:"Contáctame: contactolucasginard@gmail.com",
          NetworksFooter:"Redes",
          MadePY: "Hecho en Paraguay🇵🇾",
        }
      };

      // Check if a hash value exists in the URL
      if (window.location.hash) {
        if (window.location.hash == "#es") {
            descriptionRoshka.textContent = language.es.descriptionRoshka;
            descriptionLogi.textContent = language.es.descriptionLogi;
            titleExperience.textContent = language.es.titleExperience;
            titleProjectPersonal.textContent = language.es.titleProjectPersonal;
            EmailFooter.textContent = language.es.emailFooter;
            NetworksFooter.textContent = language.es.NetworksFooter;
            MadePY.textContent = language.es.MadePY;

            toggleSwitch2.checked = true
        }else if (window.location.hash == "#eng") {
            descriptionRoshka.textContent = language.eng.descriptionRoshka;
            descriptionLogi.textContent = language.eng.descriptionLogi;
            titleExperience.textContent = language.eng.titleExperience;
            titleProjectPersonal.textContent = language.eng.titleProjectPersonal;
            EmailFooter.textContent = language.eng.emailFooter;
            NetworksFooter.textContent = language.eng.NetworksFooter;
            MadePY.textContent = language.eng.MadePY;


            toggleSwitch2.checked = false
        }
      }
