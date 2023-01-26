import axios from "axios"

//Gets some example data from the contentful API
export function getHomeData() {

    return axios.get(`https://cdn.contentful.com/spaces/akqldxtg7ks6/entries?access_token=${process.env.REACT_APP_AUTH}`)
        .then(res => res.data.items.filter(arr => arr.sys.contentType.sys.id === "example")[0].fields)
}