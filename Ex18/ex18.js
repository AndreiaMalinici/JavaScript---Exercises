var Image = new Array("./images/image1.jpg", "./images/image2.jpg", "./images/image3.jpg", "./images/image4.jpg", "./images/image5.jpg", "./images/image6.jpg");

		var Image_Number = 0;
		var Image_Length = Image.length - 1;


		function change_image(num){
			Image_Number = Image_Number + num;

			if(Image_Number>Image_Length-1){

				Image_Number = Image_Length;
				document.getElementById('Next').style.visibility="hidden";}
				else{
					document.getElementById('Next').style.visibility="visible";
				}
			if(Image_Number<= 0){

				Image_Number = 0;
				document.getElementById('Previous').style.visibility="hidden";}
				else{
					document.getElementById('Previous').style.visibility="visible";
				}

			document.slideshow.src = Image[Image_Number];
			return false;
		}
