# PoC FNE basé sur Wikibase

Preuve de concept de modélisation de données d’autorité pour un outil de production mutualisée "Fichier National d'Entités" ([ABES](http://www.abes.fr/)-[BNF](https://www.bnf.fr/fr)) basé sur Wikibase.


## In English

Proof of concept of an authority control data model (Fichier national
d’entités) for a mutual data production tool ([ABES](http://www.abes.fr/)-[BNF](https://www.bnf.fr)) based on Wikibase .

## Install

Install [nodeJS](https://nodejs.org/en/download/package-manager/)

Install depedencies :

`npm run install`

## Usage


Extract an from XML file into a JSON file

`npm run extract echantillons/PaulVidal_BnF_13949089.txt`

## Tests

`npm run test [filepath]`

Replace filepath by the path to test file (`tests/interxmarc_pep.js`)
