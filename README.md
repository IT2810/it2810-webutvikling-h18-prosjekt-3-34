# IT2810 Webutvikling Prosjekt 3

## HER KOMMER INNHOLD OM PROSJEKTET

## Testing

Prosjektet er testet med Jest. Vi har testet at komponentene laster inn riktig ved å lage snapshots, og vi har testet de fleste metodene som endrer state.

### Snapshottesting

Alle snapshottestene består testene. Noen av komponentene laster inn forskjellig basert på hvilken input vi gir dem, og på disse har vi bare valgt å laste inn en av de.

### Testing av funksjoner

Vi har skrevet enhetstester for de fleste metodene som brukes til lagring.
Stepcounter komponenten er tatt fra expo docs, og vi har ikke skrevet noen egne spesifikke enhetstester her annet enn snapshot tester.

### Funksjonstesting

Vi har også funksjonstestet applikasjonen når den har blitt ferdig og under utvikling.
Her har vi funnet en Androidbug som vi får under utvikling:
Når vi kjører appen samtidig som vi lagrer endringer i koden - og appen autooppdateres får vi en feilmelding med at det allerede finnes en GoogleApiClient med id 0. Dette får vi kun under utvikling, og har valgt å ikke bruke mye tid på å prøve å rette det, da det ikke gir noen funksjonelle utfordringer under bruk.
