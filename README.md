# IT2810 Webutvikling Prosjekt 3

## Avgrensning av oppgaven
Applikasjonen vår heter «Dagsplanlegger’n». Poenget med den er å kunne ha en «Personal Information and Motivation Manager» med fokus på dagen i dag. Det finnes hundrevis av kalendere og todoapplikasjoner, men med slike applikasjoner er det lett å være ivrig i starten, planlegge masse ting, for så at alt går i glemmeboken fordi det blir for overveldende. Derfor så vi behovet for en applikasjon hvor fokuset var på det man har å gjøre i dag. Vi har også lagt til en navigering, hvor man kan gå en dag fram i tid (og en dag tilbake), og det er for å kunne planlegge morgendagen i tillegg. Vi har også laget appen slik at utvidelse av antall dager man har oversikt over vil være enkel. Motivasjonsdelen av oppgaven oppfylles ved at man ser hvor mange oppgaver man har gjennomført, og man ser hvor mange skritt man mangler for å oppnå skrittmålet sitt. Har man oppnådd målet vil det dynamisk komme en tekst som forteller deg dette.

## Funksjonalitet
Hovedfunksjonaliteten til appen vår er at man kan opprette gjøremål og skrittmål. Et skrittmål vil ikke dukke opp i lista over gjøremål, men heller oppdatere skrittmålet ditt litt lenger ned i appen. Du kan kun ha ett skrittmål per dag.

### ToDo-liste:
Dette er som beskrevet over en slags huskeliste der man kan legge til gjøremål. Man vil ha muligheten til å markere et gjøremål som ferdig og/eller slette gjøremålet. Appen teller antall ferdige gjøremål.

### Skritteller:
En skritteller som henter ut antall skritt for den nåværende dagen, og sjekker dette opp mot skrittmålet du har oppgitt i appen. Vi hadde et problem med skrittelleren på android, dette problemet er nærmere beskrevet i "funksjonstesting" lenger ned. For å implementere skrittelleren brukte vi kode fra expo dokumentasjonen, som også er nærmere lenger ned.

### Datoviser:
Vi har valgt å ikke implementere en kalender i vår app, men heller utvide ToDo-lista slik at man får opp en liste med gjøremål for hver dag. Datoviseren er foreløpig implementert slik at man kan gå en dag fram i tid, og en dag tilbake i tid. Dette er for å enkelt kunne planlegge en dag frem i tid.

## Komponentstruktur
Vi valgte å strukturere komponentene i appen som på bildet under:
![Komponentstrukturen](Componentstructure.PNG)

Noen vil kanskje mene at appen vår er delt opp i litt mange komponenter, men vi mener dette er hensiktsmessig da dette gir oss god oversikt over hvilken kode som er hvor.

Hovedkomponenten vår er App, og det er den som rendres når man starter appen. I App rendres en header (som ikke er en egen komponent), fire komponenter, en counter for antall ferdige gjøremål og en knapp for å legge til nye gjøremål/skrittmål. De fire komponentene er:
#### Datecomponent
Denne komponenten består av knappene som gjør at man kan navigere mellom dager, samt en visning av current date.
Knappene får sine funksjoner fra App, på grunn av at knappene endrer state i App.

#### Todolist
Dette er komponenten som viser alle gjøremålene i ruten midt på skjermen. Denne komponenten har en underkomponent, itemcomponent. Hovedsakelig fungerer todolist sånn at man rendrer et scrollview med itemcomponents, som er selve komponenten for de individuelle gjøremålene.

#### Addtodo
Dette er komponenten som rendres når man trykker på "Add item"-knappen. Det er i denne komponenten vi bruker react-native-modal. Funksjonene som brukes her kommer også fra, app av samme grunn som over, at staten funksjonene endrer er i app.

#### Stepcounter
Komponenten som viser antall steps du har tatt i dag. Vi regner også ut hvor mange steps som mangler før du har nådd målet ditt. Dersom målet er nådd vil teksten endre seg til en motiverende melding.

### Styling
Etter anbefaling fra fagstaben valgte vi også å ha et stylesheet for hver komponent. Vi samlet stylesheet'ene i en egen mappe, og navnga de etter hvilken fil de skulle style. Ved å organisere det på denne måten sørger vi for at lengden på hvert stylesheet blir minimal, og at vi har oversikt over hvor de ulike komponentene har sin tilhørende styling.

## Teknologi

### React Native

Som spesifisert i oppgaveteksten skulle løsningen vår basere seg på React Native med bruk av Expo verktøyet. React Native er ganske likt React som vi brukte i forrige prosjekt, der den største forskjellen er at man i React Native ikke bruker web-komponenter, men heller native-komponenter. React Native var ganske greit å sette seg inn i når vi hadde erfaringen fra forrige prosjekt.

#### AsyncStorage

AsyncStorage blir brukt for å lagre elementer på mobilen slik at de ikke forsvinner når brukeren går ut av appen. I vår løsning har vi valgt å bruke multiGet, multiSet og getAllKeys istedenfor getItems og setItems da dette passet bedre med vår implementasjon av items-liste. De forskjellige løsningene ser man i funksjonene storeItems() og loadListItems(). De blir henholdsvis brukt til å lagre og laste inn.

### Expo

Expo tilbyr muligheten til å slippe å skrive "native" kode, da de har shared native runtime. Dette betyr at med denne teknologien så kan man bare fokusere på å skrive JavaScript kode, og slipper å tenke på IOS eller Android spesifikke innstillinger. Det kommer også med egen CLI og web UI som gjør utviklingen og distribusjonen enklere. Expo utvider også React Native plattformen ved å tilby ekstra moduler, som skal bety at man bruker mindre tid på å konfigurere og mer tid på å utvikle.

## Tredjepartskomponenter og bibliotek

### Pedometer API
For å lage en brukervennlig «Dagsplanlegger» med skrittmål trengte vi å bruke mobilens skritteller. Til dette har vi brukt expo sitt Pedometer API. Dette ga oss akkurat det vi var ute etter, og dette API’et bygger på Core Motion for iOS og Google Fit for Android.
```
https://docs.expo.io/versions/latest/sdk/pedometer
```
For å tilgang til Pedometer API'et må man importere komponenten på følgende måte:
```
Import Expo from «expo»;
Import { Pedometer } from «expo»;
```
Pedometer API’et tilbyr funksjonalitet for å hente ut skritt som tidligere er gått gjennom getStepCountAsync(start, end) funksjonen og for å hente ut skritt man tar når man har applikasjonen oppe. Dette kan gjøres ved watchStepCount funksjonen.
I vår applikasjon har vi kun brukt getStepCountAsync, fordi applikasjonen ikke er ment å være en treningsapp, men heller en applikasjon for å se om man oppnår mål.

Vi har stort sett brukt den samme koden som det eksemplet de viser, men har tilpasset det slik at skrittelleren starter fra klokken 00:00 og varer til 23:59 i stedet for å se på de siste 24 timene. Dette gjør at det passer inn i vår «Dagsplanlegger».
Man kan selv bestemme tidsintervallet man vil hente ut skritt fra, og hvordan man endrer dette er ved å endre "start" og "end" konstantene i koden under.


Utdrag fra Stepcounter komponenten vår (noen av kodelinjene er nærmere forklart under):
``` 
    const start = new Date();
    start.setHours(0, 0, 0, 0);
    const end = new Date();
    Pedometer.getStepCountAsync(start, end).then(
      result => {
        this.setState({ pastStepCount: result.steps });
      },
      error => {
        this.setState({
          pastStepCount: "Unavailable.."
        });
      }
    );
```

Denne linjen kode er for å sette start til kl 00:00 i dag, altså helt i starten av dagen. Her kan man variere starttidspunktet for å få skritt fra et annet tidsintervall.
```
 start.setHours(0, 0, 0, 0);
```

Her setter vi slutttidspunktet i intervallet vårt, som er tidspunktet akkurat nå. Dette gjør at vi alltid henter antall skritt en bruker har gått fra kl 00:00 i dag, til akkurat nå.
```
 const end = new Date();
```

Selve funksjonen som henter ut skrittinformasjonen fra telefonen er getStepCountAsync. Enkelt og greit så tar funksjonen inn to verdier, start og slutt) og henter ut antall skritt mellom disse to tidspunktene.
```
Pedometer.getStepCountAsync(start, end).then(...);
```
### Testpakker
Vi hentet pakke fra "mock-async-storage" og den bruker vi til å lage et mockobjekt til asyncStorage.
Den installeres med 
```
    npm install --save mock-async-storage
```
Og når man importerer definerer man to funksjoner. 
```
const mockAsync = () => {
  const mockImpl = new MockAsyncStorage();
  jest.mock("AsyncStorage", () => mockImpl);
};

const releaseMockAsync = () => jest.unmock("AsyncStorage");
```
En for å sette opp objektet og en for å ta den ned igjen. Dette har vi så lagt ihhv beforeAll og afterAll funksjonene.

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
