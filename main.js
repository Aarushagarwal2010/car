canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

car1_width=120;
car1_height=70;
car1_image = "https://i.postimg.cc/9rqYz9HM/car1.png";
car1_x=10;
car1_y=10;

car2_width = 120;
car2_height = 70;
car2_image = "https://i.postimg.cc/tnnW1Kff/car2.png";
car2_x = 10;
car2_y = 100;

background_image = "https://i.postimg.cc/bv5d35nK/racing.jpg";

 function add(){
     background_imgtag = new Image();
     background_imgtag.onload=uploadBackground;
     background_imgtag.src= background_image; 

     car1_imgtag = new Image();
     car1_imgtag.onload=uploadcar1;
     car1_imgtag.src=car1_image;

     car2_imgTag = new Image(); 
	car2_imgTag.onload = uploadcar2; 
	car2_imgTag.src = car2_image;  
}
 function uploadBackground(){
     ctx.drawImage(background_imgtag,0,0,canvas.width,canvas,canvas_height);
 }
  function uploadcar1(){
      ctx.drawImage(car1_imgtag,car1_x,car1_y,car1_width,car1.height)
     }
     function uploadcar2() {
        ctx.drawImage(car2_imgTag, car2_x, car2_y, car2_width, car2_height);
    }
     window.addEventListener("keydown",my_keydown);

     function my_keydown(e)
     {
         keyPressed= e.keyCode;
         console.log(keyPressed);
         if(keyPressed =='38'){
             up();
             console.log("up")
         }
         if(keyPressed =='40'){
            down();
            console.log("down")
        }
        if(keyPressed =='37'){
            left();
            console.log("left")
        }
        if(keyPressed =='39'){
            right();
            console.log("right")
        }
     }

     if(car1_x > 700)
	{
		console.log("car1");
		document.getElementById('game_status').innerHTML = "Car 1 Won!!";
	}
	else if(car2_x > 700)
	{
		console.log("car2");
		document.getElementById('game_status').innerHTML = "Car 2 Won!!";
	}
     function up(){
        if(car1_y >=0){
            car1_y = car1_y - 10;
            console.log(car1_x,car1_y);
            uploadBackground();
            uploadcar1();
        }
    }
    function down(){
       if(car1_y <=500){
           car1_y = car1_y + 10;
           console.log(car1_x,car1_y);
           uploadBackground();
           uploadcar1();
       }
   }
   function left(){
       if(car1_x >=0){
           car1_x = car1_x - 10;
           console.log(car1_x,car1_y);
           uploadBackground();
           uploadcar1();
       }
   }
   function right(){
       if(car1_x <=700){
           car1_x = car1_x + 10;
           console.log(car1_x,car1_y);
           uploadBackground();
           uploadcar1();
       }
   }
   function car2_up()
{
	if(car2_y >=0)
	{
		car2_y = car2_y - 10;
		console.log("When up arrow is pressed,  x = " + car2_x + " | y = " +car2_y);
		 uploadBackground();
		 uploadcar1();
		 uploadcar2();
	}
}
function car2_down()
{
	if(car1_y <=500)
	{
		car2_y =car2_y+ 10;
		console.log("When down arrow is pressed,  x = " + car2_x + " | y = " +car2_y);
		uploadBackground();
		 uploadcar1();
		 uploadcar2();
	}
}
function car2_left()
{
	if(car2_x >= 0)
	{
		car2_x =car2_x - 10;
		console.log("When left arrow is pressed,  x = " + car2_x + " | y = " +car2_y);
		uploadBackground();
		 uploadcar1();
		 uploadcar2();
	}
}
function car2_right()
{
	if(car2_x <= 700)
	{
		car2_x =car2_x + 10;
		console.log("When right arrow is pressed,  x = " + car2_x + " | y = " +car2_y);
		uploadBackground();
		uploadcar1();
		 uploadcar2();
   }
}
