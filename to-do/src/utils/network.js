import axios from 'axios';


axios.defaults.baseURL = 'http://localhost:1234/';
/*
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

*/

export function fetchData(options) {
  return axios({
      url: options.url,
      method: options.method || 'get', // default
      transformRequest: [(data, headers) => {
      //  transform the data
        return data;
      }],
      transformResponse: [(data) => {
      //  transform the data
        return data;
      }],
      // headers: {'X-Requested-With': 'XMLHttpRequest'},
      data: options.data || '',
      timeout: options.timeout || 3000,
      withCredentials: false, // default

      // options are 'arraybuffer', 'blob', 'document', 'json', 'text', 'stream'
      responseType: options.resposeType || 'json', // default

      onUploadProgress: (progressEvent) => {

      },

      onDownloadProgress: (progressEvent) => {
      },

      maxContentLength: options.maxContentLength || 4000,

  })

}
