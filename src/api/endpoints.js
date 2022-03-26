export const allCountry = '/all?fields=name,flag,capital,region,population';
export const searchByCountry = (name) => 'name/' + name + '?fields=name,nativeName,capital,population,region,' +
    'flag,subregion,topLevelDomain,currencies,languages,borders';
export const listOfCodes = (codes) => 'alpha?codes=' + codes.join(',');