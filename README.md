# iso-countries

Get an ISO (Alpha 2 or Alpha 3) code for a given country name, or get a country name for a given ISO code (Alpha 2 or Alpha 3).


### Installation

```
npm install iso-countries
```


### Usage

```
const isoCountry = require('iso-countries');
```

Get ISO Alpha 2 value for a given country name

```
isoCountry('Canada', 'iso2'); // RESULT: CA
```

Get ISO Alpha 3 value for a given country name

```
isoCountry('Canada', 'iso3'); // RESULT: CAN
```


Get a country name for a given ISO code

```
isoCountry('CA', 'name'); // RESULT: Canada


isoCountry('CAN', 'name'); // RESULT: Canada
```

### Development

Clone repository

```
git clone https://github.com/markogrady1/iso-countries.git
```
Run tests

```
npm run test
```
Run eslint

```
npm run tidy
```
