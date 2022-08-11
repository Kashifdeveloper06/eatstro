import items from "./raw/items"

class DataProvider{
	getItems(){
		return items
	}
}

export const LocalData = new DataProvider()