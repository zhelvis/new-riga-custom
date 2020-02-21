import axios from 'axios'
import config from '../../config'

export default function getCMSdata() {
  return axios
    .get(config.api)
    .then(response => response.data)
    .catch(error => error)
}
