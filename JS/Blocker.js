
var lklam = ["hhh","zbi","trma","tbon","9hab","zb","l9lawi","9lwa","zbo","zaml","zwaml","tbabn","l9hab"]
var para = document.querySelector("p")
var button = document.querySelector("button")


function TheChoose(a) {
     var pc = document.getElementById('pc') ;
     var svt = document.getElementById('svt') ;
     var choosing = a ;
     if (choosing == "pc" || choosing == "PC"  ) {
        pc.style.display ="block";
        svt.style.display ="none";
     }else if (choosing == "svt" || choosing == "SVT" ){
        pc.style.display ="none";
        svt.style.display = "block";
     }
     else{
          var choosingNum = choosing.split("")
          if (choosing != "svt") {
               var theInput = document.getElementById("THEcHoose").value
               const theName = theInput.split(" ")
               for (let i = 0; i < theName.length; i++) {
                              for (let H = 0; H < lklam.length; H++) {
                                   if (theName[i] == lklam[H]) {
                                        alert("ta chhad niveaux ? kifach " + theName[i])
                                   }
                                   
                         
                              }
                              
                         }
          }else{
               alert("الى كنتي سيونص فيزيك كتب غي PC \n الى كنتي شعبة علوم الحياة و الارض كتب غير SVT")
          }
        
        
     }
     
     
  }
  
    
     
