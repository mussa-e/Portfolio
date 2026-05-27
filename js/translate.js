function setLanguage(lang) {
    localStorage.setItem('language', lang);

    const elements = document.querySelectorAll('[data-i18n]');

    elements.forEach((element) => {
        translateElement(element, lang);
    });
}


function translateElement(element, lang) {
    const key = element.getAttribute('data-i18n');
    const translation = translations[lang][key];

    if (!translation) {
        return;
    }

    applyTranslation(element, key, translation);
}


function applyTranslation(element, key, translation) {
    if (isHtmlContent(key)) {
        element.innerHTML = translation;
        return;
    }

    if (key === 'quote-project') {
        element.childNodes[0].nodeValue = `${translation} `;
        return;
    }

    element.innerText = translation;
}


function isHtmlContent(key) {
    return (
        key === 'legalContent' ||
        key === 'privacyContent'
    );
}


document.addEventListener("DOMContentLoaded", () => {

    const savedLanguage = localStorage.getItem("language") || "en";

    setLanguage(savedLanguage);

    if(savedLanguage === "de"){
        chooseLanguage("lang-de");
    } else 
    
    if(savedLanguage === "en"){
        chooseLanguage("lang-en");
    }
});


const translations = {
    en: {
        "logo-role": "developer",
        "top-role": "Frontend Developer",
        "bar-why-me": "Why me",
        "bar-skills": "Skills",
        "bar-projects": "Projects",
        "bar-contacts": "Contatcs",
        "why-me-location-p1": "I am",
        "why-me-location-p2": "located in Cologne..|",
        "why-me-desc": `I'm passionate about coding because it
                        combines analytical thinking, creativity,
                        and problem-solving. I enjoy building
                        solutions, learning through challenges,
                        staying persistent, and collaborating with
                        others to create meaningful and efficient projects.`,
        "why-me-talk": "Let`s talk",
        "skills-learning-1-resp": "What I am currently learning",
        "skills-learning-1": "I am currently learning",
        "skills-learning-2": `I'm motivated to learn emerging
                                technologies, refine my abilities,
                                and develop innovative, future-oriented
                                solutions.`,
        "projects-h1": "My Projects",
        "projects-ongoing": "Ongoing Project",
        "about": "About the project",
        "da-duration": "Duration: 3 weeks",
        "da-text": `"Pokedex" is a Pokémon Trainer registry featuring data from the PokeAPI, 
                    which clearly displays Pokémon, types, abilities, and trainer information.`,
        "how": "How I have organised my work process",
        "da-how-text": `I maintained clean and scalable code by structuring the project into reusable
                            components and modules. Clear naming conventions, consistent file organization, 
                            and thorough documentation ensured readability, while regular testing helped
                            maintain reliability and long-term maintainability.`,
        "group": "My group work experience",
        "da-group-text": `During the development of "Pokedex," I learned how to efficiently integrate 
                            APIs, display dynamic data, structure user interfaces, and implement 
                            asynchronous data processing with clean state management.`,
        "techs": "Technologies:",
        "epl-duration": "Duration: 5 weeks",
        "epl-p3": `A simple Jump-and-Run game based on an object-oriented aproach.
                    Help Pepe to collect Coins and salsa-bottles to fight against the enemies`,
        "epl-how-text": `I structured the project into reusable modules and classes, ensuring clear 
                            separation of concerns. Clean code practices included consistent naming conventions,
                            modular file organization, inline documentation, and regular testing to maintain 
                            readability, scalability, and long-term maintainability.`,
        "learn": "What I learned",
        "epl-learn-text": `This project allowed me to deepen my understanding of object-oriented 
                            programming in JavaScript, especially working with classes and inheritance.
                            As a solo project, it strengthened my ability to independently structure code,
                            solve problems, and continuously improve my development workflow.`,
        "join-duration": "Duration: 2 months",
        "join-p3": `Task manager inspired by the Kanban System. Create and organize tasks
                    using drag and drop functions, assign users and categories.`,
        "join-how-text": `I maintained clean and scalable code by structuring the project into reusable
                            components and modules. Clear naming conventions, consistent documentation, and 
                            regular testing ensured maintainability, readability, and efficient collaboration
                            throughout the development process.`,
        "join-group-text": `Our team consisted of four members, where I was responsible for my own feature 
                            development while also supporting others with questions and challenges. I actively
                            contributed to a collaborative, well-coordinated workflow, fostering strong teamwork
                            and effective communication.`,
        "ongoing-p3": `DA Bubble is a Slack Clone App. 
                        It revolutionizes team communication and collaboration with its intuitive interface, 
                        real-time messaging, and robust channel organization.
                        Imagine a platform similar to Discord, WhatsApp, 
                        or Slack, but specifically for business use.`,
        "quote-h2": "Need a teamplayer? Here`s what my colleagues say about me",
        "quote-h2-resp": "Need a teamplayer?",
        "quote-h2-resp-p": "Here`s what my colleagues say about me",
        "quote-project": "Project",
        "quote-1": `"Mussa impressed in the group project
                    through technical skills, reliability, 
                    and strong teamwork."`,
        "quote-2": `"Mussa is a reliable team player with excellent development skills."`,
        "quote-3": `"Impeccable code quality, quick to grasp new concepts, and a tremendous asset to 
                    the team on a personal level."`,
        "quote-profile":"Linked In Profile",
        "contact-h1": "Contact me",
        "contact-text": `Feel free to get in touch regarding job opportunities,
                        freelance projects, or collaborations in software development.
                        I'm particularly interested in building scalable, user-focused 
                        applications and contributing clean, efficient code. I'm confident
                        I can add real value to your team and help bring ideas to life.`,
        "work-together": "Let us work together!",
        "form-name": "Your name",
        "form-mail": "Your Email",
        "form-message": "Your Message",
        "form-have": "I've read the",
        "form-policy": "privacy policy",
        "form-read": "and agree to the processing of my data as outlined.",
        "form-send": "Send",
        "legal": "Legal notice",
        "legalContent": `<a class="arrow-back" href="index.html"><img src="img/arrow_back.svg"></a>

                            <h1>Legal Notice</h1>

                            <h2>Imprint</h2>
                            <ul>
                                <li>Mussa Faragi</li>
                                <li>Musterstraße</li>
                                <li>50859 Köln</li>
                            </ul>

                            <p><strong class="blue">Exploring the Board</strong><br>
                            Email: mussa.faragi@gmx.de</p>

                            <h2>1. Acceptance of terms</h2>
                            <p>
                                By accessing and using <span class="blue">Portfolio</span> (Product), you acknowledge and agree to the following terms and conditions,
                                and any policies, guidelines, or amendments thereto that may be presented to you from time to time.
                                We, the listed students, may update or change the terms and conditions from time to time without notice.
                            </p>

                            <h2>2. Scope and ownership of the product</h2>
                            <p>
                                <span class="blue">Portfolio</span> has been developed as part of a student group project in a web development bootcamp at the
                                <span class="blue">Developer Akademie GmbH.</span> It has an educational purpose and is not intended for extensive personal
                                or business usage. As such, we cannot guarantee consistent availability, reliability, accuracy,
                                or any other aspect of quality regarding this Product.
                            </p>
                            <p>
                                The design of <span class="blue">Portfolio</span> is owned by the <span class="blue">Developer Akademie GmbH.</span> Unauthorized use, reproduction,
                                modification, distribution, or replication of the design is strictly prohibited.
                            </p>

                            <h2>3. Proprietary rights</h2>
                            <p>
                                Aside from the design owned by <span class="blue">Developer Akademie GmbH.</span>, we, the listed students, retain all proprietary
                                rights in <span class="blue">Portfolio</span>, including any associated copyrighted material, trademarks, and other proprietary information.
                            </p>

                            <h2>4. Use of the product</h2>
                            <p>
                                <span class="blue">Portfolio</span> is intended to be used for lawful purposes only, in accordance with all applicable laws and regulations.
                                Any use of <span class="blue">Portfolio</span> for illegal activities, or to harass, harm, threaten, or intimidate another person,
                                is strictly prohibited. You are solely responsible for your interactions with other users of <span class="blue">Portfolio</span>.
                            </p>

                            <h2>5. Disclaimer of warranties and limitation of liability</h2>
                            <p>
                                <span class="blue">Portfolio</span> is provided "as is" without warranty of any kind, whether express or implied, including but not limited
                                to the implied warranties of merchantability, fitness for a particular purpose, or non-infringement.
                                In no event will we, the listed students, or the <span class="blue">Developer Akademie</span>, be liable for any direct, indirect,
                                incidental, special, consequential or exemplary damages, including but not limited to damages for loss of profits,
                                goodwill, use, data, or other intangible losses, even if we have been advised of the possibility of such damages,
                                arising out of or in connection with the use or performance of <span class="blue">Portfolio</span>.
                            </p>

                            <h2>6. Indemnity</h2>
                            <p>
                                You agree to indemnify, defend and hold harmless us, the listed students, the <span class="blue">Developer Akademie</span>,
                                and our affiliates, partners, officers, directors, agents, and employees, from and against any claim,
                                demand, loss, damage, cost, or liability (including reasonable legal fees) arising out of or relating to
                                your use of <span class="blue">Portfolio</span> and/or your breach of this Legal Notice.
                            </p>

                            <p>
                                For any questions or notices, please contact me at mussa.faragi@gmx.de.
                            </p>

                            <p class="date">Date: Mai 02, 2026</p>`,

        "privacyContent": `<a class="arrow-back" href="index.html"><img src="img/arrow_back.svg"></a>

                                <h1>Privacy Policy</h1>

                                <h2>1. Data Controller</h2>
                                <p>
                                Mussa Faragi<br>
                                Musterstraße<br>
                                Email: mussa.faragi@gmx.de
                                </p>

                                <h2>2. Server Log Files</h2>
                                <p>
                                    When you visit this website, information is automatically collected by the hosting provider. This includes:
                                </p>
                                <ul>
                                    <li>IP address</li>
                                    <li>Date and time of the request</li>
                                    <li>Browser type and version</li>
                                    <li>Operating system</li>
                                </ul>
                                <p>
                                    These data are used solely to ensure the proper functioning and security of the website.
                                </p>

                                <h2>3. Hosting</h2>
                                <p>
                                    This website is hosted by netcup. The provider processes personal data such as IP addresses to deliver the website.
                                </p>

                                <h2>4. Contact</h2>
                                <p>
                                    If you contact me via email, your information will be stored for the purpose of processing your request. This data will not be shared without your consent.
                                </p>

                                <h2>5. Your Rights</h2>
                                <p>
                                    Under applicable laws, you have the right to:
                                </p>
                                <ul>
                                    <li>Access your stored data</li>
                                    <li>Request correction of inaccurate data</li>
                                    <li>Request deletion of your data</li>
                                    <li>Restrict processing of your data</li>
                                    <li>Lodge a complaint with a supervisory authority</li>
                                </ul>

                                <h2>6. SSL/TLS Encryption</h2>
                                <p>
                                    This website uses SSL/TLS encryption for security reasons and to protect the transmission of confidential content.
                                </p>

                                <h2>7. Updates</h2>
                                <p>
                                    This Privacy Policy is currently valid as of: May 02,2026.  
                                    I reserve the right to update it if necessary.
                                </p>`,        


    },

    de: {
        "logo-role": "Entwickler",
        "top-role": "Frontend Entwickler",
        "bar-why-me":"Warum ich",
        "bar-skills": "Fähigkeiten",
        "bar-projects": "Projekte",
        "bar-contacts": "Kontakte",
        "why-me-location-p1": "Ich lebe",
        "why-me-location-p2": "in Köln..|",
        "why-me-desc": `Ich begeistere mich für das Programmieren, weil es
                        analytisches Denken, Kreativität
                        und Problemlösung miteinander verbindet.
                        Ich habe Freude daran, Lösungen zu entwickeln,
                        aus Herausforderungen zu lernen,
                        beharrlich zu bleiben und mit anderen zusammenzuarbeiten,
                        um sinnvolle und effiziente Projekte zu realisieren.`,
        "why-me-talk": "Lass uns sprechen",
        "skills-learning-1-resp": "Was ich aktuell lerne",
        "skills-learning-1": "Aktuell lerne ich",
        "skills-learning-2": `Ich bin motiviert, neue
                                Technologien zu erlernen,
                                meine Fähigkeiten zu verfeinern
                                und innovative, zukunftsorientierte
                                Lösungen zu entwickeln.`,
        "projects-h1": "Meine Projekte",
        "projects-ongoing": "Laufendes Projekt",
        "about": "Über das Projekt",
        "da-duration": "Dauer: 3 Wochen",
        "da-text": `"Pokedex" ist ein Pokémon-Trainerregister mit Daten aus der PokeAPI, 
                    das Pokémon, Typen, Fähigkeiten und Trainerinformationen übersichtlich darstellt.`,
        "how": "Wie ich meinen Arbeitsprozess organisiert habe",
        "da-how-text": `Ich sorgte für sauberen und skalierbaren Code, indem ich das Projekt in wiederverwendbare
                        Komponenten und Module strukturierte. Klare Namenskonventionen, eine konsistente
                        Dateiorganisation und eine gründliche Dokumentation gewährleisteten die Lesbarkeit, 
                        während regelmäßige Tests dazu beitrugen, die Zuverlässigkeit und langfristige Wartbarkeit 
                        sicherzustellen.`,
        "group": "Erfahrung in der Gruppenarbeit",
        "da-group-text": `Bei der Entwicklung von „Pokedex“ habe ich gelernt, APIs effizient einzubinden, 
                            dynamische Daten darzustellen, Benutzeroberflächen zu strukturieren und 
                            asynchrone Datenverarbeitung mit sauberem State-Management umzusetzen.`,
        "techs": "Technologien:",
        "epl-duration": "Dauer: 5 Wochen",
        "epl-p3": `Ein einfaches Jump ’n’ Run, das auf einem objektorientierten Ansatz basiert.
                    Hilf Pepe dabei, Münzen und Salsa-Flaschen zu sammeln, um gegen die Feinde zu kämpfen.`,
        "epl-how-text": `Ich habe das Projekt in wiederverwendbare Module und Klassen strukturiert und
                        dabei eine klare Trennung der Zuständigkeiten sichergestellt. Zu den Clean-Code-Praktiken
                        zählten konsistente Namenskonventionen, eine modulare Dateiorganisation, Inline-Dokumentation
                        sowie regelmäßige Tests, um Lesbarkeit, Skalierbarkeit und langfristige Wartbarkeit zu 
                        gewährleisten.`,
        "learn": "Was ich gelernt habe",
        "epl-learn-text": `Dieses Projekt ermöglichte es mir, mein Verständnis der objektorientierten Programmierung
                            in JavaScript zu vertiefen – insbesondere im Umgang mit Klassen und Vererbung. Als Soloprojekt
                            stärkte es meine Fähigkeit, Code eigenständig zu strukturieren, Probleme zu lösen und meinen
                            Entwicklungs-Workflow kontinuierlich zu optimieren.`,
        "join-duration": "Dauer: 2 Monate",
        "join-p3": `Ein Task-Manager, inspiriert vom Kanban-System. Erstellen und organisieren Sie Aufgaben
                    mittels Drag-and-Drop-Funktionen und weisen Sie Benutzer sowie Kategorien zu.`,
        "join-how-text": `Ich sorgte für sauberen und skalierbaren Code, indem ich das Projekt in wiederverwendbare
                            Komponenten und Module strukturierte. Klare Namenskonventionen, eine konsistente
                            Dokumentation sowie regelmäßige Tests gewährleisteten die Wartbarkeit, Lesbarkeit
                            und eine effiziente Zusammenarbeit während des gesamten Entwicklungsprozesses.`,
        "join-group-text": `Unser Team bestand aus vier Mitgliedern; dabei war ich für die Entwicklung meiner eigenen Features 
                            verantwortlich, unterstützte jedoch gleichzeitig die anderen Teammitglieder bei Fragen und  
                            Herausforderungen. Ich trug aktiv zu einem kollaborativen und gut koordinierten Arbeitsablauf bei 
                            und förderte so eine starke Teamarbeit sowie eine effektive Kommunikation.`,
        "ongoing-p3": `DA Bubble ist eine Slack-Clone-App.
                        Sie revolutioniert die Teamkommunikation und -zusammenarbeit durch 
                        ihre intuitive Benutzeroberfläche, Echtzeit-Nachrichtenübermittlung und 
                        robuste Kanalorganisation.
                        Stell dir eine Plattform ähnlich zu Discord, WhatsApp oder Slack vor, 
                        aber speziell für den geschäftlichen Gebrauch.`,
        "quote-h2": "Suchen Sie einen Teamplayer? Das sagen meine Kollegen über mich.",
        "quote-h2-resp": "Suchen Sie einen Teamplayer?",
        "quote-h2-resp-p": "Das sagen meine Kollegen über mich",
        "quote-project": "Projekt",
        "quote-1": `"Mussa überzeugte im Gruppenprojekt durch
                    technische Fähigkeiten, Zuverlässigkeit 
                    und eine starke Zusammenarbeit im Team."`,
        "quote-2": `"Mussa ist ein zuverlässiger Teamplayer mit exzellenten Entwicklungsfähigkeiten."`,
        "quote-3": `"Klare Codequalität, schnelle Auffassungsgabe und menschlich eine große Bereicherung fürs Team."`,
        "quote-profile":"Linked In Profil",
        "contact-h1": "Kontaktiere mich",
        "contact-text": `Kontaktieren Sie mich gerne bezüglich beruflicher Möglichkeiten,
                        Freelance-Projekte oder Kooperationen in der Softwareentwicklung.
                        Besonders interessiert bin ich daran, skalierbare, nutzerzentrierte
                        Anwendungen zu entwickeln und sauberen, effizienten Code beizusteuern. Ich bin davon überzeugt,
                        dass ich Ihrem Team einen echten Mehrwert bieten und dabei helfen kann, Ideen zum Leben zu erwecken.`,
        "work-together": "Lass uns gemeinsam arbeiten!",             
        "form-name": "Dein Name",
        "form-mail": "Deine Email",
        "form-message": "Deine Nachricht",
        "form-have": "Ich habe die",
        "form-policy": "Datenschutzrichtlinie",
        "form-read": "gelesen und stimme der Verarbeitung meiner Daten, wie dargelegt, zu.",
        "form-send": "senden",
        "legal": "Rechtliche Hinweise",
        "legalContent": `<a class="arrow-back" href="index.html"><img src="img/arrow_back.svg"></a>

                            <h1>Impressum</h1>

                            <h2>Angaben gemäß § 5 TMG</h2>
                            <ul>
                                <li>Mussa Faragi</li>
                                <li>Musterstraße</li>
                                <li>50859 Köln</li>
                            </ul>

                            <p><strong class="blue">Exploring the Board</strong><br>
                            E-Mail: mussa.faragi@gmx.de</p>

                            <h2>1. Akzeptanz der Bedingungen</h2>
                            <p>
                                Durch den Zugriff auf und die Nutzung von <span class="blue">Portfolio</span> (Produkt) erkennen Sie die folgenden
                                Bedingungen und Richtlinien sowie mögliche zukünftige Änderungen oder Ergänzungen an und stimmen diesen zu.
                                Wir, die aufgeführten Studenten, behalten uns das Recht vor, die Bedingungen jederzeit ohne vorherige Ankündigung zu ändern.
                            </p>

                            <h2>2. Umfang und Eigentum des Produkts</h2>
                            <p>
                                <span class="blue">Portfolio</span> wurde im Rahmen eines Gruppenprojekts während eines Webentwicklungs-Bootcamps der
                                <span class="blue">Developer Akademie GmbH</span> entwickelt. Das Projekt dient ausschließlich Bildungszwecken und ist nicht
                                für eine umfangreiche private oder geschäftliche Nutzung vorgesehen. Daher können wir keine Garantie für Verfügbarkeit,
                                Zuverlässigkeit, Genauigkeit oder andere Qualitätsmerkmale dieses Produkts übernehmen.
                            </p>

                            <p>
                                Das Design von <span class="blue">Portfolio</span> gehört der <span class="blue">Developer Akademie GmbH</span>.
                                Jegliche unbefugte Nutzung, Vervielfältigung, Änderung, Verbreitung oder Nachbildung des Designs ist streng untersagt.
                            </p>

                            <h2>3. Eigentumsrechte</h2>
                            <p>
                                Abgesehen vom Design, das Eigentum der <span class="blue">Developer Akademie GmbH</span> ist, behalten wir,
                                die aufgeführten Studenten, sämtliche Eigentumsrechte an <span class="blue">Portfolio</span>, einschließlich aller
                                urheberrechtlich geschützten Inhalte, Marken und sonstigen geschützten Informationen.
                            </p>

                            <h2>4. Nutzung des Produkts</h2>
                            <p>
                                <span class="blue">Portfolio</span> darf ausschließlich für rechtmäßige Zwecke und im Einklang mit allen geltenden Gesetzen
                                und Vorschriften verwendet werden. Jegliche Nutzung von <span class="blue">Portfolio</span> für illegale Aktivitäten oder zur
                                Belästigung, Schädigung, Bedrohung oder Einschüchterung anderer Personen ist streng untersagt.
                                Sie sind allein verantwortlich für Ihre Interaktionen mit anderen Nutzern von <span class="blue">Portfolio</span>.
                            </p>

                            <h2>5. Haftungsausschluss und Haftungsbeschränkung</h2>
                            <p>
                                <span class="blue">Portfolio</span> wird ohne jegliche ausdrückliche oder stillschweigende Gewährleistung bereitgestellt,
                                einschließlich, aber nicht beschränkt auf die Gewährleistung der Marktgängigkeit, Eignung für einen bestimmten Zweck
                                oder Nichtverletzung von Rechten Dritter.
                                In keinem Fall haften wir, die aufgeführten Studenten, oder die <span class="blue">Developer Akademie</span>
                                für direkte oder indirekte Schäden, Neben-, Sonder- oder Folgeschäden, einschließlich entgangener Gewinne,
                                Datenverluste oder sonstiger immaterieller Schäden, selbst wenn wir auf die Möglichkeit solcher Schäden hingewiesen wurden,
                                die sich aus der Nutzung oder Leistung von <span class="blue">Portfolio</span> ergeben.
                            </p>

                            <h2>6. Freistellung</h2>
                            <p>
                                Sie erklären sich damit einverstanden, uns, die aufgeführten Studenten, die
                                <span class="blue">Developer Akademie</span> sowie unsere Partner, Mitarbeiter, Direktoren und Vertreter
                                von sämtlichen Ansprüchen, Schäden, Verlusten, Kosten oder Haftungen (einschließlich angemessener Anwaltskosten)
                                freizustellen, die aus Ihrer Nutzung von <span class="blue">Portfolio</span> oder aus einem Verstoß gegen dieses Impressum entstehen.
                            </p>

                            <p>
                                Bei Fragen oder Hinweisen kontaktieren Sie mich bitte unter mussa.faragi@gmx.de.
                            </p>

                            <p class="date">Datum: 02. Mai 2026</p>`,

        "privacyContent": `<a class="arrow-back" href="index.html"><img src="img/arrow_back.svg"></a>

                                <h1>Datenschutzerklärung</h1>

                                <h2>1. Verantwortliche Stelle</h2>
                                <p>
                                    Mussa Faragi<br>
                                    Musterstraße<br>
                                    E-Mail: mussa.faragi@gmx.de
                                </p>

                                <h2>2. Server-Log-Dateien</h2>
                                <p>
                                    Beim Besuch dieser Website werden automatisch Informationen durch den Hosting-Anbieter erfasst. Dazu gehören:
                                </p>

                                <ul>
                                    <li>IP-Adresse</li>
                                    <li>Datum und Uhrzeit der Anfrage</li>
                                    <li>Browsertyp und Browserversion</li>
                                    <li>Betriebssystem</li>
                                </ul>

                                <p>
                                    Diese Daten dienen ausschließlich der Sicherstellung eines störungsfreien Betriebs sowie der Sicherheit der Website.
                                </p>

                                <h2>3. Hosting</h2>
                                <p>
                                    Diese Website wird bei netcup gehostet. Der Anbieter verarbeitet personenbezogene Daten wie IP-Adressen, um die Website bereitzustellen.
                                </p>

                                <h2>4. Kontaktaufnahme</h2>
                                <p>
                                    Wenn Sie mich per E-Mail kontaktieren, werden Ihre Angaben zur Bearbeitung Ihrer Anfrage gespeichert. Diese Daten werden nicht ohne Ihre Einwilligung weitergegeben.
                                </p>

                                <h2>5. Ihre Rechte</h2>
                                <p>
                                    Nach den geltenden gesetzlichen Bestimmungen haben Sie das Recht:
                                </p>

                                <ul>
                                    <li>Auskunft über Ihre gespeicherten Daten zu erhalten</li>
                                    <li>Berichtigung unrichtiger Daten zu verlangen</li>
                                    <li>Löschung Ihrer Daten zu verlangen</li>
                                    <li>Die Verarbeitung Ihrer Daten einzuschränken</li>
                                    <li>Beschwerde bei einer Aufsichtsbehörde einzureichen</li>
                                </ul>

                                <h2>6. SSL-/TLS-Verschlüsselung</h2>
                                <p>
                                    Diese Website verwendet aus Sicherheitsgründen sowie zum Schutz der Übertragung vertraulicher Inhalte eine SSL-/TLS-Verschlüsselung.
                                </p>

                                <h2>7. Aktualität</h2>
                                <p>
                                    Diese Datenschutzerklärung ist aktuell gültig ab: 02. Mai 2026.  
                                    Ich behalte mir vor, sie bei Bedarf anzupassen.
                                </p>`, 



    }
};