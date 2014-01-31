var draw = function (path, attr, paper) {
	var pathArray = [], originalLine, line, animate, progress = 0, drawnPath = '';
	// build array from path string
	
	pathArray = path.match(/[A-Za-z| ]+[-0-9.]+[,| ][-0-9.]+/g);
	
	line = paper.path(pathArray[0]).attr(attr);
	//originalLine = paper.path(path).attr({stroke: "ccc", opacity : 0.5});
	
	animate = function () {
		drawnPath += pathArray[progress];
		line.animate({path:drawnPath}, 1, function () { 
			progress = progress + 1;
			if (pathArray[progress]) {
				 setTimeout(animate, 1);
			}
		});		
		
	};
	if (pathArray.length) {
		animate();
	}
};