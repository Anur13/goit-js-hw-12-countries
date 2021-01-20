import countryTemplate from "../templates/countryInfo.hbs"
import countriesTemplate from "../templates/countries-list.hbs"

export function makeCountryTemplate(countryArr) {
    const bodyRef = document.querySelector("body")

    const countryMarkup = countryTemplate(countryArr[0])
    bodyRef.insertAdjacentHTML("beforeend", countryMarkup)
}

export function makeCountriesTemplate(countriesArr) {
    const bodyRef = document.querySelector("body")

    const countryMarkup = countriesTemplate(countriesArr)
    bodyRef.insertAdjacentHTML("beforeend", countryMarkup)
}
