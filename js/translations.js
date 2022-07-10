$(function() {

    var t = {
            "Sua Edutech Tem Solução.": { 
              en: "Solution for you Edutech.",
             },
            service_1 : { 
              en: "Projector with interactivity for classrooms and meetings",
              pt: "Projetor com interatividade para salas de aulas e reuniões.",
            },
            service_1a : { 
              en: "The more comprehensive interactive projector with the most advanced technology on the market",
              pt: "O projetor interativo mais completo e com a tecnologia mais avançada do mercado.",
            },
          };

          
          var _t = $('body').translate({lang: "pt", t: t});
          var str = _t.g("translate");
          console.log(str);
        
          // This is for Placeholder translations
          var dictionary = {
            "en": {
                "name_placeHolder" : "Your name",
                "email_placeHolder" : "Your e-mail",
                "phone_placeHolder" : "Your phone",
                "message_placeHolder" : "Your message",
              },
              "es": {
                "name_placeHolder" : "Nombre",
                "email_placeHolder" : "E-mail",
                "phone_placeHolder" : "Telefono",
                "message_placeHolder" : "Mensaje",
            }
          };
        
          var set_lang = function (dictionary) {
              $("[data-translate]").each(function(){
                if($(this).is( "input" ) || $(this).is( "textarea" )){
                    $(this).attr('placeholder',dictionary[$(this).data("translate")] )
                } else{
                  console.log("AQUI");
                    $(this).text(dictionary[$(this).data("translate")])
                }
              })
          };
        
          // // Set default as PT
          // set_lang(dictionary.pt);
    
          $(".lang_selector").click(function(ev) {
            var lang = $(this).attr("data-value");
            _t.lang(lang);
            console.log(lang);
        
            ev.preventDefault();
            if (dictionary.hasOwnProperty(lang)) {
                set_lang(dictionary[lang]);
            }
          });
        
      });