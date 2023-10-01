# Star Wars Wiki

This project is small Star Wars wikipedia application.
Database for it is SWAPI.

**!!! Better version of the project, but without sorting functionality is in branch ```lazy-load-api```, please investigate that version. !!!**

Project is currently loading slowly as it is downloading whole data. The point of this is to have data sorted as API doesn't support sorting.

Some of the data is missing such as planets and vehicles images due to lack of them in [Star Wars Visual Guide](https://starwars-visualguide.com/#/)

## Live demo

lazy-load-api is deployed
[DEMO](https://mrrokiton.github.io/star-wars-wiki/)

Due to Github Pages application will open on not found page, but then just press ```go home``` button

## Install

This project uses node and yarn. You should have them installed before installing project. To install project type:

`yarn`

## Usage

To run this project type:

`yarn start`

## Todos

- [x] Introduce lazyloading in exchange for loss of sorting
- [ ] Store images locally
- [ ] Add cool animations
- [ ] Improve coverage

## Sources

[SWAPI](https://swapi.dev/) - Data API

[Star Wars Visual Guide](https://starwars-visualguide.com/#/) - Pictures
