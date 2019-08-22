import axios from 'axios'


export default axios.create({
    baseUrl:'https://opentdb.com/api.php?amount=10&category=19&type=multiple'
})