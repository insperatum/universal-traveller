start = "closedeyes";
// start = "landingspot";
// start = "inventory"

views = {
	inventory: {
		image: 'https://selency.imgix.net/4756d09b-4f0a-4b2d-b903-33971be605d6/large-distressed-turkish-rug-285x200-cm-tribal-wool-vintage-pink-red-beige_original.png?bg=0FFF&fit=fill&auto=format%2Ccompress&w=600&h=600&meta_format=product_og',
		regions: []
	},

	closedeyes: {
		image: 'closedeyes.png',
		regions: [
			{x:790, y:306, w:58, h:28, cursor:"bubble", actions: [set("eye", "brown"), goto("landingspot")]},
			{x:790, y:380, w:57, h:26, cursor:"bubble", actions: [set("eye", "hazel"), goto("landingspot")]},
			{x:790, y:451, w:58, h:26, cursor:"bubble", actions: [set("eye", "green"), goto("landingspot")]},
			{x:790, y:526, w:57, h:28, cursor:"bubble", actions: [set("eye", "grey"), goto("landingspot")]}
		]
	},

	earthhome: {
		image: 'earthhome.png', 
		regions: [
			{x:86, y:420, w:137, h:117, cursor:"eye", action: text("How did this tree get so tiny?")},
			{x:72, y:737, w:149, h:122, cursor:"eye", action: text("Ouch!           Oops...")},
			{x:99, y:579, w:112, h:167, cursor:"eye", action: text("Mmmmmmmm...        it smells so sweet.")},
			{x:456, y:562, w:222, h:250, cursor:"eye", action: text("Please... ... take a reminder of home.")},
			{x:771, y:335, w:255, h:363, cursor:"north", action: goto("closedeyes")},
			{x:271, y:735, w:500, h:163, cursor:"south", action: goto("landingspot")},
			{
				x: 671, y: 635, w: 100, h: 100, item: "frog",
				image: "https://i1.wp.com/www.markscherz.com/wp-content/uploads/Boophis-nauticus_Mayotte_DSC1724_FGZC4968maybe.png?w=587&h=375",
				action: text("A frog!")

			}
		]
	},


	landingspot: {
		image: 'landingspot.png',
		regions: [
			{x: 519, y: 426, w:63, h:149, cursor: "north", action: goto("Au-Bonheur")},
			//{x: 397, y: 732, w:554, h:77, cursor: "south", action: goto('earthhome')},
			{x: 355, y: 334, w:138, h:106, cursor: "eye", action: goto("painting")},
		]	
	},
	
	painting: {
		image: "http://archive.thedali.org/MWEBimages/Collection%20Images/OILS_images%20saved%20for%20Web/2000.5_Arch-Rem_web.jpg",
		regions: [
			{cursor: "south", action: goto("landingspot")}
		]
	},

	"La-Despedida": {
		image:'Cat.211-La-Despedida-1958-1.png',
		regions: [
			{x: 363, y: 713, w: 54, h: 705, cursor: 'north', action: goto('Tres-Destinos')},
			{x: 601, y: 570, w: 73, h: 644, cursor: 'south', action: goto('Planta-Insumisa')},
			{x: 791, y: 535, w: 41, h: 405, cursor: 'east', action: goto('La-Llamada')},
			{x: 148, y: 599, w: 41, h: 476, cursor: 'north', action: text("The pathway is too narrow to move past")},
			{x: 90, y: 587, w: 34, h: 482, cursor: 'west', action: goto('Mujer-Saliendo')},
			{x: 155, y: 1237, w: 310, h: 142, cursor: 'southwest', action: goto('Au-Bonheur')},
			{x: 596, y: 954, w: 62, h: 88, cursor: 'bubble', action: text("you look like you're from far away")},
			{x: 700, y: 440, w: 106, h: 158, cursor: 'eye', action: text('Jo')},
			{x: 700, y: 553, w: 106, h: 79, cursor: 'eye', action: text('Burning')},
		]
	},

	"Mujer-Saliendo": {
		image:'Cat.292-Mujer-Saliendo-Del-Psicoanalista-1960-1.jpg',
		regions: [
			{x: 175, y: 897, w: 112, h: 723, cursor: 'west', action: goto("Ingravidez")},
			{x: 844, y: 928, w: 98, h: 662, cursor: 'south', action: goto('La-Despedida')},
			{x: 468, y: 629, w: 224, h: 186, cursor: 'bubble', action: text("who are you?")},
		]
	},

	"Au-Bonheur": {
		image:'Cat.148-Au-Bonheur-des-Dames-1956-2.jpg',
		regions: [
			{x: 1239, y: 1304, w: 177, h: 938, cursor: 'bubble', action: text("she looks like she's in a rush")},
			{x: 823, y: 1904, w: 656, h: 192, cursor: 'south', action: goto('landingspot')},
			{x: 286, y: 1470, w: 170, h: 857, cursor: 'bubble', action: text("she's going somewhere fast!")},
			{x: 1012, y: 835, w: 93, h: 330, cursor: 'north', action: goto('La-Despedida')},
		]
	},

	"Tres-Destinos": {
		image:'Cat.146-Tres-Destinos-1956-1536x1290.jpg',
		regions: [
			{x: 586, y: 1236, w: 140, h: 107, cursor: 'south', action: goto('La-Despedida')},
			{x: 1072, y: 1236, w: 100, h: 107, cursor: 'south', action: goto('La-Despedida')},
			{x: 368, y: 829, w: 169, h: 310, cursor: 'bubble', action: text("they dont seem to hear you")},
			{x: 833, y: 574, w: 131, h: 299, cursor: 'bubble', action: text("he is singing")},
			{x: 1292, y: 814, w: 143, h: 339, cursor: 'bubble', action: text("a bit far away to hear")},
			{x: 1047, y: 831, w: 50, h: 235, cursor: 'north', action:goto("Tower-Release")},
			{x: 526, y: 713, w: 79, h: 277, cursor: 'north', action:goto("Bordando")}
		]
	},

	"Planta-Insumisa": {
		image:'Cat.311-Planta-Insumisa-1961-1-square.png',
		regions: [
			{x: 578, y: 420, w: 227, h: 203, cursor: 'bubble', action: text("ah, i seldom have visitors. let alone one from another planet. tell me about the plant life there. ours have almost entirely left us.")},
			{x: 828, y: 1094, w: 203, h: 194, cursor: 'northeast', action: goto('La-Despedida')},
		]
	},

	"La-Llamada": {
		image:'Cat.329-La-Llamada-1961-1.png',
		regions: [
			{x: 232, y: 1292, w: 465, h: 131, cursor: 'southwest', action: goto('La-Despedida')},
			{x: 853, y: 815, w: 105, h: 674, cursor: 'east', action: goto('Ruptura')},
			{x: 854, y: 756, w: 66, h: 557, cursor: 'bubble', action: text('You may want to find a companion before passing through...')},
			{x: 232, y: 1292, w: 465, h: 131, cursor: 'southwest', action: goto('La-Despedida')},
			{x: 325, y:990, w:185, h:207, cursor: 'bubble', action: text("He doesn't seem to talk much")},
			{x: 721, y:1193, w:378, h:262, cursor: 'bubble', action: text('Excuse me')},
			{x: 475, y:443, w:114, h:153, cursor: 'bubble', action: text("The corridor of the sleeping sentinels... you've never seen such a thing on your planet?")},
			{x: 852, y:77, w:57, h:202, cursor: 'eye', action: text('Jugglers')},
		]
	},

	"Ingravidez": {
		image:'Cat.359-Fenomeno-De-Ingravidez-1963-1.jpg',
		regions:[
			{x: 876, y: 702, w: 108, h: 1235, cursor: 'east', action: goto("Mujer-Saliendo")},
			{x: 341, y: 527, w: 155, h: 155, cursor:'bubble', action: text("Shhh... I'm concentrating!")}
		]
	},

	"Tower-Release": {
		image:'TowerRelease-Varo.jpg',
		regions:[
			{x: 753, y: 816, w: 45, h: 358, cursor: 'south', action: goto("Tres-Destinos")},
			{x: 796, y: 707, w: 41, h: 141, cursor:'south', action: goto("Tres-Destinos")},
		]
	},

	"Bordando": {
		image:'Cat.304-Bordando-El-manto-1960-1.jpg',
		regions:[
			{x: 545, y: 579, w: 161, h: 68, cursor: 'south', action: goto("Tres-Destinos")},
		]
	},

	"Ruptura": {
		image:"Ruptura.jpg",
		regions:[
			{x: 465, y: 791, w: 135, h: 263, cursor: 'north', action: goto("BlueRoom")},
			{x: 352, y: 1079, w: 131, h: 504, cursor: 'bubble', action: text("This is the house of the six keepers of spirit: vision, discernment, gratitude, celebration, tenderness, and birth. We used to be seven but we've forgotten my name.")},
			{x: 465, y: 1451, w: 930, h: 99, cursor: 'south', action: goto("La-Llamada")}
		]
	},

	"BlueRoom": {
		image:"BlueRoomVaro.jpeg",
		regions:[
			{x: 666, y: 301, w: 90, h: 366, cursor: 'east', action: goto("Ruptura")},
			{x: 542, y: 605, w: 515, h: 71, cursor: 'south', action: goto("CatPins")},
			{x: 38, y: 387, w: 76, h: 460, cursor: 'west', action: goto("GrandfatherClocks")},
			{x: 342, y: 322, w: 62, h: 130, cursor: 'bubble', action: text("Humming softly...")},
		]
	},

	"CatPins": {
		image:"CatPinsVaro.jpg",
		regions:[
			{x: 171, y: 389, w: 147, h: 390, cursor: 'northwest', action: goto("BlueRoom")},
		]
	},

	"GrandfatherClocks": {
		image:"GrandfatherClocksVaro.jpg",
		regions:[
			{x: 502, y: 832, w: 683, h: 73, cursor: 'south', action: goto("BlueRoom")},
		]
	}

};
