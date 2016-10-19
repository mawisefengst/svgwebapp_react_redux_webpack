let actions  = {
	filterReligion: function(religion){
		return {
			type: "FILTER_RELIGION",
			religion: religion
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
}

export default actions