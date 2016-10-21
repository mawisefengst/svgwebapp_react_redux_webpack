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
		case "FILTER_STATE":
			let stateData = action.state;
			let revisedStateByState = Object.assign({},state,{
				currentPatch : 0,
				detailViewId :0,
				showId:0,
				showLoadMore : "hidden",
				repeatedItem : APP_DATA.filter(style => {
					return style.state.toLowerCase() === stateData.toLowerCase();
				})
			});
			return revisedStateByState	
		case "FILTER_CATEGORY":
			let category = action.category;
			let revisedStateByCateogory = Object.assign({},state,{
				currentPatch : 0,
				detailViewId :0,
				showId:0,
				showLoadMore : "hidden",
				repeatedItem : APP_DATA.filter(style => {
					return style.look1_cat_name.toLowerCase() === category.toLowerCase() || 
					style.look2_cat_name.toLowerCase() === category.toLowerCase() || 
					style.look3_cat_name.toLowerCase() === category.toLowerCase() || 
					style.look4_cat_name.toLowerCase() === category.toLowerCase();
				})
			});
			return revisedStateByCateogory		
		case "SHOW_DETAIL":
			let detailViewId = (Math.floor(action.key /4) + 1) * 4 ;
			let showIndex = state.repeatedItem.indexOf(APP_DATA[action.id - 1]);
			let revisedState_st = Object.assign({},state,{
				detailViewId : detailViewId,
				showId: action.id,
				showIndex : showIndex
			});
			return revisedState_st
		case "SHOW_DETAIL_PREV":
			let showKey_PREV = action.key;
			let showId_PREV = state.repeatedItem[showKey_PREV - 1].influencer_id;
			let detailViewId_PREV = (Math.floor((showKey_PREV - 1) /4) + 1) * 4 ;
			let showIndex_PREV = state.repeatedItem.indexOf(APP_DATA[showId_PREV - 1]);
			let revisedState_st_prev = Object.assign({},state,{
				detailViewId : detailViewId_PREV,
				showId: showId_PREV,
				showIndex : showIndex_PREV
			});
			return revisedState_st_prev	
		case "SHOW_DETAIL_NEXT":
			let showKey_NEXT = action.key;
			let showId_NEXT = state.repeatedItem[showKey_NEXT + 1].influencer_id;
			let detailViewId_NEXT = (Math.floor((showKey_NEXT + 1) /4) + 1) * 4 ;
			let showIndex_NEXT = state.repeatedItem.indexOf(APP_DATA[showId_NEXT - 1]);
			let revisedState_st_next = Object.assign({},state,{
				detailViewId : detailViewId_NEXT,
				showId: showId_NEXT,
				showIndex : showIndex_NEXT
			});
			return revisedState_st_next		
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