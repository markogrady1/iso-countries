# iso-country-map

Get an ISO (Alpha 2 or Alpha 3) code for a given country name, or get a country name for a given ISO code (Alpha 2 or Alpha 3).


### Installation

```shell
npm install iso-country-map
```


### Usage

```js
const isoCountry = require('iso-country-map');
```

Get ISO Alpha 2 value for a given country name

```js
isoCountry('Canada', 'iso2'); // RESULT: CA
```

Get ISO Alpha 3 value for a given country name

```js
isoCountry('Canada', 'iso3'); // RESULT: CAN
```


Get a country name for a given ISO code

```js
isoCountry('CA', 'name'); // RESULT: Canada


isoCountry('CAN', 'name'); // RESULT: Canada
```

### Development

Clone repository

```shell
git clone https://github.com/markogrady1/iso-country-map.git
```
Run tests

```shell
npm run test
```
Run eslint

```shell
npm run tidy
```
