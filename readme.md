# Ubiquiti code test (Thor Bröndum Eklund)

A front end implementation of the Ubiquiti device database. It contains features such as searching by name and product line, two different list layouts as well a way to browse the previously fetched version of the database even if it is currently offline.

The project was built with the React framework and was written in TypeScript, as specified in the test. I decided to use Vite as a build tool instead of Webpack, for its performance and comparable stability.

The codebase is structured with one folder for each component, where the main component file is stored as well as subcomponents, as well as stylesheets related to the components.

## Implemented features

- Local version of previously fetched database.
- List view and Grid view
- Search
- Responsive design based on the Ubiquiti homepage

## Suggested features for further development

- Filtration, based on product specifications and line
- Pagination
