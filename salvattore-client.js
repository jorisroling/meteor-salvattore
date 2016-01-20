// salvattore.initialized=false;
salvattore.addItem=function(data,template) {
	// if (!salvattore.initialized) {salvattore.init();salvattore.initialized=true};
	var grid = document.querySelector('#columns');
	var item = document.createElement('div');
	salvattore.appendElements(grid, [item])
	item.outerHTML=Blaze.toHTMLWithData(Template[template],data)
}

Meteor.startup(function () {
	Template.salvattore.onRendered(function() {
		salvattore.initialize();
	})
});
