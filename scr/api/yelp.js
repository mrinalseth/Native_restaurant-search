import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer yUFgrfMqnJusKppLHjOUe9Yg108WDlEtuCJWsQ5TJ3UkVmUJJADMeHlLkDb0KGepvg-DDIHnNr9HU7JlNbe01kIc6WKdRGutfKRE99FHYe4N8IUQfZ_omlnk7kiMYHYx'
    }
});

