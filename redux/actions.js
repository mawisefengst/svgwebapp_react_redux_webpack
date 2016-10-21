let actions  = {
	filter: function(value){
		return {
			type: "FILTER_RELIGION",
			region: value
		}
	},
	filterState: function(state){
		return {
			type: "FILTER_STATE",
			state: state
		}
	},
	filterCategory: function(category){
		return {
			type: "FILTER_CATEGORY",
			category: category
		}
	},
	showDetail : function(id,key){
		return {
			type: "SHOW_DETAIL",
			id: id,
			key:key
		}
	},
	showDetailPrev : function(key){
		return {
			type: "SHOW_DETAIL_PREV",
			key:key
		}
	},
	showDetailNext : function(key){
		return {
			type: "SHOW_DETAIL_NEXT",
			key:key
		}
	},
	loadMore : function(){
		return {
			type: "LOAD_MORE"
		}
	}
	//filter by state
}

export default actions