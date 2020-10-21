import axios from 'axios';

import env from '../utils/enviroments.config';

export const client = axios.create({
  baseURL: env.REACT_OMDB_API
})
