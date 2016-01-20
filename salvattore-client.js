salvattore.initialized=false;
salvattore.addItem=function(data,template) {
	if (!salvattore.initialized) {salvattore.init();salvattore.initialized=true};
	var grid = document.querySelector('#columns');
	var item = document.createElement('div');
	salvattore['append_elements'](grid, [item])
	// item.outerHTML=Blaze.toHTML(Blaze.With(data, function() { return Template[template]; }));
	
	item.outerHTML=Blaze.toHTMLWithData(Template[template],data)
}

