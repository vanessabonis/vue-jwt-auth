import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:8000/api';

axios.defaults.headers.common['Authorization'] = 'Bears ' + localStorage.getItem('token');