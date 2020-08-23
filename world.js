console.log("Loading world")

start = "landingspot";

views = {
	landingspot: {
		image: 'landingspot.png',
		regions: [
			{x: 519, y: 426, w:63, h:149, cursor: "north", action: goto("Au-Bonheur")},
			{x: 397, y: 732, w:554, h:77, cursor: "south"},
			// {x: 355, y: 334, w:138, h:106, cursor: "eye", action: goto("painting")},
		]	
	},
	
	// painting: {
	// 	image: "http://archive.thedali.org/MWEBimages/Collection%20Images/OILS_images%20saved%20for%20Web/2000.5_Arch-Rem_web.jpg",
	// 	regions: [
	// 		{cursor: "south", action: goto("landingspot")}
	// 	]
	// },

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
			{x: 175, y: 897, w: 112, h: 723, cursor: 'west', action: text("It's locked")},
			{x: 844, y: 928, w: 98, h: 662, cursor: 'south', action: goto('La-Despedida')},
			{x: 468, y: 629, w: 224, h: 186, cursor: 'bubble', action: text("who are you?")},
		]
	},

	"Au-Bonheur": {
		image:'Cat.148-Au-Bonheur-des-Dames-1956-2.jpg',
		regions: [
			{x: 1239, y: 1304, w: 177, h: 938, cursor: 'bubble', action: text("in a rush")},
			{x: 823, y: 1904, w: 656, h: 192, cursor: 'south', action: goto('landingspot.png')},
			{x: 286, y: 1470, w: 170, h: 857, cursor: 'bubble', action: text("in a rush")},
			{x: 1012, y: 835, w: 93, h: 330, cursor: 'north', action: goto('La-Despedida')},
		]
	},

	"Tres-Destinos": {
		image:'Cat.146-Tres-Destinos-1956-1536x1290.jpg',
		regions: [
			{x: 586, y: 1236, w: 140, h: 107, cursor: 'south', action: goto('La-Despedida')},
			{x: 1072, y: 1236, w: 100, h: 107, cursor: 'south', action: goto('La-Despedida')},
			{x: 368, y: 829, w: 169, h: 310, cursor: 'bubble', action: text("they dont seem to hear you")},
			{x: 833, y: 574, w: 131, h: 299, cursor: 'bubble', action: text("they dont seem to hear you")},
			{x: 1292, y: 814, w: 143, h: 339, cursor: 'bubble', action: text("they dont seem to hear you")},
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
		image:'Cat.329-La-Llamada-1961-1.jpg',
		regions: [
			{x: 232, y: 1292, w: 465, h: 131, cursor: 'southwest', action: goto('La-Despedida')},
		]
	}
};
