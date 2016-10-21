import APP_DATA from "../components/DATA"

let reducers = function(state, action){
	switch(action.type){
		case "FILTER_RELIGION":
			let region = action.region;
			let revisedState = Object.assign({},state,{
				currentPatch : 0,
				detailViewId :0,
				showId:0,
				showLoadMore : "hidden",
				repeatedItem : APP_DATA.filter(style => {
					return style.region.toLowerCase() === region.toLowerCase();
				})
			});
			return revisedState
		case "SHOW_DETAIL":
			let showIndex = action.id - 1;
			let detailViewId = (Math.floor(showIndex /4) + 1) * 4 ;
			let revisedState_st = Object.assign({},state,{
				detailViewId : detailViewId,
				showId: action.id
			});
			return revisedState_st
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