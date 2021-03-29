const countryList = [
  {
    iso2: 'AF',
    iso3: 'AFG',
    name: 'Afghanistan',
    localName: 'افغانستان'
  },
  {
    iso2: 'AX',
    iso3: 'ALA',
    name: 'Åland Islands',
    localName: 'Åland'
  },
  {
    iso2: 'AL',
    iso3: 'ALB',
    name: 'Albania',
    localName: 'Shqipëria'
  },
  {
    iso2: 'DZ',
    iso3: 'DZA',
    name: 'Algeria',
    localName: 'الجزائر'
  },
  {
    iso2: 'AS',
    iso3: 'ASM',
    name: 'American Samoa',
    localName: 'American Samoa'
  },
  {
    iso2: 'AD',
    iso3: 'AND',
    name: 'Andorra',
    localName: 'Andorra'
  },
  {
    iso2: 'AO',
    iso3: 'AGO',
    name: 'Angola',
    localName: 'Angola'
  },
  {
    iso2: 'AI',
    iso3: 'AIA',
    name: 'Anguilla',
    localName: 'Anguilla'
  },
  {
    iso2: 'AQ',
    iso3: 'ATA',
    name: 'Antarctica',
    localName: 'Antarctica'
  },
  {
    iso2: 'AG',
    iso3: 'ATG',
    name: 'Antigua and Barbuda',
    localName: 'Antigua and Barbuda'
  },
  {
    iso2: 'AR',
    iso3: 'ARG',
    name: 'Argentina',
    localName: 'Argentina'
  },
  {
    iso2: 'AM',
    iso3: 'ARM',
    name: 'Armenia',
    localName: 'Հայաստան'
  },
  {
    iso2: 'AW',
    iso3: 'ABW',
    name: 'Aruba',
    localName: 'Aruba'
  },
  {
    iso2: 'AU',
    iso3: 'AUS',
    name: 'Australia',
    localName: 'Australia'
  },
  {
    iso2: 'AT',
    iso3: 'AUT',
    name: 'Austria',
    localName: 'Österreich'
  },
  {
    iso2: 'AZ',
    iso3: 'AZE',
    name: 'Azerbaijan',
    localName: 'Azərbaycan'
  },
  {
    iso2: 'BS',
    iso3: 'BHS',
    name: 'Bahamas',
    localName: 'Bahamas'
  },
  {
    iso2: 'BH',
    iso3: 'BHR',
    name: 'Bahrain',
    localName: '‏البحرين'
  },
  {
    iso2: 'BD',
    iso3: 'BGD',
    name: 'Bangladesh',
    localName: 'Bangladesh'
  },
  {
    iso2: 'BB',
    iso3: 'BRB',
    name: 'Barbados',
    localName: 'Barbados'
  },
  {
    iso2: 'BY',
    iso3: 'BLR',
    name: 'Belarus',
    localName: 'Белару́сь'
  },
  {
    iso2: 'BE',
    iso3: 'BEL',
    name: 'Belgium',
    localName: 'België'
  },
  {
    iso2: 'BZ',
    iso3: 'BLZ',
    name: 'Belize',
    localName: 'Belize'
  },
  {
    iso2: 'BJ',
    iso3: 'BEN',
    name: 'Benin',
    localName: 'Bénin'
  },
  {
    iso2: 'BM',
    iso3: 'BMU',
    name: 'Bermuda',
    localName: 'Bermuda'
  },
  {
    iso2: 'BT',
    iso3: 'BTN',
    name: 'Bhutan',
    localName: 'ʼbrug-yul'
  },
  {
    iso2: 'BO',
    iso3: 'BOL',
    name: 'Bolivia',
    localName: 'Bolivia'
  },
  {
    iso2: 'BQ',
    iso3: 'BES',
    name: 'Bonaire, Sint Eustatius and Saba',
    localName: 'Bonaire'
  },
  {
    iso2: 'BA',
    iso3: 'BIH',
    name: 'Bosnia and Herzegovina',
    localName: 'Bosna i Hercegovina'
  },
  {
    iso2: 'BW',
    iso3: 'BWA',
    name: 'Botswana',
    localName: 'Botswana'
  },
  {
    iso2: 'BV',
    iso3: 'BVT',
    name: 'Bouvet Island',
    localName: 'Bouvetøya'
  },
  {
    iso2: 'BR',
    iso3: 'BRA',
    name: 'Brazil',
    localName: 'Brasil'
  },
  {
    iso2: 'IO',
    iso3: 'IOT',
    name: 'British Indian Ocean Territory',
    localName: 'British Indian Ocean Territory'
  },
  {
    iso2: 'UM',
    iso3: 'UMI',
    name: 'United States Minor Outlying Islands',
    localName: 'United States Minor Outlying Islands'
  },
  {
    iso2: 'VG',
    iso3: 'VGB',
    name: 'British Virgin',
    localName: 'British Virgin Islands'
  },
  {
    iso2: 'VI',
    iso3: 'VIR',
    name: 'US Virgin Islands',
    localName: 'Virgin Islands of the United States'
  },
  {
    iso2: 'BN',
    iso3: 'BRN',
    name: 'Brunei Darussalam',
    localName: 'Negara Brunei Darussalam'
  },
  {
    iso2: 'BG',
    iso3: 'BGR',
    name: 'Bulgaria',
    localName: 'България'
  },
  {
    iso2: 'BF',
    iso3: 'BFA',
    name: 'Burkina Faso',
    localName: 'Burkina Faso'
  },
  {
    iso2: 'BI',
    iso3: 'BDI',
    name: 'Burundi',
    localName: 'Burundi'
  },
  {
    iso2: 'KH',
    iso3: 'KHM',
    name: 'Cambodia',
    localName: 'Kâmpŭchéa'
  },
  {
    iso2: 'CM',
    iso3: 'CMR',
    name: 'Cameroon',
    localName: 'Cameroon'
  },
  {
    iso2: 'CA',
    iso3: 'CAN',
    name: 'Canada',
    localName: 'Canada'
  },
  {
    iso2: 'CV',
    iso3: 'CPV',
    name: 'Cabo Verde',
    localName: 'Cabo Verde'
  },
  {
    iso2: 'KY',
    iso3: 'CYM',
    name: 'Cayman Islands',
    localName: 'Cayman Islands'
  },
  {
    iso2: 'CF',
    iso3: 'CAF',
    name: 'Central African Republic',
    localName: 'Ködörösêse tî Bêafrîka'
  },
  {
    iso2: 'TD',
    iso3: 'TCD',
    name: 'Chad',
    localName: 'Tchad'
  },
  {
    iso2: 'CL',
    iso3: 'CHL',
    name: 'Chile',
    localName: 'Chile'
  },
  {
    iso2: 'CN',
    iso3: 'CHN',
    name: 'China',
    localName: '中国'
  },
  {
    iso2: 'CX',
    iso3: 'CXR',
    name: 'Christmas Island',
    localName: 'Christmas Island'
  },
  {
    iso2: 'CC',
    iso3: 'CCK',
    name: 'Cocos (Keeling) Islands',
    localName: 'Cocos (Keeling) Islands'
  },
  {
    iso2: 'CO',
    iso3: 'COL',
    name: 'Colombia',
    localName: 'Colombia'
  },
  {
    iso2: 'KM',
    iso3: 'COM',
    name: 'Comoros',
    localName: 'Komori'
  },
  {
    iso2: 'CG',
    iso3: 'COG',
    name: 'Congo',
    localName: 'République du Congo'
  },
  {
    iso2: 'CD',
    iso3: 'COD',
    name: 'Democratic Republic of the Congo',
    localName: 'République démocratique du Congo'
  },
  {
    iso2: 'CI',
    iso3: 'CIV',
    name: 'Côte d\'Ivoire',
    localName: 'Côte d\'Ivoire'
  },
  {
    iso2: 'CK',
    iso3: 'COK',
    name: 'Cook Islands',
    localName: 'Cook Islands'
  },
  {
    iso2: 'CR',
    iso3: 'CRI',
    name: 'Costa Rica',
    localName: 'Costa Rica'
  },
  {
    iso2: 'HR',
    iso3: 'HRV',
    name: 'Croatia',
    localName: 'Hrvatska'
  },
  {
    iso2: 'CU',
    iso3: 'CUB',
    name: 'Cuba',
    localName: 'Cuba'
  },
  {
    iso2: 'CW',
    iso3: 'CUW',
    name: 'Curaçao',
    localName: 'Curaçao'
  },
  {
    iso2: 'CY',
    iso3: 'CYP',
    name: 'Cyprus',
    localName: 'Κύπρος'
  },
  {
    iso2: 'CZ',
    iso3: 'CZE',
    name: 'Czech Republic',
    localName: 'Česká republika'
  },
  {
    iso2: 'DK',
    iso3: 'DNK',
    name: 'Denmark',
    localName: 'Danmark'
  },
  {
    iso2: 'DJ',
    iso3: 'DJI',
    name: 'Djibouti',
    localName: 'Djibouti'
  },
  {
    iso2: 'DM',
    iso3: 'DMA',
    name: 'Dominica',
    localName: 'Dominica'
  },
  {
    iso2: 'DO',
    iso3: 'DOM',
    name: 'Dominican Republic',
    localName: 'República Dominicana'
  },
  {
    iso2: 'EC',
    iso3: 'ECU',
    name: 'Ecuador',
    localName: 'Ecuador'
  },
  {
    iso2: 'EG',
    iso3: 'EGY',
    name: 'Egypt',
    localName: 'مصر‎'
  },
  {
    iso2: 'GB',
    iso3: 'ENG',
    name: 'England',
    localName: 'England'
  },
  {
    iso2: 'SV',
    iso3: 'SLV',
    name: 'El Salvador',
    localName: 'El Salvador'
  },
  {
    iso2: 'GQ',
    iso3: 'GNQ',
    name: 'Equatorial Guinea',
    localName: 'Guinea Ecuatorial'
  },
  {
    iso2: 'ER',
    iso3: 'ERI',
    name: 'Eritrea',
    localName: 'ኤርትራ'
  },
  {
    iso2: 'EE',
    iso3: 'EST',
    name: 'Estonia',
    localName: 'Eesti'
  },
  {
    iso2: 'ET',
    iso3: 'ETH',
    name: 'Ethiopia',
    localName: 'ኢትዮጵያ'
  },
  {
    iso2: 'FK',
    iso3: 'FLK',
    name: 'Falkland Islands',
    localName: 'Falkland Islands'
  },
  {
    iso2: 'FO',
    iso3: 'FRO',
    name: 'Faroe Islands',
    localName: 'Føroyar'
  },
  {
    iso2: 'FJ',
    iso3: 'FJI',
    name: 'Fiji',
    localName: 'Fiji'
  },
  {
    iso2: 'FI',
    iso3: 'FIN',
    name: 'Finland',
    localName: 'Suomi'
  },
  {
    iso2: 'FR',
    iso3: 'FRA',
    name: 'France',
    localName: 'France'
  },
  {
    iso2: 'GF',
    iso3: 'GUF',
    name: 'French Guiana',
    localName: 'Guyane française'
  },
  {
    iso2: 'PF',
    iso3: 'PYF',
    name: 'French Polynesia',
    localName: 'Polynésie française'
  },
  {
    iso2: 'TF',
    iso3: 'ATF',
    name: 'French Southern Territories',
    localName: 'Territoire des Terres australes et antarctiques françaises'
  },
  {
    iso2: 'GA',
    iso3: 'GAB',
    name: 'Gabon',
    localName: 'Gabon'
  },
  {
    iso2: 'GM',
    iso3: 'GMB',
    name: 'Gambia',
    localName: 'Gambia'
  },
  {
    iso2: 'GE',
    iso3: 'GEO',
    name: 'Georgia',
    localName: 'საქართველო'
  },
  {
    iso2: 'DE',
    iso3: 'DEU',
    name: 'Germany',
    localName: 'Deutschland'
  },
  {
    iso2: 'GH',
    iso3: 'GHA',
    name: 'Ghana',
    localName: 'Ghana'
  },
  {
    iso2: 'GI',
    iso3: 'GIB',
    name: 'Gibraltar',
    localName: 'Gibraltar'
  },
  {
    iso2: 'GR',
    iso3: 'GRC',
    name: 'Greece',
    localName: 'Ελλάδα'
  },
  {
    iso2: 'GL',
    iso3: 'GRL',
    name: 'Greenland',
    localName: 'Kalaallit Nunaat'
  },
  {
    iso2: 'GD',
    iso3: 'GRD',
    name: 'Grenada',
    localName: 'Grenada'
  },
  {
    iso2: 'GP',
    iso3: 'GLP',
    name: 'Guadeloupe',
    localName: 'Guadeloupe'
  },
  {
    iso2: 'GU',
    iso3: 'GUM',
    name: 'Guam',
    localName: 'Guam'
  },
  {
    iso2: 'GT',
    iso3: 'GTM',
    name: 'Guatemala',
    localName: 'Guatemala'
  },
  {
    iso2: 'GG',
    iso3: 'GGY',
    name: 'Guernsey',
    localName: 'Guernsey'
  },
  {
    iso2: 'GN',
    iso3: 'GIN',
    name: 'Guinea',
    localName: 'Guinée'
  },
  {
    iso2: 'GW',
    iso3: 'GNB',
    name: 'Guinea-Bissau',
    localName: 'Guiné-Bissau'
  },
  {
    iso2: 'GY',
    iso3: 'GUY',
    name: 'Guyana',
    localName: 'Guyana'
  },
  {
    iso2: 'HT',
    iso3: 'HTI',
    name: 'Haiti',
    localName: 'Haïti'
  },
  {
    iso2: 'HM',
    iso3: 'HMD',
    name: 'Heard Island and McDonald Islands',
    localName: 'Heard Island and McDonald Islands'
  },
  {
    iso2: 'VA',
    iso3: 'VAT',
    name: 'Holy See',
    localName: 'Sancta Sedes'
  },
  {
    iso2: 'HN',
    iso3: 'HND',
    name: 'Honduras',
    localName: 'Honduras'
  },
  {
    iso2: 'HK',
    iso3: 'HKG',
    name: 'Hong Kong',
    localName: '香港'
  },
  {
    iso2: 'HU',
    iso3: 'HUN',
    name: 'Hungary',
    localName: 'Magyarország'
  },
  {
    iso2: 'IS',
    iso3: 'ISL',
    name: 'Iceland',
    localName: 'Ísland'
  },
  {
    iso2: 'IN',
    iso3: 'IND',
    name: 'India',
    localName: 'भारत'
  },
  {
    iso2: 'ID',
    iso3: 'IDN',
    name: 'Indonesia',
    localName: 'Indonesia'
  },
  {
    iso2: 'IR',
    iso3: 'IRN',
    name: 'Iran',
    localName: 'ایران'
  },
  {
    iso2: 'IQ',
    iso3: 'IRQ',
    name: 'Iraq',
    localName: 'العراق'
  },
  {
    iso2: 'IE',
    iso3: 'IRL',
    name: 'Ireland',
    localName: 'Éire'
  },
  {
    iso2: 'IM',
    iso3: 'IMN',
    name: 'Isle of Man',
    localName: 'Isle of Man'
  },
  {
    iso2: 'IL',
    iso3: 'ISR',
    name: 'Israel',
    localName: 'יִשְׂרָאֵל'
  },
  {
    iso2: 'IT',
    iso3: 'ITA',
    name: 'Italy',
    localName: 'Italia'
  },
  {
    iso2: 'JM',
    iso3: 'JAM',
    name: 'Jamaica',
    localName: 'Jamaica'
  },
  {
    iso2: 'JP',
    iso3: 'JPN',
    name: 'Japan',
    localName: '日本'
  },
  {
    iso2: 'JE',
    iso3: 'JEY',
    name: 'Jersey',
    localName: 'Jersey'
  },
  {
    iso2: 'JO',
    iso3: 'JOR',
    name: 'Jordan',
    localName: 'الأردن'
  },
  {
    iso2: 'KZ',
    iso3: 'KAZ',
    name: 'Kazakhstan',
    localName: 'Қазақстан'
  },
  {
    iso2: 'KE',
    iso3: 'KEN',
    name: 'Kenya',
    localName: 'Kenya'
  },
  {
    iso2: 'KI',
    iso3: 'KIR',
    name: 'Kiribati',
    localName: 'Kiribati'
  },
  {
    iso2: 'KW',
    iso3: 'KWT',
    name: 'Kuwait',
    localName: 'الكويت'
  },
  {
    iso2: 'KG',
    iso3: 'KGZ',
    name: 'Kyrgyzstan',
    localName: 'Кыргызстан'
  },
  {
    iso2: 'LA',
    iso3: 'LAO',
    name: 'Laos',
    localName: 'ສປປລາວ'
  },
  {
    iso2: 'LV',
    iso3: 'LVA',
    name: 'Latvia',
    localName: 'Latvija'
  },
  {
    iso2: 'LB',
    iso3: 'LBN',
    name: 'Lebanon',
    localName: 'لبنان'
  },
  {
    iso2: 'LS',
    iso3: 'LSO',
    name: 'Lesotho',
    localName: 'Lesotho'
  },
  {
    iso2: 'LR',
    iso3: 'LBR',
    name: 'Liberia',
    localName: 'Liberia'
  },
  {
    iso2: 'LY',
    iso3: 'LBY',
    name: 'Libya',
    localName: '‏ليبيا'
  },
  {
    iso2: 'LI',
    iso3: 'LIE',
    name: 'Liechtenstein',
    localName: 'Liechtenstein'
  },
  {
    iso2: 'LT',
    iso3: 'LTU',
    name: 'Lithuania',
    localName: 'Lietuva'
  },
  {
    iso2: 'LU',
    iso3: 'LUX',
    name: 'Luxembourg',
    localName: 'Luxembourg'
  },
  {
    iso2: 'MO',
    iso3: 'MAC',
    name: 'Macao',
    localName: '澳門'
  },
  {
    iso2: 'MK',
    iso3: 'MKD',
    name: 'North Macedonia',
    localName: 'Македонија'
  },
  {
    iso2: 'MG',
    iso3: 'MDG',
    name: 'Madagascar',
    localName: 'Madagasikara'
  },
  {
    iso2: 'MW',
    iso3: 'MWI',
    name: 'Malawi',
    localName: 'Malawi'
  },
  {
    iso2: 'MY',
    iso3: 'MYS',
    name: 'Malaysia',
    localName: 'Malaysia'
  },
  {
    iso2: 'MV',
    iso3: 'MDV',
    name: 'Maldives',
    localName: 'Maldives'
  },
  {
    iso2: 'ML',
    iso3: 'MLI',
    name: 'Mali',
    localName: 'Mali'
  },
  {
    iso2: 'MT',
    iso3: 'MLT',
    name: 'Malta',
    localName: 'Malta'
  },
  {
    iso2: 'MH',
    iso3: 'MHL',
    name: 'Marshall Islands',
    localName: 'M̧ajeļ'
  },
  {
    iso2: 'MQ',
    iso3: 'MTQ',
    name: 'Martinique',
    localName: 'Martinique'
  },
  {
    iso2: 'MR',
    iso3: 'MRT',
    name: 'Mauritania',
    localName: 'موريتانيا'
  },
  {
    iso2: 'MU',
    iso3: 'MUS',
    name: 'Mauritius',
    localName: 'Maurice'
  },
  {
    iso2: 'YT',
    iso3: 'MYT',
    name: 'Mayotte',
    localName: 'Mayotte'
  },
  {
    iso2: 'MX',
    iso3: 'MEX',
    name: 'Mexico',
    localName: 'México'
  },
  {
    iso2: 'FM',
    iso3: 'FSM',
    name: 'Micronesia (Federated States of)',
    localName: 'Micronesia'
  },
  {
    iso2: 'MD',
    iso3: 'MDA',
    name: 'Moldova',
    localName: 'Moldova'
  },
  {
    iso2: 'MC',
    iso3: 'MCO',
    name: 'Monaco',
    localName: 'Monaco'
  },
  {
    iso2: 'MN',
    iso3: 'MNG',
    name: 'Mongolia',
    localName: 'Монгол улс'
  },
  {
    iso2: 'ME',
    iso3: 'MNE',
    name: 'Montenegro',
    localName: 'Црна Гора'
  },
  {
    iso2: 'MS',
    iso3: 'MSR',
    name: 'Montserrat',
    localName: 'Montserrat'
  },
  {
    iso2: 'MA',
    iso3: 'MAR',
    name: 'Morocco',
    localName: 'المغرب'
  },
  {
    iso2: 'MZ',
    iso3: 'MOZ',
    name: 'Mozambique',
    localName: 'Moçambique'
  },
  {
    iso2: 'MM',
    iso3: 'MMR',
    name: 'Myanmar',
    localName: 'Myanma'
  },
  {
    iso2: 'NA',
    iso3: 'NAM',
    name: 'Namibia',
    localName: 'Namibia'
  },
  {
    iso2: 'NR',
    iso3: 'NRU',
    name: 'Nauru',
    localName: 'Nauru'
  },
  {
    iso2: 'NP',
    iso3: 'NPL',
    name: 'Nepal',
    localName: 'नेपाल'
  },
  {
    iso2: 'NL',
    iso3: 'NLD',
    name: 'Netherlands',
    localName: 'Nederland'
  },
  {
    iso2: 'NC',
    iso3: 'NCL',
    name: 'New Caledonia',
    localName: 'Nouvelle-Calédonie'
  },
  {
    iso2: 'NZ',
    iso3: 'NZL',
    name: 'New Zealand',
    localName: 'New Zealand'
  },
  {
    iso2: 'NI',
    iso3: 'NIC',
    name: 'Nicaragua',
    localName: 'Nicaragua'
  },
  {
    iso2: 'NE',
    iso3: 'NER',
    name: 'Niger',
    localName: 'Niger'
  },
  {
    iso2: 'NG',
    iso3: 'NGA',
    name: 'Nigeria',
    localName: 'Nigeria'
  },
  {
    iso2: 'NU',
    iso3: 'NIU',
    name: 'Niue',
    localName: 'Niuē'
  },
  {
    iso2: 'NF',
    iso3: 'NFK',
    name: 'Norfolk Island',
    localName: 'Norfolk Island'
  },
  {
    iso2: 'KP',
    iso3: 'PRK',
    name: 'North Korea',
    localName: '북한'
  },
  {
    iso2: 'MP',
    iso3: 'MNP',
    name: 'Northern Mariana Islands',
    localName: 'Northern Mariana Islands'
  },
  {
    iso2: 'NO',
    iso3: 'NOR',
    name: 'Norway',
    localName: 'Norge'
  },
  {
    iso2: 'OM',
    iso3: 'OMN',
    name: 'Oman',
    localName: 'عمان'
  },
  {
    iso2: 'PK',
    iso3: 'PAK',
    name: 'Pakistan',
    localName: 'Pakistan'
  },
  {
    iso2: 'PW',
    iso3: 'PLW',
    name: 'Palau',
    localName: 'Palau'
  },
  {
    iso2: 'PS',
    iso3: 'PSE',
    name: 'Palestine',
    localName: 'فلسطين'
  },
  {
    iso2: 'PA',
    iso3: 'PAN',
    name: 'Panama',
    localName: 'Panamá'
  },
  {
    iso2: 'PG',
    iso3: 'PNG',
    name: 'Papua New Guinea',
    localName: 'Papua Niugini'
  },
  {
    iso2: 'PY',
    iso3: 'PRY',
    name: 'Paraguay',
    localName: 'Paraguay'
  },
  {
    iso2: 'PE',
    iso3: 'PER',
    name: 'Peru',
    localName: 'Perú'
  },
  {
    iso2: 'PH',
    iso3: 'PHL',
    name: 'Philippines',
    localName: 'Pilipinas'
  },
  {
    iso2: 'PN',
    iso3: 'PCN',
    name: 'Pitcairn',
    localName: 'Pitcairn Islands'
  },
  {
    iso2: 'PL',
    iso3: 'POL',
    name: 'Poland',
    localName: 'Polska'
  },
  {
    iso2: 'PT',
    iso3: 'PRT',
    name: 'Portugal',
    localName: 'Portugal'
  },
  {
    iso2: 'PR',
    iso3: 'PRI',
    name: 'Puerto Rico',
    localName: 'Puerto Rico'
  },
  {
    iso2: 'QA',
    iso3: 'QAT',
    name: 'Qatar',
    localName: 'قطر'
  },
  {
    iso2: 'XK',
    iso3: 'KOS',
    name: 'Kosovo',
    localName: 'Republika e Kosovës'
  },
  {
    iso2: 'RE',
    iso3: 'REU',
    name: 'Réunion',
    localName: 'La Réunion'
  },
  {
    iso2: 'RO',
    iso3: 'ROU',
    name: 'Romania',
    localName: 'România'
  },
  {
    iso2: 'RU',
    iso3: 'RUS',
    name: 'Russia',
    localName: 'Россия'
  },
  {
    iso2: 'RW',
    iso3: 'RWA',
    name: 'Rwanda',
    localName: 'Rwanda'
  },
  {
    iso2: 'BL',
    iso3: 'BLM',
    name: 'Saint Barthélemy',
    localName: 'Saint-Barthélemy'
  },
  {
    iso2: 'SH',
    iso3: 'SHN',
    name: 'Saint Helena, Ascension and Tristan da Cunha',
    localName: 'Saint Helena'
  },
  {
    iso2: 'KN',
    iso3: 'KNA',
    name: 'Saint Kitts and Nevis',
    localName: 'Saint Kitts and Nevis'
  },
  {
    iso2: 'LC',
    iso3: 'LCA',
    name: 'Saint Lucia',
    localName: 'Saint Lucia'
  },
  {
    iso2: 'MF',
    iso3: 'MAF',
    name: 'Saint Martin',
    localName: 'Saint-Martin'
  },
  {
    iso2: 'PM',
    iso3: 'SPM',
    name: 'Saint Pierre and Miquelon',
    localName: 'Saint-Pierre-et-Miquelon'
  },
  {
    iso2: 'VC',
    iso3: 'VCT',
    name: 'Saint Vincent and the Grenadines',
    localName: 'Saint Vincent and the Grenadines'
  },
  {
    iso2: 'WS',
    iso3: 'WSM',
    name: 'Samoa',
    localName: 'Samoa'
  },
  {
    iso2: 'SM',
    iso3: 'SMR',
    name: 'San Marino',
    localName: 'San Marino'
  },
  {
    iso2: 'ST',
    iso3: 'STP',
    name: 'Sao Tome and Principe',
    localName: 'São Tomé e Príncipe'
  },
  {
    iso2: 'SA',
    iso3: 'SAU',
    name: 'Saudi Arabia',
    localName: 'العربية السعودية'
  },
  {
    iso2: 'GB',
    iso3: 'SCT',
    name: 'Scotland',
    localName: 'Alba'
  },
  {
    iso2: 'SN',
    iso3: 'SEN',
    name: 'Senegal',
    localName: 'Sénégal'
  },
  {
    iso2: 'RS',
    iso3: 'SRB',
    name: 'Serbia',
    localName: 'Србија'
  },
  {
    iso2: 'SC',
    iso3: 'SYC',
    name: 'Seychelles',
    localName: 'Seychelles'
  },
  {
    iso2: 'SL',
    iso3: 'SLE',
    name: 'Sierra Leone',
    localName: 'Sierra Leone'
  },
  {
    iso2: 'SG',
    iso3: 'SGP',
    name: 'Singapore',
    localName: 'Singapore'
  },
  {
    iso2: 'SX',
    iso3: 'SXM',
    name: 'Sint Maarten',
    localName: 'Sint Maarten'
  },
  {
    iso2: 'SK',
    iso3: 'SVK',
    name: 'Slovakia',
    localName: 'Slovensko'
  },
  {
    iso2: 'SI',
    iso3: 'SVN',
    name: 'Slovenia',
    localName: 'Slovenija'
  },
  {
    iso2: 'SB',
    iso3: 'SLB',
    name: 'Solomon Islands',
    localName: 'Solomon Islands'
  },
  {
    iso2: 'SO',
    iso3: 'SOM',
    name: 'Somalia',
    localName: 'Soomaaliya'
  },
  {
    iso2: 'ZA',
    iso3: 'ZAF',
    name: 'South Africa',
    localName: 'South Africa'
  },
  {
    iso2: 'GS',
    iso3: 'SGS',
    name: 'South Georgia and the South Sandwich Islands',
    localName: 'South Georgia'
  },
  {
    iso2: 'KR',
    iso3: 'KOR',
    name: 'South Korea',
    localName: '대한민국'
  },
  {
    iso2: 'SS',
    iso3: 'SSD',
    name: 'South Sudan',
    localName: 'South Sudan'
  },
  {
    iso2: 'ES',
    iso3: 'ESP',
    name: 'Spain',
    localName: 'España'
  },
  {
    iso2: 'LK',
    iso3: 'LKA',
    name: 'Sri Lanka',
    localName: 'śrī laṃkāva'
  },
  {
    iso2: 'SD',
    iso3: 'SDN',
    name: 'Sudan',
    localName: 'السودان'
  },
  {
    iso2: 'SR',
    iso3: 'SUR',
    name: 'Suriname',
    localName: 'Suriname'
  },
  {
    iso2: 'SJ',
    iso3: 'SJM',
    name: 'Svalbard and Jan Mayen',
    localName: 'Svalbard og Jan Mayen'
  },
  {
    iso2: 'SZ',
    iso3: 'SWZ',
    name: 'Swaziland',
    localName: 'Swaziland'
  },
  {
    iso2: 'SE',
    iso3: 'SWE',
    name: 'Sweden',
    localName: 'Sverige'
  },
  {
    iso2: 'CH',
    iso3: 'CHE',
    name: 'Switzerland',
    localName: 'Schweiz'
  },
  {
    iso2: 'SY',
    iso3: 'SYR',
    name: 'Syria',
    localName: 'سوريا'
  },
  {
    iso2: 'TW',
    iso3: 'TWN',
    name: 'Taiwan',
    localName: '臺灣'
  },
  {
    iso2: 'TJ',
    iso3: 'TJK',
    name: 'Tajikistan',
    localName: 'Тоҷикистон'
  },
  {
    iso2: 'TZ',
    iso3: 'TZA',
    name: 'Tanzania',
    localName: 'Tanzania'
  },
  {
    iso2: 'TH',
    iso3: 'THA',
    name: 'Thailand',
    localName: 'ประเทศไทย'
  },
  {
    iso2: 'TL',
    iso3: 'TLS',
    name: 'Timor-Leste',
    localName: 'Timor-Leste'
  },
  {
    iso2: 'TG',
    iso3: 'TGO',
    name: 'Togo',
    localName: 'Togo'
  },
  {
    iso2: 'TK',
    iso3: 'TKL',
    name: 'Tokelau',
    localName: 'Tokelau'
  },
  {
    iso2: 'TO',
    iso3: 'TON',
    name: 'Tonga',
    localName: 'Tonga'
  },
  {
    iso2: 'TT',
    iso3: 'TTO',
    name: 'Trinidad and Tobago',
    localName: 'Trinidad and Tobago'
  },
  {
    iso2: 'TN',
    iso3: 'TUN',
    name: 'Tunisia',
    localName: 'تونس'
  },
  {
    iso2: 'TR',
    iso3: 'TUR',
    name: 'Turkey',
    localName: 'Türkiye'
  },
  {
    iso2: 'TM',
    iso3: 'TKM',
    name: 'Turkmenistan',
    localName: 'Türkmenistan'
  },
  {
    iso2: 'TC',
    iso3: 'TCA',
    name: 'Turks and Caicos Islands',
    localName: 'Turks and Caicos Islands'
  },
  {
    iso2: 'TV',
    iso3: 'TUV',
    name: 'Tuvalu',
    localName: 'Tuvalu'
  },
  {
    iso2: 'UG',
    iso3: 'UGA',
    name: 'Uganda',
    localName: 'Uganda'
  },
  {
    iso2: 'UA',
    iso3: 'UKR',
    name: 'Ukraine',
    localName: 'Україна'
  },
  {
    iso2: 'AE',
    iso3: 'ARE',
    name: 'United Arab Emirates',
    localName: 'دولة الإمارات العربية المتحدة'
  },
  {
    iso2: 'GB',
    iso3: 'GBR',
    name: 'United Kingdom',
    localName: 'United Kingdom'
  },
  {
    iso2: 'US',
    iso3: 'USA',
    name: 'United States',
    localName: 'United States'
  },
  {
    iso2: 'UY',
    iso3: 'URY',
    name: 'Uruguay',
    localName: 'Uruguay'
  },
  {
    iso2: 'UZ',
    iso3: 'UZB',
    name: 'Uzbekistan',
    localName: 'O‘zbekiston'
  },
  {
    iso2: 'VU',
    iso3: 'VUT',
    name: 'Vanuatu',
    localName: 'Vanuatu'
  },
  {
    iso2: 'VE',
    iso3: 'VEN',
    name: 'Venezuela',
    localName: 'Venezuela'
  },
  {
    iso2: 'VN',
    iso3: 'VNM',
    name: 'Vietnam',
    localName: 'Việt Nam'
  },
  {
    iso2: 'GB',
    iso3: 'WLS',
    name: 'Wales',
    localName: 'Cymru'
  },
  {
    iso2: 'WF',
    iso3: 'WLF',
    name: 'Wallis and Futuna',
    localName: 'Wallis et Futuna'
  },
  {
    iso2: 'EH',
    iso3: 'ESH',
    name: 'Western Sahara',
    localName: 'الصحراء الغربية'
  },
  {
    iso2: 'YE',
    iso3: 'YEM',
    name: 'Yemen',
    localName: 'اليَمَن'
  },
  {
    iso2: 'ZM',
    iso3: 'ZMB',
    name: 'Zambia',
    localName: 'Zambia'
  },
  {
    iso2: 'ZW',
    iso3: 'ZWE',
    name: 'Zimbabwe',
    localName: 'Zimbabwe'
  }
];

module.exports = countryList;
