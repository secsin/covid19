import { defineStore } from 'pinia'
import { getApiList } from '../server'
import type { RootObject, Children, ChinaTotal, ChinaAdd, LocalCityNCOVDataList } from './type'

export const useStore = defineStore({
  id: 'counter',
  state: () => ({
    list: <RootObject>{},
    item: <Children[]>[],
    chinaAdd: <ChinaAdd>{},
    chinaTotal: <ChinaTotal>{},
    cityDetail: <LocalCityNCOVDataList[]>[],
  }),
  actions: {
    async getList() {
      const result = await getApiList()
      // console.log(result)
      this.list = result;
      this.chinaAdd = result.data.diseaseh5Shelf.chinaAdd
      this.chinaTotal = result.data.diseaseh5Shelf.chinaTotal
      // console.log(result.data.localCityNCOVDataList);
      this.cityDetail = result.data.localCityNCOVDataList.slice(0, 10)
    }
  }
})
