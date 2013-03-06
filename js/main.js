require.config({
	baseUrl:'js',
	paths: {
		"ordnung": "ordnung",
		"knockout": "Libs/knockout-2.1.0"
	}
});

require(["ordnung/loader", "ordnung/koExtensions"], function(load){
	load();
});