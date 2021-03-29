const list = require('./iso-list');

function countryIsoMap (target, type) {
  const keyLookup = {
    iso2: 'name',
    iso3: 'name'
  };

  for (const item of list) {
    if (item[keyLookup[type]] === target) {
      return item[type];
    } if (item.iso2 === target || item.iso3 === target) {
      return item.name;
    }
  }
  return undefined;
}

module.exports.isoCountry = countryIsoMap;
