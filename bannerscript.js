var i=1;
window.setInterval(showImage, 5000);
function showImage()
{
 var image=document.getElementById("img1");
 switch(i)
 {
  case 1:
   image.src="Chrysanthemum.jpg";
   i=2;
   break;
  case 2:
   image.src="Hydrangeas.jpg";
   i=3;
   break;
  case 3:
   image.src="Lighthouse.jpg";
   i=4;
   break;  
  case 4:
   image.src="Tulips.jpg";
   i=1;
   break;
  }
}