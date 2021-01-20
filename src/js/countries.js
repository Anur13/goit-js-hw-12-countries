import fetchCountries from "../utils/country-utils"
import debounce from "lodash.debounce"
import notify from "./pnotify"
import { makeCountryTemplate, makeCountriesTemplate } from "./templating"

const bodyRef = document.querySelector("body")

const inputRef = document.querySelector("#county-input")

inputRef.addEventListener("input", debounce(render, 500))

function render(event) {
    const inputValue = event.target.value.trim()
    if (document.querySelector(".countries-section")) {
        document.querySelector(".countries-section").remove()
    }
    if (document.querySelector(".country-section")) {
        document.querySelector(".country-section").remove()
    }

    if (inputValue !== "") {
        fetchCountries(inputValue).then((countries) => {
            if (countries[0] === undefined) {
                notify("No matches found! Please try gain!")
            }
            if (countries.length >= 10) {
                notify("Too many matches found. Please enter more specific query!")
            }
            if (countries.length > 1 && countries.length < 10) {
                makeCountriesTemplate(countries)
            }
            if (countries.length === 1) {
                makeCountryTemplate(countries)
            }
            if (document.querySelector(".countries-list")) {
                const linksListRef = document.querySelector(".countries-list")
                linksListRef.addEventListener("click", changeCountry)
            }
        })
    }
}

function changeCountry(event) {
    event.preventDefault()
    fetchCountries(event.target.textContent).then((countries) => {
        if (document.querySelector(".countries-section")) {
            document.querySelector(".countries-section").remove()
        }
        if (document.querySelector(".country-section")) {
            document.querySelector(".country-section").remove()
        }
        makeCountryTemplate(countries)
    })
}
