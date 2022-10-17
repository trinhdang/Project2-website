//Javascript array: to store a collection of images
let images = ["Images/slideshow/image01.jpg", 
			  "Images/slideshow/image02.jpg", 
			  "Images/slideshow/image03.jpg", 
			  "Images/slideshow/image04.jpg", 
			  "Images/slideshow/image05.jpg", 
			  "Images/slideshow/image06.jpg", 
			  "Images/slideshow/image07.jpg", 
			  "Images/slideshow/image08.jpg", 
			  "Images/slideshow/image09.jpg", 
			  "Images/slideshow/image10.jpg", 
			  "Images/slideshow/image11.jpg", 
			  "Images/slideshow/image12.jpg"			  
			 ];

//Declare a variable to store index
let index = 0;

//Write the code to create automatic slideshow
function autoSlideShow() {
	//Increase the index by 1 only if it's not reaching the last image
	if (index == images.length - 1 ) {
		index = 0;//Move to the first image
	} else {
		index = index + 1;//Increase the index by 1
	}
	
	//Display the current image based on its index to html
	//Change the source of img element on HTML fileCreatedDate
	//Find the image with id="slideShowImage" and change its source
	document.getElementById("slideShowImage").src = images[index];
	
	
	//Wait 1.5second and then call the function to display next image
	setTimeout(autoSlideShow, 1500);//wait 1500ms = 1.5 second
}

//Call to Execute this autoSlideShow() function
autoSlideShow();







