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
              en:"Chromebook Samsung.",
              pt:"Chromebook Samsung.",
            },
            service_5:{
              en:"Chromebook Lenovo.",
              pt:"Chromebook Lenovo.",
            },
            service_6:{
              en:"Installation Services",
              pt:"Serviços de instalação",
            },
            service_6a:{
              en:"Projetores interativos, convencionais e alto brilho.",
              pt:"Interactive, conventional and high brightness projectors.",
            },
            service_6b:{
              en:"Conventional and custom-designed furniture.",
              pt:"Móveis convencionais e com design personalizado.",
            },
            service_6c:{
              en:"Design and implementation of networks (Microsoft, Google or Apple).",
              pt:"Projeto e implantação de redes (Microsoft, Google ou Apple).",
            },
            service_6d:{
              en:"Complete audiovisual project for classrooms and auditoriums.",
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
              en:"ÁGUIA EDUCAÇÃO is an educational technology company specializing in solutions for the public and private markets. There are 24 years of know-how in technology for classrooms and other environments, developing special projects for schools in municipal, state and federal governments. Águia's job is to integrate equipment such as computers, projectors, notebooks, chromebooks, cameras, security, network, Google For Education solutions (domain transformation, implementation, assembly and technical training, pedagogical training, training of managers and educators) and Apps ( Edu Dash, Dashboard, Pruvo and others).",
              pt:"A ÁGUIA EDUCAÇÃO é uma empresa de tecnologia educacional especialista em soluções para os mercados público e privado. São 24 anos de know-how em tecnologia para salas de aula e outros ambientes, desenvolvendo projetos especiais para escolas dos governos municipais, estaduais e federal. O trabalho da Águia é integrar equipamentos como computadores, projetores, notebooks, chromebooks, câmeras, segurança, rede, soluções Google For Education (transformação de domínio, implantação, ensalamento e formação técnica, formação pedagógica, formação dos gestores e educadores) e Apps (Edu Dash, Dashboard, Pruvo e outros).",
            },
            comment_ls_a:{
              en:"“OUR MISSION IS TO MAKE YOU, YOUR SCHOOL, YOUR MUNICIPALITY OR YOUR STATE, FIND IN A SINGLE SUPPLIER ALL THE SOLUTIONS TO ENTER THE ERA OF MODERNITY AND INNOVATION WITH SPEED AND AGILITY.”",
              pt:"“NOSSA MISSÃO É FAZER COM QUE VOCÊ, SUA ESCOLA, SEU MUNICÍPIO OU SEU ESTADO, ENCONTREM EM UM ÚNICO FORNECEDOR TODA SOLUÇÃO PARA ENTRAR NA ERA DA MODERNIDADE E INOVAÇÃO COM RAPIDEZ E AGILIDADE.”",
            },
            comment_lc:{
              en:"Águia Educação, managed by Letícia Souza, is an example of good customer service! Whenever we needed we were attended to quickly and efficiently. And the delivery of products to our schools takes place in the shortest possible time. Recommend to everyone!",
              pt:"A Águia Educação, gerenciada pela Letícia Souza, é um exemplo de bom atendimento ao cliente! Sempre que precisamos fomos atendidos com rapidez e eficiência. E a entrega dos produtos em nossas escolas se dá no menor prazo possível. Recomendo para todos!",
            },
            comment_lc_a:{
              en:"— Luiz Eduardo Cortez Diniz Rocha Lima - General Director Centro Educacional Miraflores",
              pt:"— Luiz Eduardo Cortez Diniz Rocha Lima - Diretor Geral Centro Educacional Miraflores",
            },
            comment_cs:{
              en:"The main differential of a supplier for Escola Móbile is the partnership, that is, a company that is connected with the day to day of the institution and that understands what we are doing, that speaks the same language and accompanies us in our short-term goals. , medium and long term. For us, a sale is the beginning of a relationship that goes beyond the limits of the commercial, a product purchased will be used in the training of a student, for this reason, we demand from our partners the same quality standard that we apply in our School. ÁGUIA EDUCAÇÃO meets our values, shares our vision, understands our mission and since the beginning of our long partnership has always stood out for the agility and speed in the entire supply chain of its products. We have no doubt that all products in ÁGUIA EDUCAÇÃO's portfolio, from its efficient line of interactive projectors to its personal use equipment (Chromebooks and tablets), support our technology service management model.”",
              pt:"O principal diferencial de um fornecedor para a Escola Móbile é a parceria, ou seja, uma empresa que esteja conectada com o dia a dia da instituição e que entenda o que estamos fazendo, que fale a mesma língua e nos acompanhe em nossos objetivos de curto, médio e longo prazo. Para nós, uma venda é o começo de um relacionamento que extrapola os limites do comercial, um produto adquirido será utilizado na formação de um aluno, por esse motivo, exigimos de nossos parceiros o mesmo padrão de qualidade que aplicamos em nossa Escola. A ÁGUIA EDUCAÇÃO vai de encontro  aos nossos valores, compartilha nossa visão, entende nossa missão e desde o princípio de nossa longa parceria sempre se destacou pela agilidade e rapidez em toda cadeia de fornecimento de seus produtos. Não temos dúvida de que todos os produtos do portfólio da ÁGUIA EDUCAÇÃO, desde sua eficiente linha de projetores interativos até seus equipamentos de uso individual (Chromebooks e tablets), apoiam nosso modelo de gerenciamento de serviços de tecnologia.”",
            },
            comment_cs_a:{
              en:"— Christian Serapiao - Information Technology - Escola Mobile",
              pt:"— Christian Serapiao - Tecnologia da Informação - Escola Mobile",
            },
            automation_1:{
              en:"Video conference",
              pt:"Vídeo Conferência",
            },
            automation_1a:{
              en:"Discover the benefits that video conferencing can offer your business with a productive, face-to-face meeting experience in person.",
              pt:"Descubra as vantagens que a videoconferência pode oferecer à sua empresa com uma experiência de reunião face a face, produtiva e em pessoa.",
            },
            automation_2:{
              en:"IP telephony",
              pt:"Telefonia IP",
            },
            automation_2a:{
              en:"Reduce costs and increase your company's productivity with ip telephony solutions.",
              pt:"Reduza custos e aumente a produtividade de sua empresa com as soluções de telefonia ip.",
            },
            automation_3:{
              en:"Environment Automation",
              pt:"Automação de Ambientes",
            },
            automation_3a:{
              en:"Using meeting rooms, auditoriums, amphitheaters and other spaces intended for presentation has become a great challenge. Therefore, systems that automate all equipment have made your presentations simpler.",
              pt:"Utilizar salas de reunião, auditórios, anfiteatros e outros espaços destinados à apresentação se tornou um grande desafio. Por isso, sistemas que automatizem todos os equipamentos tornaram suas apresentações mais simples.",
            },
            automation_4:{
              en:"Multimedia Rooms and Auditoriums",
              pt:"Salas e Auditórios Multimídia",
            },
            automation_4a:{
              en:"Having a meeting room or an auditorium with integrated audio, video and data systems will allow multiple scenarios during a presentation which will make the absorption of what is presented reach greater results.",
              pt:"Ter uma sala de reunião ou um auditório com sistemas integrados de áudio, vídeo e dados permitirá múltiplos cenários durante uma apresentação o que fará com que a absorção do que é apresentado alcance maiores resultados.",
            },
            automation_5:{
              en:"Videowall",
              pt:"Videowall",
            },
            automation_5a:{
              en:"The sharpness of the image is necessary in the most diverse applications, so the resolution has become a crucial point. Thus, video wall solutions ensure the image sharpness and resolution you need.",
              pt:"A nitidez da imagem se faz necessária nas mais diversas aplicações, por isso a resolução se tornou um ponto crucial. Assim, soluções de videowall garantem a nitidez e resolução da imagem que você precisa.",
            },
            automation_6:{
              en:"Digital Signage",
              pt:"Digital Signage",
            },
            automation_6a:{
              en:"The need for real-time information has become a tool of great importance for humanity. Digital signage solutions allow institutions to communicate quickly and practically guaranteeing their results.",
              pt:"A necessidade de informação em tempo real se tornou uma ferramenta de grande importância para a humanidade. Soluções de digital signage permite que instituições se comuniquem de forma rápida e pratica garantindo os seus resultados.",
            },
            epsonTitle:{
              en:"Epson Projector Rental Program",
              pt:"Programa de Locação Projetores Epson",
            },
            epsonTitle_a:{
              en:"Contract for 36 months, with 36 equal installments and no increase in values. At the end of the lease and paying a residual of 25%, the institution can keep the asset. Or you can extend the lease for another 24 months for the same amount of installments. ADVANTAGES: 36-month warranty, with on-site service and provisional backup when necessary. Included maintenance (parts and pieces, lamps, air filters, optical block, etc.)",
              pt:"Contrato de 36 meses, sendo 36 parcelas iguais e sem aumento de valores. Ao final da locação e pagando residual de 25%, a instituição poderá ficar com o bem. Ou poderá prorrogar a locação por mais 24 meses pelo mesmo valor de parcelas. VANTAGENS: garantia de 36 meses, com atendimento on-site e backup provisório quando necessário. Manutenção inclusa (partes e peças, lâmpadas, filtros de ar, bloco óptico etc.)",
            },
            barMenu_1:{
              en:"",
              pt:"",
            },
            barMenu_2:{
              en:"WHO WE ARE",
              pt:"QUEM SOMOS",
            },
            barMenu_3:{
              en:"CUSTOMERS",
              pt:"CLIENTES",
            },
            barMenu_4:{
              en:"PARTNERS",
              pt:"PARCEIROS",
            },
            barMenu_5:{
              en:"PRODUCTS & SERVICES",
              pt:"PRODUTOS & SERVIÇOS",
            },
            barMenu_6:{
              en:"AUTOMATION",
              pt:"AUTOMAÇÃO",
            },
            barMenu_7:{
              en:"LOCATION",
              pt:"LOCAÇÃO",
            },
            barMenu_8:{
              en:"CONTACT US",
              pt:"FALE CONOSCO",
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