import { defaults } from "@pnotify/core"

export default function getData(target) {
    const baseUrl = "https://restcountries.eu/rest/v2/name/"
    return fetch(`${baseUrl}${target}`).then((response) => response.json())
}
