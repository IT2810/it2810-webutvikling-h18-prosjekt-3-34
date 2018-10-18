# IT2810 Webutvikling Prosjekt 3

## Appen's funksjonalitet

Hovedfunksjonaliteten til appen vår er at man kan opprette gjøremål eller skrittmål. Meningen er at man skal kunne holde oversikt over ting man har som mål å få gjort de neste dagene. Et skrittmål vil ikke dukke opp i lista over gjøremål, men heller oppdatere skrittmålet ditt litt lenger ned i appen. Du kan kun ha et skrittmål per dag.
Foreløpig har vi gjort det slik at man kun kan se lister (med gjøremål) for en dag tilbake og en dag framover i tid (samt gjeldende dag). Denne funksjonaliteten vil kunne utvides lett senere, men vi valgte nå at fokuset skulle være på de "mindre" gjøremålene man møter i løpet av en vanlig dag. Antallet ferdige gjøremål i løpet av de tre dagene (i går, i dag og i morgen) vil vises ved hjelp av en counter i bunnen av skjermen.

### ToDo-liste:

Dette er som beskrevet over en slags huskeliste der man kan legge til gjøremål. Man vil ha muligheten til å markere et gjøremål som ferdig og/eller slette gjøremålet. Appen teller antall ferdige gjøremål.

### Skritteller:

En skritteller som henter ut antall skritt for den nåværende dagen, og sjekker dette opp mot skrittmålet du har oppgitt i appen.

### Datoviser:

Vi har valgt å ikke implementere en kalender i vår app, men heller utvide ToDo-lista slik at man får opp en liste med gjøremål for hver dag. Datoviseren er foreløpig implementert slik at man kan gå en dag fram i tid, og en dag tilbake i tid.

## Viktigste valg og løsninger

### Dependencies

### Komponentstruktur

Vi valgte å strukturere appen
![Komponentstrukturen](Componentstructure.png)

## Teknologi

### React Native

Som spesifisert i oppgaveteksten skulle løsningen vår basere seg på React Native med bruk av Expo verktøyet. React Native er ganske likt React som vi brukte i forrige prosjekt, der den største forskjellen er at man i React Native ikke bruker web-komponenter, men heller native-komponenter. React Native var ganske greit å sette seg inn i når vi hadde erfaringen fra forrige prosjekt.

### Expo

## Tredjepartskomponenter og bibliotek

## Bruk av GitHub

Vi har brukt GitHub og issuetracking her aktivt helt fra starten av prosjektet slik at vi alltid har hatt en god oversikt over fremgangen i prosjektet.

Vår "hoved"-branch under utviklingen har vært "dev"-branchen, der vi til enhver tid har hatt en fungerende versjon av appen. Når kode skrevet i andre brancher anses som ferdig har vi dyttet (merget) denne koden til dev

Ellers har vi navngitt de aller fleste branchene basert på en standard der vi skiller mellom for eksempel en ny feature (feat), og en hotfix på følgende måte:

For en ny feature:

> feat/navnPåFeatureHer

Eller for en hotfix:

> hotfix/navnPåHotfixHer

Vi knyttet også commits opp mot issues på github. Dette gjør det lettere å se hva andre jobber på og hva som er gjort i hver commit. Vi brukte også funksjonaliteten i GitHub som gjør at man kan tildele medlemmer ulike issues. Det blir da lettere å få en oversikt over hvor mye og hva slags arbeid som gjenstår.

Underveis i utviklingen av applikasjonen har vi brukt mye parprogrammering. Det kan derfor hende av en av medlemmene i gruppa har vesentlig mer kode commitet til prosjektet, men vi anslår selv at arbeidsfordelingen har vært ganske så jevn.

## Testing

Prosjektet er testet med Jest. Vi har testet at komponentene laster inn riktig ved å lage snapshots, og vi har testet funksjoner som endrer state.

### Snapshottesting

For at testene skulle kjøre igjennom, måtte vi lage et mock object av Date funksjonen til JavaScript. Dette fordi at vi i applikasjonen har et felt i state som bruker New Date(). Mocking av Date er også iht retningslinjene til Jest, som sier at all data i snapshottester bør være deterministisk.
I tillegg har vi fokusert på å gi testene gode beskrivelser. Alle snapshottene er derfor beskrevet slik de burde rendes.
Alle snapshottestene blir godkjent, bortsett fra App. Vi fikk ikke til å mocke Date konstroktøren, så her må man kjøre npm test -- --u for at Snapshoten skal bli riktig. Noen spesifikke komponenter rendrer forskjellig basert på hvilken input vi gir dem, og på disse har vi bare valgt å laste inn en av de (ettersom vi mener dette er nok for å illustrere testing av komponenten).

Det vi har misset litt på er å behandle snapshots som kode, altså å ha de med under utviklingen. Testene ble stort sett skrevet på slutten, og om vi skulle ha gjort det på nytt i et ekte system ville vi ha skrevet de underveis, slik at vi kunne brukt de til å feilsøke kode under utvikling.

### Testing av funksjoner

Vi har skrevet enhetstester for de fleste funksjonene som brukes til lagring av state.
Stepcounter komponenten er tatt fra expo docs, og vi har ikke skrevet noen egne spesifikke enhetstester her annet enn snapshot tester.

I App komponenten har vi brukt AsyncStorage, og for å teste denne har vi tatt i bruk MockAsyncStorage fra pakken 'mock-async-storage'. Denne setter vi opp før testen, og fjerner den når alle testene er kjørt. AsyncStorage ser vi funker i funksjonene våre, da vi tester den opp mot addItem funksjonen og den returnerer riktig.

Vi har ikke fokusert veldig på å få et høyt coverage tall, men vi har uansett vist at vi kan å teste. Det viktigste for at systemet fungerer er testet og vi ser at funksjonene gjør det de skal. I tillegg har vi vist at vi kan Mocke objekter, og bruke dette i testingen vår.

### Funksjonstesting

Vi har også funksjonstestet applikasjonen under utvikling, og når den har blitt ferdig.
Under utvikling har vi fått en Androidbug:
Når vi kjører appen samtidig som vi lagrer endringer i koden - og appen autooppdateres får vi en feilmelding med at det allerede finnes en GoogleApiClient med id 0. Dette får vi kun under utvikling, og har valgt å ikke bruke mye tid på å prøve å rette det, da det ikke gir noen funksjonelle utfordringer under bruk.
