const {isoCountry} = require('../index');

describe('isoCountry', function() {
  describe('Country name to ISO-2', function() {
    it('returns an ISO-2 code from a country name', function() {
      expect(isoCountry('Argentina', 'iso2')).toEqual('AR');
      expect(isoCountry('Albania', 'iso2')).toEqual('AL');
      expect(isoCountry('Croatia', 'iso2')).toEqual('HR');
      expect(isoCountry('Zimbabwe', 'iso2')).toEqual('ZW');
      expect(isoCountry('Jamaica', 'iso2')).toEqual('JM');
      expect(isoCountry('Canada', 'iso2')).toEqual('CA');
    });

    it('Should return an ISO-3 code from a country name', function() {
      expect(isoCountry('Argentina', 'iso3')).toEqual('ARG');
      expect(isoCountry('Albania', 'iso3')).toEqual('ALB');
      expect(isoCountry('Croatia', 'iso3')).toEqual('HRV');
      expect(isoCountry('Zimbabwe', 'iso3')).toEqual('ZWE');
      expect(isoCountry('Jamaica', 'iso3')).toEqual('JAM');
      expect(isoCountry('Canada', 'iso3')).toEqual('CAN');
    });

    it('Should return a country name from an ISO-2 code', function() {
      expect(isoCountry('RU', 'name')).toEqual('Russia');
      expect(isoCountry('CH', 'name')).toEqual('Switzerland');
      expect(isoCountry('AU', 'name')).toEqual('Australia');
      expect(isoCountry('NO', 'name')).toEqual('Norway');
      expect(isoCountry('SE', 'name')).toEqual('Sweden');
      expect(isoCountry('BA', 'name')).toEqual('Bosnia and Herzegovina');
      expect(isoCountry('IN', 'name')).toEqual('India');
    });

    it('Should return a country name from an ISO-3 code', function() {
      expect(isoCountry('JPN', 'name')).toEqual('Japan');
      expect(isoCountry('GUY', 'name')).toEqual('Guyana');
      expect(isoCountry('MEX', 'name')).toEqual('Mexico');
      expect(isoCountry('ISL', 'name')).toEqual('Iceland');
      expect(isoCountry('NOR', 'name')).toEqual('Norway');
      expect(isoCountry('PAK', 'name')).toEqual('Pakistan');
      expect(isoCountry('BGD', 'name')).toEqual('Bangladesh');
    });
  });
});