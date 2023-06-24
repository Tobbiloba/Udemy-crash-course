import axios from 'axios'

const searchImages = async (term) => {
    console.log(term)
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID rjEN6OuwU081NsMvEl1yp3I0PQZNl0RxEllxR0B7YBM'
        },
        params: {
            query: term,
            per_page: 20
        }
    })
    // console.log(term)
    return response.data.results;
}
export default searchImages;


