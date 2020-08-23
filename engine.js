console.log("Loading engine")

foo = function() {
	$(".text").html("Foxes are small to medium-sized, omnivorous mammals belonging to several genera of the family Canidae. Foxes have a flattened skull, upright triangular ears, a pointed, slightly upturned snout, and a long bushy tail (or brush).")
}

text = function(value) { return function() {
    $(".text").text("")
    function typeName(iteration) {
        if (iteration != value.length) 
	        setTimeout(function() {
	            $('.text').text( $('.text').text() + value[iteration] );
	            typeName(iteration+1);
	        }, 35);
    }
    
    typeName(0);

	// $(".text").html(value)
}}

goto = function(key) { return function() {
	view = views[key]

	
	$("<img/>").attr("src", (view['image'].startsWith("http://") ? "" : "img/places/") + view['image']).attr("class", "image")
    .on('load', function() {
        var w = this.width; var h = this.height;

        $(".inner").empty()
        $(".inner").append(this)
        $(".text").empty()
        if('text' in view) {
        	$(".text").text(view['text'])
        }
        

        view['regions'].forEach(function(region) {
			a = $("<a></a>")
			if('cursor' in region){
				a.attr("class", region['cursor']);
			}
			if('x' in region) {
				a.css("left", (region['x']-region['w']/2)/w*100 + "%");
				a.css("top", (region['y']-region['h']/2)/h*100 + "%");
				a.css("width", (region['w']/w)*100 + "%");
				a.css("height", (region['h']/h)*100 + "%");	
			} else {
				a.css("left", 0);
				a.css("top", 0);
				a.css("width", "100%");
				a.css("height", "100%");
			}
			if('action' in region) {
				a.click(region['action']);
			}
			console.log(a)
			
			$(".inner").append(a);
		})
	});
	
}}

$(document).ready(function() {
	console.log("document ready")
	goto(start)()
})