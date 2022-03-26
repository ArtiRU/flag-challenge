export const formatPopulation = (number) => number?.toLocaleString().replace(/\s/g, ',');

export const formatNumber = (number, index, size) => size - 1 === index ? number : number + ',';