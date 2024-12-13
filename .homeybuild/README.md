# Linja Priser - Homey App

## Beskrivelse
Linja Priser er en Homey-app som henter strømpriser fra Linja sitt API og viser prisen som en sensor i Homey.

## Funksjoner
- Henter strømpriser per time basert på målernummer.
- Viser gjeldende pris som en sensor i Homey.
- Oppdaterer priser automatisk hver time.

## Installasjon

1. **Installer avhengigheter**:
   ```bash
   npm install
   ```

2. **Kjør appen lokalt**:
   ```bash
   homey app run
   ```

3. **Legg til enheten i Homey**:
   - Åpne Homey-appen på mobilen din.
   - Gå til **Enheter** og trykk på **+**.
   - Velg **Linja Priser** og legg til en ny sensor.
   - Oppgi API-nøkkelen og målernummeret når du blir spurt.

## Konfigurasjon
Når enheten legges til, oppgir du:
- **API-nøkkel**: Din unike nøkkel for autentisering mot Linja sitt API.
- **Målernummer (Metering Point ID)**: ID-en for målepunktet ditt.

## Feilsøking
- Hvis appen ikke henter data:
  - Kontroller at API-nøkkelen og målernummeret er korrekt.
  - Sjekk loggene ved å kjøre appen i terminalen:
    ```bash
    homey app run
    ```
- Sørg for at Homey-enheten din er aktiv og på samme nettverk som datamaskinen din.

## Bidra
Hvis du har forslag eller finner feil, er du velkommen til å bidra via GitHub-repository eller kontakte oss direkte.

---

**Takk for at du bruker Linja Priser!**
