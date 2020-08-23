start = "landingspot";
views = {
	landingspot:{
		image: 'landingspot.png',
		regions: [
			{left: 300, top: 300, width:100, height:100, cursor: "eye", action: goto("painting")}
		]	
	},
	painting: {
		image: "http://archive.thedali.org/MWEBimages/Collection%20Images/OILS_images%20saved%20for%20Web/2000.5_Arch-Rem_web.jpg",
		regions: [
			{cursor: "south", action: goto("landingspot")}
		]
	}
};