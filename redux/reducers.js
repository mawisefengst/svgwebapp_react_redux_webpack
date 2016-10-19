import APP_DATA from "../components/DATA"

let reducers = function(state, action){
	switch(action.type){
		case "FILTER_RELIGION":
			return state
		case "SHOW_DETAIL":
			return state
		case "LOAD_MORE":
			let currentPatch = state.currentPatch + 1;
			let showLoadMore = "";
			if((currentPatch + 1) * state.patchAmount > APP_DATA.length)  showLoadMore = "hidden"
			let newState = Object.assign({},state, {
				currentPatch : currentPatch,
				repeatedItem : APP_DATA.slice(0,(currentPatch + 1) * state.patchAmount),
				showLoadMore : showLoadMore
			});
			return newState
		default: 
			return state	
	}
}

export default reducers