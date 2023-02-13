# Frontend ramverk, Svelte

Inspirerad ifrån [stateofjs](https://stateofjs.com) där jag fick välja ett av de listade ramverken och skapa en enklare variant av sidan med det valda ramverket. <br> Jag valde att koda med Svelte. Bilden nedan är det vi skulle efterlikna på sidan.

![Example](https://user-images.githubusercontent.com/17639389/210244688-34d58e7d-1c6c-4c43-a3ec-e01f89dd7abd.jpg)

## Demolänk
Projektet hostas på Netlify. Klicka [här](--------------------------------------------) för att komma till sidan.



## Installation & Utveckling

1. Skapa ett projekt med önskat ramverk ex med hjälp av: `npm init vite` och följ instruktionerna (ev behöver du ta bort readmefilen först för att sedan lägga tillbaka den).



3. Lägg till paketet med testerna i ditt projekt `npm i -D @plugga-tech/frontend-framework`.
4. Kör `npx plugga init` för att kopiera in testerna och nödvändiga filer till rooten av ditt projekt.
5. Säkerställ att det finns ett `dev` skript i din package.json och att dev-server'n startar på port `5173`.
6. Kör testerna med kommandot `npx plugga test` direkt via terminalen eller lägg till det som ett test-skript i din package.json fil så du kan köra det med `npm test` istället.
7. Nu är du redo att skriva koden med ditt valda ramverk för att få gröna tester.
8. Om det kommer nya uppdateringar till testerna i uppgiften kan du köra `npx plugga update` för att hämta hem det senaste.


