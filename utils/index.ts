
export async function fetchCountries() {
    const res = await fetch("https://restcountries.com/v3.1/all");
    const data = await res.json();

    return data;
}

export interface Country {
    id: number;
    name: string;
    flag: string;
    nativeName: string;
    population: string;
    region: string;
    subRegion: string;
    capital: string;
    tld: string[];
    currencies: string[];
    languages: string[];
    borderCountires: string[];
}

function numberComma(num: string) {
    return num.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function getCountryFullName(countries: any[], countryCode: string) {
    const country = countries.find(c => c.fifa === countryCode);

    return country ? country.name : "";
}

export function normalizeCountriesData(data: any[]): Country[] {
    const newData = data.map((item, index) => {
        const id = index + 1;
        const name = item.name?.common ?? "";
        const flag = item.flags?.svg || item.flags?.png || "";
        const nativeNameObj = item.name?.nativeName ?? "";
        const nativeName = nativeNameObj?.[Object.keys(nativeNameObj)[0]]?.common ?? "";
        const population = numberComma(item.population.toString());
        const region = item.region ?? "";
        const subRegion = item.subregion ?? "";
        const capital = item.capital?.join(", ") || "";
        // const capital = [1, 2].join(", ");
        const tld = item.tld || [''];
        const currencies = item.currencies ? Object.keys(item.currencies) : [''];
        const languages = item.languages ? 
            Object.keys(item.languages).map(key => item.languages[key]) : [''];
        const borderCountires = item.borders?.map((code: { toString: () => any; }) => getCountryFullName(data, code.toString())) || [''];

        return {
            id: id as number,
            name: name as string,
            flag: flag as string,
            nativeName: nativeName as string,
            population,
            region: region as string,
            subRegion: subRegion as string,
            capital: capital as string,
            tld: tld as string[],
            currencies,
            languages: languages as string[],
            borderCountires: borderCountires as string[]
        };
    });

    return newData;
}

export function searchCountrires(query: string, countries: Country[]) {
    const filteredCountries = countries.filter(
        country => 
            country.name.toLowerCase().includes(query) ||
            country.nativeName.toLowerCase().includes(query) ||
            country.capital.toLowerCase().includes(query) ||
            country.region.toLowerCase().includes(query)
    );

    return filteredCountries;
}

export function findCountryById(id: number, countries: Country[]) {
    const country = 
        countries[+id - 1] || 
        countries.find(country => country.id === +id);

    return country;
}
