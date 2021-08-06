import axios from 'axios';
import url from '../config/url';

export default axios.create({
  baseURL: `${url}/messages`,
});
