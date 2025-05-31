document.addEventListener('DOMContentLoaded', () => {
    // --- Mobile Menu (Hamburger) ---
    const openMenuButton = document.getElementById('open-menu-button');
    const closeMenuButton = document.getElementById('close-menu-button');
    const navbar = document.getElementById('navbar');

    if (openMenuButton && navbar) {
        openMenuButton.addEventListener('click', () => {
            navbar.classList.add('visible');
        });
    }

    if (closeMenuButton && navbar) {
        closeMenuButton.addEventListener('click', () => {
            navbar.classList.remove('visible');
        });
    }

    if (navbar) {
        const navLinks = navbar.querySelectorAll('ul.menu li a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (link.getAttribute('href').startsWith('#')) {
                    if (navbar.classList.contains('visible')) {
                        navbar.classList.remove('visible');
                    }
                }
            });
        });
    }

    // --- FAQ Accordion Script ---
    const accordionItems = document.querySelectorAll('.accordion-item');
    accordionItems.forEach(item => {
        const header = item.querySelector('.accordion-header');
        const content = item.querySelector('.accordion-content');

        if (header && content) {
            header.addEventListener('click', () => {
                const isOpen = item.classList.contains('open');
                accordionItems.forEach(otherItem => {
                    if (otherItem !== item && otherItem.classList.contains('open')) {
                        otherItem.classList.remove('open');
                        otherItem.querySelector('.accordion-header').setAttribute('aria-expanded', 'false');
                        otherItem.querySelector('.accordion-content').style.maxHeight = null;
                    }
                });
                item.classList.toggle('open');
                header.setAttribute('aria-expanded', item.classList.contains('open'));
                if (item.classList.contains('open')) {
                    content.style.maxHeight = content.scrollHeight + "px";
                } else {
                    content.style.maxHeight = null;
                }
            });
        }
    });

    // --- Multi-language Support ---
    const translations = {
        // Spanish translations (ES)
        es: {
            nav_merch: "MERCH", nav_bio: "BIO", nav_music: "MÚSICA", nav_clips: "CLIPS", nav_shows: "SHOWS", nav_faq: "FAQ", nav_contact: "CONTACTO",
            hero_button_text: "ESCUCHA EL DRAGÓN", bio_title: "/BIO",
            bio_p1: "Lola Indigo, nombre artístico de Miriam Doblas Muñoz, es una cantante y bailarina española que saltó a la fama tras su participación en Operación Triunfo 2017. Su estilo musical fusiona pop, trap, reguetón y funk con una fuerte presencia de la danza en sus actuaciones.",
            bio_p2: "Desde su debut con \"Ya No Quiero Ná\" en 2018, que se convirtió en un éxito instantáneo, Lola Indigo ha lanzado varios álbumes aclamados como \"Akelarre\" (2019), \"La Niña\" (2021) y \"El Dragón\" (2023).",
            bio_p3: "Conocida por su energía arrolladora en el escenario y sus coreografías impactantes, se ha consolidado como una de las artistas más influyentes y carismáticas del panorama musical español actual.",
            bio_p4: "Lola Indigo no solo destaca por su talento musical, sino también por su mensaje de empoderamiento y autoaceptación, convirtiéndose en un referente para muchos jóvenes. Continúa innovando y explorando nuevos sonidos, prometiendo una carrera llena de éxitos.",
            music_title: "/MÚSICA", clips_title: "/CLIPS", clips_view_all_button: "VER TODOS LOS CLIPS", shows_title: "/SHOWS",
            shows_event1_date: "JUL 15", shows_event1_venue: "WIZINK CENTER", shows_event1_city: "MADRID, ESPAÑA",
            shows_event2_date: "AGO 02", shows_event2_venue: "PALAU SANT JORDI", shows_event2_city: "BARCELONA, ESPAÑA",
            shows_event3_date: "SEP 10", shows_event3_venue: "AUDITORIO ROCÍO JURADO", shows_event3_city: "SEVILLA, ESPAÑA",
            shows_btn_tickets: "ENTRADAS", shows_btn_tickets_sold_out: "AGOTADO", faq_title: "/FAQ",
            faq_q1: "¿Cuándo saldrá nueva música?", faq_a1: "Lola Índigo trabaja constantemente en nueva música y suele compartir novedades en sus perfiles oficiales como Instagram o TikTok. Para estar al tanto de próximos lanzamientos, colaboraciones o proyectos, se recomienda seguir sus canales oficiales.",
            faq_q2: "¿Dónde puedo encontrar fechas de conciertos?", faq_a2: "Las fechas oficiales de conciertos se anuncian a través de los canales oficiales de Lola Índigo, como su página web o redes sociales. Esta página solo proporciona una recopilación de información pública y puede no estar siempre actualizada.",
            faq_q3: "¿Dónde puedo seguir las últimas noticias sobre Lola Índigo?", faq_a3: "Para obtener información verificada y al día sobre Lola Índigo, lo mejor es seguir sus redes sociales oficiales y plataformas de streaming. Esta web solo ofrece contenido informativo sin carácter oficial.",
            faq_q4: "¿Lola Índigo escribe sus propias canciones?", faq_a4: "Sí, Lola Índigo participa activamente en la creación de su música. Suele colaborar con compositores y productores para dar forma a sus canciones, aportando ideas, letras, melodías y una visión artística propia.",
            faq_q5: "¿Es esta la página web oficial de Lola Índigo?", faq_a5: "No, esta no es la página oficial. Esta web ha sido desarrollada con fines informativos y no está afiliada a Lola Índigo ni a su equipo. Para información oficial, consulta sus perfiles verificados o su sitio web oficial, si está disponible.",
            contact_title: "CONTACTAR", contact_p1: "Para asuntos profesionales, management o prensa, por favor, dirígete a los canales de contacto oficiales indicados en su página web oficial o a través de su equipo de representación. Este formulario es para contactar con el administrador de esta página no oficial.",
            contact_form_name_placeholder: "Nombre", contact_form_email_placeholder: "Email", contact_form_message_placeholder: "Escribe aquí tu mensaje para el admin de la web", contact_form_submit_button: "Enviar",
            footer_copyright_artist: "Antonio Miguel Herrero", footer_credits: "Esto es una página no oficial."
        },
        // English translations (EN)
        en: {
            nav_merch: "MERCH", nav_bio: "BIO", nav_music: "MUSIC", nav_clips: "CLIPS", nav_shows: "SHOWS", nav_faq: "FAQ", nav_contact: "CONTACT",
            hero_button_text: "LISTEN TO EL DRAGÓN", bio_title: "/BIO",
            bio_p1: "Lola Indigo, artistic name of Miriam Doblas Muñoz, is a Spanish singer and dancer who rose to fame after her participation in Operación Triunfo 2017. Her musical style fuses pop, trap, reggaeton, and funk with a strong dance presence in her performances.",
            bio_p2: "Since her debut with \"Ya No Quiero Ná\" in 2018, which became an instant hit, Lola Indigo has released several acclaimed albums such as \"Akelarre\" (2019), \"La Niña\" (2021), and \"El Dragón\" (2023).",
            bio_p3: "Known for her overwhelming energy on stage and her impactful choreographies, she has established herself as one of the most influential and charismatic artists in the current Spanish music scene.",
            bio_p4: "Lola Indigo not only stands out for her musical talent but also for her message of empowerment and self-acceptance, becoming a reference for many young people. She continues to innovate and explore new sounds, promising a career full of successes.",
            music_title: "/MUSIC", clips_title: "/CLIPS", clips_view_all_button: "VIEW ALL CLIPS", shows_title: "/SHOWS",
            shows_event1_date: "JUL 15", shows_event1_venue: "WIZINK CENTER", shows_event1_city: "MADRID, SPAIN",
            shows_event2_date: "AUG 02", shows_event2_venue: "PALAU SANT JORDI", shows_event2_city: "BARCELONA, SPAIN",
            shows_event3_date: "SEP 10", shows_event3_venue: "AUDITORIO ROCÍO JURADO", shows_event3_city: "SEVILLE, SPAIN",
            shows_btn_tickets: "TICKETS", shows_btn_tickets_sold_out: "SOLD OUT", faq_title: "/FAQ",
            faq_q1: "When will new music be released?", faq_a1: "Lola Índigo is constantly working on new music and often shares updates on her official profiles like Instagram or TikTok. To stay informed about upcoming releases, collaborations, or projects, it is recommended to follow her official channels.",
            faq_q2: "Where can I find concert dates?", faq_a2: "Official concert dates are announced through Lola Índigo's official channels, such as her website or social media. This page only provides a compilation of public information and may not always be up to date.",
            faq_q3: "Where can I follow the latest news about Lola Índigo?", faq_a3: "For verified and up-to-date information about Lola Índigo, it's best to follow her official social media and streaming platforms. This website only offers informational content and is not official.",
            faq_q4: "Does Lola Índigo write her own songs?", faq_a4: "Yes, Lola Índigo actively participates in the creation of her music. She usually collaborates with songwriters and producers to shape her songs, contributing ideas, lyrics, melodies, and her own artistic vision.",
            faq_q5: "Is this the official Lola Índigo website?", faq_a5: "No, this is not the official page. This website has been developed for informational purposes and is not affiliated with Lola Índigo or her team. For official information, please consult her verified profiles or her official website, if available.",
            contact_title: "CONTACT", contact_p1: "For professional matters, management, or press inquiries, please use the official contact channels indicated on her official website or through her representation team. This form is to contact the administrator of this unofficial website.",
            contact_form_name_placeholder: "Name", contact_form_email_placeholder: "Email", contact_form_message_placeholder: "Write your message here for the website admin", contact_form_submit_button: "Send",
            footer_copyright_artist: "Antonio Miguel Herrero", footer_credits: "This is an unofficial website."
        },
        // Finnish translations (FI)
        fi: {
            nav_merch: "FANITUOTTEET", nav_bio: "BIO", nav_music: "MUSIIKKI", nav_clips: "KLIPIT", nav_shows: "KEIKAT", nav_faq: "UKK", nav_contact: "YHTEYSTIEDOT",
            hero_button_text: "KUUNTELE EL DRAGÓN", bio_title: "/BIO",
            bio_p1: "Lola Indigo, taiteilijanimeltään Miriam Doblas Muñoz, on espanjalainen laulaja ja tanssija, joka nousi kuuluisuuteen osallistuttuaan Operación Triunfo 2017 -kilpailuun. Hänen musiikkityylinsä yhdistää poppia, trapia, reggaetonia ja funkia, ja tanssilla on vahva läsnäolo hänen esityksissään.",
            bio_p2: "Debyyttinsä \"Ya No Quiero Ná\" (2018) jälkeen, josta tuli välitön hitti, Lola Indigo on julkaissut useita ylistettyjä albumeita, kuten \"Akelarre\" (2019), \"La Niña\" (2021) ja \"El Dragón\" (2023).",
            bio_p3: "Tunnettu valtaisasta energiastaan lavalla ja vaikuttavista koreografioistaan, hän on vakiinnuttanut asemansa yhtenä Espanjan nykymusiikkikentän vaikutusvaltaisimmista ja karismaattisimmista artisteista.",
            bio_p4: "Lola Indigo ei erotu ainoastaan musiikillisella lahjakkuudellaan, vaan myös voimaantumisen ja itsensä hyväksymisen sanomallaan, tullen esikuvaksi monille nuorille. Hän jatkaa innovointia ja uusien soundien tutkimista, luvaten menestyksekästä uraa.",
            music_title: "/MUSIIKKI", clips_title: "/KLIPIT", clips_view_all_button: "KATSO KAIKKI KLIPIT", shows_title: "/KEIKAT",
            shows_event1_date: "HEI 15", shows_event1_venue: "WIZINK CENTER", shows_event1_city: "MADRID, ESPANJA",
            shows_event2_date: "ELO 02", shows_event2_venue: "PALAU SANT JORDI", shows_event2_city: "BARCELONA, ESPANJA",
            shows_event3_date: "SYY 10", shows_event3_venue: "AUDITORIO ROCÍO JURADO", shows_event3_city: "SEVILLA, ESPANJA",
            shows_btn_tickets: "LIPUT", shows_btn_tickets_sold_out: "LOPPUUNMYYTY", faq_title: "/UKK",
            faq_q1: "Milloin uutta musiikkia julkaistaan?", faq_a1: "Lola Índigo työskentelee jatkuvasti uuden musiikin parissa ja jakaa usein uutisia virallisilla profiileillaan, kuten Instagramissa tai TikTokissa. Pysyäksesi ajan tasalla tulevista julkaisuista, yhteistöistä tai projekteista, on suositeltavaa seurata hänen virallisia kanaviaan.",
            faq_q2: "Mistä löydän konserttipäivämäärät?", faq_a2: "Viralliset konserttipäivämäärät ilmoitetaan Lola Índigon virallisten kanavien, kuten hänen verkkosivustonsa tai sosiaalisen median, kautta. Tämä sivu tarjoaa vain kokoelman julkista tietoa eikä välttämättä ole aina ajan tasalla.",
            faq_q3: "Mistä voin seurata viimeisimpiä uutisia Lola Índigosta?", faq_a3: "Saadaksesi varmennettua ja ajantasaista tietoa Lola Índigosta, on parasta seurata hänen virallisia sosiaalisen median ja suoratoistoalustojaan. Tämä verkkosivusto tarjoaa vain informatiivista sisältöä eikä ole virallinen.",
            faq_q4: "Kirjoittaako Lola Índigo omat laulunsa?", faq_a4: "Kyllä, Lola Índigo osallistuu aktiivisesti musiikkinsa luomiseen. Hän tekee yleensä yhteistyötä lauluntekijöiden ja tuottajien kanssa muokatakseen kappaleitaan, tuoden mukanaan ideoita, sanoituksia, melodioita ja oman taiteellisen näkemyksensä.",
            faq_q5: "Onko tämä Lola Índigon virallinen verkkosivusto?", faq_a5: "Ei, tämä ei ole virallinen sivu. Tämä verkkosivusto on kehitetty tiedotustarkoituksiin eikä ole sidoksissa Lola Índigoon tai hänen tiimiinsä. Virallista tietoa varten, tutustu hänen vahvistettuihin profiileihinsa tai hänen viralliseen verkkosivustoonsa, jos sellainen on saatavilla.",
            contact_title: "OTA YHTEYTTÄ", contact_p1: "Ammattiasioissa, managerointiin tai lehdistökyselyihin liittyen, ole hyvä ja käytä hänen virallisella verkkosivustollaan ilmoitettuja virallisia yhteyskanavia tai hänen edustustiiminsä kautta. Tämä lomake on tarkoitettu yhteydenottoon tämän epävirallisen sivuston ylläpitäjään.",
            contact_form_name_placeholder: "Nimi", contact_form_email_placeholder: "Sähköposti", contact_form_message_placeholder: "Kirjoita viestisi tähän sivuston ylläpitäjälle", contact_form_submit_button: "Lähetä",
            footer_copyright_artist: "Antonio Miguel Herrero", footer_credits: "Tämä on epävirallinen verkkosivusto."
        }
    };

    const languageDropdownButton = document.getElementById('language-dropdown-button');
    const languageDropdownContent = document.getElementById('language-dropdown-content');
    const selectedLangTextElement = document.getElementById('selected-lang-text');

    const updateDropdownButtonText = (lang) => {
        if (selectedLangTextElement) {
            selectedLangTextElement.textContent = lang.toUpperCase();
        }
    };

    const setLanguage = (lang) => {
        document.documentElement.lang = lang;

        document.querySelectorAll('[data-translate-key]').forEach(element => {
            const key = element.getAttribute('data-translate-key');
            if (translations[lang] && translations[lang][key]) {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    if (element.hasAttribute('placeholder')) { // Check if placeholder attribute exists
                        element.placeholder = translations[lang][key];
                    }
                } else {
                    element.innerHTML = translations[lang][key];
                }
            }
        });

        localStorage.setItem('preferredLanguage', lang);
        updateDropdownButtonText(lang);

        if (languageDropdownContent && languageDropdownContent.classList.contains('show')) {
            languageDropdownContent.classList.remove('show');
        }
        if (languageDropdownButton) {
            languageDropdownButton.setAttribute('aria-expanded', 'false');
            // languageDropdownButton.classList.remove('active');
        }
        
        // Update footer
        const footerCopyrightHolder = document.getElementById('footerCopyright');
        if (footerCopyrightHolder) {
            const artistName = translations[lang]?.footer_copyright_artist || "Antonio Miguel Herrero";
            const year = new Date().getFullYear();
            footerCopyrightHolder.innerHTML = `${artistName} © <span id="currentYear">${year}</span>`;
        } else {
            const currentYearSpan = document.getElementById('currentYear');
            if (currentYearSpan) {
                currentYearSpan.textContent = new Date().getFullYear();
            }
        }
    };

    if (languageDropdownButton && languageDropdownContent) {
        languageDropdownButton.addEventListener('click', (event) => {
            event.stopPropagation();
            languageDropdownContent.classList.toggle('show');
            const isExpanded = languageDropdownContent.classList.contains('show');
            languageDropdownButton.setAttribute('aria-expanded', isExpanded);
            // languageDropdownButton.classList.toggle('active', isExpanded);
        });

        languageDropdownContent.querySelectorAll('a[data-lang]').forEach(link => {
            link.addEventListener('click', (event) => {
                event.preventDefault();
                const selectedLang = link.getAttribute('data-lang');
                setLanguage(selectedLang);
            });
        });

        window.addEventListener('click', (event) => {
            if (languageDropdownContent.classList.contains('show') &&
                !languageDropdownButton.contains(event.target) &&
                !languageDropdownContent.contains(event.target)) {
                languageDropdownContent.classList.remove('show');
                languageDropdownButton.setAttribute('aria-expanded', 'false');
                // languageDropdownButton.classList.remove('active');
            }
        });
    }

    const preferredLanguage = localStorage.getItem('preferredLanguage') || 'en';
    setLanguage(preferredLanguage);
});