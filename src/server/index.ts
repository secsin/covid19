import axios from 'axios'

const server = axios.create({
  baseURL: "https://api.inews.qq.com"
})

export const getApiList = () => server.get('/newsqa/v1/query/inner/publish/modules/list?modules=localCityNCOVDataList,diseaseh5Shelf').then(res => res.data)