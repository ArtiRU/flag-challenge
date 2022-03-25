export const ALL_COUNTRY = '/all?fields=name,flag,capital,region,population';
export const SEARCH_BY_COUNTRY = (name) => 'name/' + name + '?fields=name,nativeName,capital,population,region,' +
    'flag,subregion,topLevelDomain,currencies,languages,borders';