// this file contains the data we need for the gallery
// The main object, "gallery" contains an array of album
// each album contains an array of photos 
// (plus a name and a thumbnail image)
// The photos contain an image src and some metadata

var gallery = {
	albums : [
		{
			name : "Nature", 
			thumbnail : "images/img_1.jpg",
			photos : [
			
				{	
					src : "images/img_2.jpg",
					title : "playground", 
					
				}, 
	
				{	
					src : "images/img_4.jpg",
					title : "trees", 
					
				}, 
			
				{	
					src : "images/img_7.jpg",
					title : "city Mostar", 
					
				} 
			]
		},
		{
			name : "Various things", 
			thumbnail : "images/img_8.jpg",
			photos : [
			
				{	
					src : "images/img_9.jpg",
					title : "book2", 
					
				},  
				{	
					src : "images/img_11.jpg",
					title : "books", 
					
				}, 
				{	
					src : "images/img_12.jpg",
					title : "fruits", 
					
				},
				{	
					src : "images/img_14.jpg",
					title : "bootcmap goodies", 
					
				} 
				

			]
		},
		{
			name : "David drawings", 
			thumbnail : "images/img_15.jpg",
			photos : [
				{	
					src : "images/img_16.jpg",
					
					description : "corto 1"
				}, 
				{	
					src : "images/img_17.jpg",
					
					description : "corto 2"
				}, 
				{	
					src : "images/img_18.jpg",
					
					description : "corto 3"
				} 
			]
		}

	]
};