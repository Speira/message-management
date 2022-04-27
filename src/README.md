# Src folder

This folder contains all the components used for this app.

 - components/: All the sateless components used in the app
 - contexts/: The contexts using the react context singleton pattern
 - hooks/: The custom hooks to isolate some small reusables logic
 - modules/: Contains all the logic of the app, separated into bundles, they have their own namespace and must be isolated from each others.
 - utils/: Contains the functions and constants utilities used across all the app.
 - index.js: generic file, this is the entry point of the app.
 - App.js: this is the core of the app, the file that calls all the needed logic
