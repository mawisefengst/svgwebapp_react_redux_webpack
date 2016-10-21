let actions  = {
	filterReligion: function(region){
		return {
			type: "FILTER_RELIGION",
			region: region
		}
	},
	showDetail : function(id){
		return {
			type: "SHOW_DETAIL",
			id: id
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