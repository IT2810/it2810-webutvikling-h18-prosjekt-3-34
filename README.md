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
### Expo

## Tredjepartskomponenter og bibliotek

## Testing
Prosjektet er testet med Jest. Vi har testet at komponentene laster inn riktig ved å lage snapshots, og vi har testet de fleste metodene som endrer state.

### Snapshottesting
Alle snapshottestene blir godkjent uten problemer. Noen spesifikke komponenter rendrer forskjellig basert på hvilken input vi gir dem, og på disse har vi bare valgt å laste inn en av de (ettersom vi mener dette er nok for å illustrere testing av komponenten).

### Testing av funksjoner
Vi har skrevet enhetstester for de fleste metodene som brukes til lagring.
Stepcounter komponenten er tatt fra expo docs, og vi har ikke skrevet noen egne spesifikke enhetstester her annet enn snapshot tester.

### Funksjonstesting
Vi har også funksjonstestet applikasjonen når den har blitt ferdig og under utvikling.
Her har vi funnet en Androidbug som vi får under utvikling:
Når vi kjører appen samtidig som vi lagrer endringer i koden - og appen autooppdateres får vi en feilmelding med at det allerede finnes en GoogleApiClient med id 0. Dette får vi kun under utvikling, og har valgt å ikke bruke mye tid på å prøve å rette det, da det ikke gir noen funksjonelle utfordringer under bruk.


## Utvikling og sammarbeid ved bruk av GitHub
Vi har brukt GitHub og issuetracking her aktivt helt fra starten av prosjektet slik at vi alltid har en god oversikt over fremgangen i prosjektet. 

Vi har også navngitt branchene våre ut ifra en standard der vi skiller mellom for eksempel en ny feature (feat), og en hotfix på følgende måte:

For en ny feature:

> feat/navnPåFeatureHer

Eller for en hotfix:

> hotfix/navnPåHotfixHer
