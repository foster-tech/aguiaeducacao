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
            service_2:{
              en:"Laser projectors for classrooms and small auditoriums.",
              pt:"Laser projectors for classrooms and small auditoriums.",
            },
            service_3:{
              en:"Projectors for auditoriums/theaters.",
              pt:"Projetores para auditórios/teatros.",
            },
            service_4:{
              en:"Samsung Chromebook.",
              pt:"Chromebook Samsung.",
            },
            service_5:{
              en:"Lenovo Chromebook.",
              pt:"Chromebook Lenovo.",
            },
            service_6:{
              en:"Services",
              pt:"Serviços de instalação",
            },
            service_6a:{
              en:"Interactive, conventional, and high brightness projectors.",
              pt:"Projetores interativos, convencionais e alto brilho.",
            },
            service_6b:{
              en:"Design and implementation of networks (Microsoft, Google, or Apple).",
              pt:"Móveis convencionais e com design personalizado.",
            },
            service_6c:{
              en:"Complete audiovisual projects for classrooms and auditoriums.",
              pt:"Projeto e implantação de redes (Microsoft, Google ou Apple).",
            },
            service_6d:{
              en:"Environment design project (architecture and engineering).",
              pt:"Projeto completo de audiovisual para salas de aula e auditórios.",
            },
            service_6e:{
              en:"Environment reform project (architecture and engineering).",
              pt:"Projeto de reforma de ambientes (arquitetura e engenharia).",
            },
            service_6f:{
              en:"Integration between technology and environments.",
              pt:"Integração entre tecnologia e ambientes.",
            },
            comment_ls:{
              en:"AGUIA EDUCATION has 24 years of expertise in technology solutions for educational institutions, developing customized projects for classrooms and other school environments managed by the private sector or cities, states, and national administrations. Aguia's job is to integrate equipment such as computers, projectors, notebooks, Chromebooks, security systems, networks, Apps (e.g. Edu Dash, Dashboard, Pruvo), and Google For Education solutions (domain transformation, implementation, assembly, and technical, pedagogical, managerial, educators training).",
              pt:"A ÁGUIA EDUCAÇÃO é uma empresa de tecnologia educacional especialista em soluções para os mercados público e privado. São 24 anos de know-how em tecnologia para salas de aula e outros ambientes, desenvolvendo projetos especiais para escolas dos governos municipais, estaduais e federal. O trabalho da Águia é integrar equipamentos como computadores, projetores, notebooks, chromebooks, câmeras, segurança, rede, soluções Google For Education (transformação de domínio, implantação, ensalamento e formação técnica, formação pedagógica, formação dos gestores e educadores) e Apps (Edu Dash, Dashboard, Pruvo e outros).",
            },
            comment_ls_a:{
              en:"“OUR MISSION IS TO MAKE YOU, YOUR SCHOOL, YOUR MUNICIPALITY OR YOUR STATE, FIND IN A SINGLE SUPPLIER ALL THE SOLUTIONS TO ENTER THE ERA OF MODERNITY AND INNOVATION IN A QUICK WAY AND WITH AGILITY.”",
              pt:"“NOSSA MISSÃO É FAZER COM QUE VOCÊ, SUA ESCOLA, SEU MUNICÍPIO OU SEU ESTADO, ENCONTREM EM UM ÚNICO FORNECEDOR TODA SOLUÇÃO PARA ENTRAR NA ERA DA MODERNIDADE E INOVAÇÃO COM RAPIDEZ E AGILIDADE.”",
            },
            comment_lc:{
              en:"Aguia Education, managed by Leticia Souza, is an example of the best customer service! Whenever we were in need, they quickly and efficiently solved the problem. And the delivery of products to our schools always takes place in the shortest possible time. I recommend them to everyone!",
              pt:"A Águia Educação, gerenciada pela Letícia Souza, é um exemplo de bom atendimento ao cliente! Sempre que precisamos fomos atendidos com rapidez e eficiência. E a entrega dos produtos em nossas escolas se dá no menor prazo possível. Recomendo para todos!",
            },
            comment_lc_a:{
              en:"— Luiz Eduardo Cortez Diniz Rocha Lima – General Manager of Miraflores Educational Centre",
              pt:"— Luiz Eduardo Cortez Diniz Rocha Lima - Diretor Geral Centro Educacional Miraflores",
            },
            comment_cs:{
              en:"The differential a supplier must have for Mobile School is the real partnership commitment. That means a provider connected with our day-to-day, understands what we do, has the same syntony, and sides with us in our short, medium, and long-term goals. For us, an agreement is only the beginning of a relationship beyond the sale itself. Any purchased product is always focused on students' training. And for that reason, we demand from our partners the same quality standard applied in our school. AGUIA EDUCATION understands our mission, has always stood out for the agility and speed in the entire supply chain of its products since the beginning of our long partnership, and shares our vision and values. We do not doubt that all products in the AGUIA EDUCATION portfolio, from its efficient line of interactive projectors to its personal use equipment (Chromebooks and tablets), match our technology services management model.",
              pt:"O principal diferencial de um fornecedor para a Escola Móbile é a parceria, ou seja, uma empresa que esteja conectada com o dia a dia da instituição e que entenda o que estamos fazendo, que fale a mesma língua e nos acompanhe em nossos objetivos de curto, médio e longo prazo. Para nós, uma venda é o começo de um relacionamento que extrapola os limites do comercial, um produto adquirido será utilizado na formação de um aluno, por esse motivo, exigimos de nossos parceiros o mesmo padrão de qualidade que aplicamos em nossa Escola. A ÁGUIA EDUCAÇÃO vai de encontro  aos nossos valores, compartilha nossa visão, entende nossa missão e desde o princípio de nossa longa parceria sempre se destacou pela agilidade e rapidez em toda cadeia de fornecimento de seus produtos. Não temos dúvida de que todos os produtos do portfólio da ÁGUIA EDUCAÇÃO, desde sua eficiente linha de projetores interativos até seus equipamentos de uso individual (Chromebooks e tablets), apoiam nosso modelo de gerenciamento de serviços de tecnologia.”",
            },
            comment_cs_a:{
              en:"— Christian Serapiao – IT at Mobile School",
              pt:"— Christian Serapiao - Tecnologia da Informação - Escola Mobile",
            },
            automation_1:{
              en:"Video conference",
              pt:"Vídeo Conferência",
            },
            automation_1a:{
              en:"Discover the benefits that video conferencing can offer to your business with more productive face-to-face meeting experiences.",
              pt:"Descubra as vantagens que a videoconferência pode oferecer à sua empresa com uma experiência de reunião face a face, produtiva e em pessoa.",
            },
            automation_2:{
              en:"IP telephony",
              pt:"Telefonia IP",
            },
            automation_2a:{
              en:"Reduce costs and increase your company's productivity with IP telephony solutions.",
              pt:"Reduza custos e aumente a produtividade de sua empresa com as soluções de telefonia ip.",
            },
            automation_3:{
              en:"Environment Automation",
              pt:"Automação de Ambientes",
            },
            automation_3a:{
              en:"To use meeting rooms, auditoriums, amphitheaters, and other spaces intended for presentations is challenging. And automated equipment systems will ease your presentation.",
              pt:"Utilizar salas de reunião, auditórios, anfiteatros e outros espaços destinados à apresentação se tornou um grande desafio. Por isso, sistemas que automatizem todos os equipamentos tornaram suas apresentações mais simples.",
            },
            automation_4:{
              en:"Multimedia Rooms and Auditoriums",
              pt:"Salas e Auditórios Multimídia",
            },
            automation_4a:{
              en:"An integrated meeting room or an auditorium with audio, video, and data systems allows the exposure of different scenarios and a better comprehension of what is presented.",
              pt:"Ter uma sala de reunião ou um auditório com sistemas integrados de áudio, vídeo e dados permitirá múltiplos cenários durante uma apresentação o que fará com que a absorção do que é apresentado alcance maiores resultados.",
            },
            automation_5:{
              en:"Videowall",
              pt:"Videowall",
            },
            automation_5a:{
              en:"The image's sharpness is essential for the most diverse applications, so resolution has become a crucial point. And our video wall solutions deliver the image sharpness and resolution you need.",
              pt:"A nitidez da imagem se faz necessária nas mais diversas aplicações, por isso a resolução se tornou um ponto crucial. Assim, soluções de videowall garantem a nitidez e resolução da imagem que você precisa.",
            },
            automation_6:{
              en:"Digital Signage",
              pt:"Digital Signage",
            },
            automation_6a:{
              en:"The need for real-time information has become of great importance in modern times. Digital signage solutions allow educational institutions to quickly and easily communicate, increasing their results.",
              pt:"A necessidade de informação em tempo real se tornou uma ferramenta de grande importância para a humanidade. Soluções de digital signage permite que instituições se comuniquem de forma rápida e pratica garantindo os seus resultados.",
            },
            epsonTitle:{
              en:"Epson Projector Rental Program",
              pt:"Programa de Locação Projetores Epson",
            },
            epsonTitle_a:{
              en:"36 months agreement, with 36 equal installments and no increase in values. At the end of the lease and paying a residual of 25%, the educational institution can keep the equipment. Or extend its lease for another 24 months for the same amount as in the original installments. ADVANTAGES: 36-month warranty, with on-site service and provisional backup when necessary. Included maintenance (e.g. parts and pieces, lamps, air filters, optical bloc)",
              pt:"Contrato de 36 meses, sendo 36 parcelas iguais e sem aumento de valores. Ao final da locação e pagando residual de 25%, a instituição poderá ficar com o bem. Ou poderá prorrogar a locação por mais 24 meses pelo mesmo valor de parcelas. VANTAGENS: garantia de 36 meses, com atendimento on-site e backup provisório quando necessário. Manutenção inclusa (partes e peças, lâmpadas, filtros de ar, bloco óptico etc.)",
            },
            barMenu_1:{
              en:"HOME",
              pt:"HOME",
            },
            barMenu_2:{
              en:"About",
              pt:"QUEM SOMOS",
            },
            barMenu_3:{
              en:"Clients",
              pt:"CLIENTES",
            },
            barMenu_4:{
              en:"Partnerships",
              pt:"PARCEIROS",
            },
            barMenu_5:{
              en:"Products & Services",
              pt:"PRODUTOS & SERVIÇOS",
            },
            barMenu_6:{
              en:"Automation",
              pt:"AUTOMAÇÃO",
            },
            barMenu_7:{
              en:"Rental",
              pt:"LOCAÇÃO",
            },
            barMenu_8:{
              en:"CONTACT",
              pt:"FALE CONOSCO",
            },
            "Fale conosco": { 
              en: "Contact us",
             },
            "Nome": { 
              en: "Name",
             },
            "Menssagem": { 
              en: "Message",
             },
            "Telefone": { 
              en: "Phone",
             },
            "Enviar": { 
              en: "Send",
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
              "pt": {
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
        
          // Set default as PT
          set_lang(dictionary.pt);
    
          $(".lang_selector").click(function(ev) {
            var lang = $(this).attr("data-value");
            _t.lang(lang);
            console.log(lang);
        
            ev.preventDefault();
            if (dictionary.hasOwnProperty(lang)) {
                set_lang(dictionary[lang]);
            }
            
            //Replace images with text
            $(".textimage").attr("src",`images/google_${lang}.jpg`)
            $(".textimagephone").attr("src",`../images/google_${lang}.jpg`)
          });
        
      });