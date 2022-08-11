import create from 'zustand';
import {LocalData} from '../../data'

const useStore = create((set,get) => ({
  localItems: LocalData.getItems(),
  updateItem: (item,index) => {
  	set(state => ({
  		localItems:item
  	}))
  }
}));

export default useStore