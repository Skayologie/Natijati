
   var TheRandomOne = Math.floor(Math.random() * (100000000 - 0 + 1)) + 0 
   var i = 0 ;
   var order = 0 ;
   let lmo3amilat = []
   let no9at = []

// Now All Is GOOD

function forAnyClick() {

  TheRandomOne = Math.floor(Math.random() * (100000000 - 0 + 1)) + 0
  console.log(TheRandomOne)
}

onclick = function(){ forAnyClick()}
  // 

   function create(title,mo3amil,number) {
      lmo3amilat[i] = mo3amil
      console.log(no9at)
      console.log(lmo3amilat)
      console.log(order)
      if (number === "1") {
         order++;
         i++
         var b = i + TheRandomOne
           document.getElementById("sums").innerHTML += `
                                                         <!-- start `+title+` -->
                                                         <div class="TheTemplate TheTemplate2">
                                                                <h1>`+ title +`</h1>
                                                                <h3 class="">الفرض الاول</h3> 
                                                                <input id="test`+ b +`" type="text" value="" />
                                                                <input type="button" value="Calc" class="ForAnyCalc"  onclick="calc_1('`+ title +`',`+order+`,'test`+b+`',`+mo3amil+`)"/>
                                                                <p  class="theresult" id="`+title+`">0</p>
                                                         
                                                                </div>`
           
                            }
        else if(number === "2"){
         order++;
           i++
           var b = TheRandomOne
           var c = TheRandomOne + b
           document.getElementById("sums").innerHTML += `
                                                         <!-- start `+title+` -->
                                                         <div class="TheTemplate TheTemplate2">
                                                                <h1>`+ title +`</h1>
                                                                <h3 class="">الفرض الاول</h3> 
                                                                <input id="test`+ b +`" type="text" value="" />
                                                                <h3 class="">الفرض الثاني</h3> 
                                                                <input id="test`+ c +`" type="text" value="" />
                                                                <input type="button" value="Calc"  onclick="calc_2('`+ title +`',`+order+`,'test`+b+`','test`+c+`',`+mo3amil+`)"/>
                                                                <p  class="theresult" id="`+title+`">0</p>
                                                         
                                                                </div>`
                                                         
                                                         
                                                      
        }
        else if(number === "3"){
         order++;
           i++
           var b = TheRandomOne
           var c = TheRandomOne + b
           var d = TheRandomOne + c

           document.getElementById("sums").innerHTML += `
                                                         <!-- start `+title+` -->
                                                               <div class="TheTemplate TheTemplate2">
                                                                <h1>`+ title +`</h1>
                                                                <h3 class="">الفرض الاول</h3> 
                                                                <input id="test`+ b +`" type="text" value="" />
                                                                <h3 class="">الفرض الثاني</h3> 
                                                                <input id="test`+ c +`" type="text" value="" />
                                                                <h3 class="">الفرض الثالث</h3> 
                                                                <input id="test`+ d +`" type="text" value="" />
                                                                <input type="button" value="Calc"  onclick="calc_3('`+ title +`',`+order+`,'test`+b+`','test`+c+`','test`+d+`',`+mo3amil+`)"/>
                                                                <p  class="theresult" id="`+title+`">0</p>
                                                                </div>`
                                                         
                                                                
                                                         
                                                      
        }
        else if(number === "4"){
         order++;
           i++
        var b = i + TheRandomOne
           var c = b + TheRandomOne
           var d = c + TheRandomOne
           var e = d + TheRandomOne
           document.getElementById("sums").innerHTML += `
                                                         <!-- start `+title+` -->
                                                         <div class="TheTemplate TheTemplate2">
                                                                <h1>`+ title +`</h1>
                                                                <h3 class="">الفرض الاول</h3> 
                                                                <input id="test`+ b +`" type="text" value="" />
                                                                <h3 class="">الفرض الثاني</h3> 
                                                                <input id="test`+ c +`" type="text" value="" />
                                                                <h3 class="">الفرض الثالث</h3> 
                                                                <input id="test`+ d +`" type="text" value="" />
                                                                <h3 class="">الفرض الرابع</h3> 
                                                                <input id="test`+ e +`" type="text" value="" />
                                                                <input type="button" value="Calc"  onclick="calc_4('`+ title +`',`+order+`,'test`+b+`','test`+c+`','test`+d+`','test`+e+`',`+mo3amil+`)"/>
                                                                <p  class="theresult" id="`+title+`">0</p>
                                                                </div>`
                                                         
                                                         
                                                      
        }
        else if(number === "5"){
         order++;
           i++
          var b = i + TheRandomOne
           var c = b + TheRandomOne
           var d = c + TheRandomOne
           var e = d + TheRandomOne
           var f = e + TheRandomOne
           document.getElementById("sums").innerHTML += `
                                                         <!-- start `+title+` -->
                                                            <div class="TheTemplate TheTemplate2">
                                                                <h1>`+ title +`</h1>
                                                                <h3 class="">الفرض الاول</h3> 
                                                                <input id="test`+ b +`" type="text" value="" />
                                                                <h3 class="">الفرض الثاني</h3> 
                                                                <input id="test`+ c +`" type="text" value="" />
                                                                <h3 class="">الفرض الثالث</h3> 
                                                                <input id="test`+ d +`" type="text" value="" />
                                                                <h3 class="">الفرض الرابع</h3> 
                                                                <input id="test`+ e +`" type="text" value="" />
                                                                <h3 class="">الفرض الخامس</h3> 
                                                                <input id="test`+ f +`" type="text" value="" />
                                                                <input type="button" value="Calc"  onclick="calc_5('`+ title +`',`+order+`,'test`+b+`','test`+c+`','test`+d+`','test`+e+`','test`+f+`',`+mo3amil+`)"/>
                                                                <p class="theresult" id="`+title+`">0</p>
                                                            </div>`
                                                               
                                                         
                                                         
                                                      
        }
   }
