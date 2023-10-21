
window.onbeforeunload = () =>{
      return console.log("Dude, are you sure you want to leave? Think of the kittens!");
     
}

function theMark(NoteOfThis,theSubject) {
      if (NoteOfThis < "10") {
            document.getElementById(theSubject).style.backgroundColor = "#e70000";
      }
      else if(NoteOfThis > "20"){
            alert("rak kateb chi haja ghalat assat")
            document.getElementById(theSubject).style.backgroundColor = "#38488a";
            document.getElementById(theSubject).innerText ="0"
      }
      else{
            document.getElementById(theSubject).style.backgroundColor = "#32a562";

      }
}

// for one exam
function calc_1(Lmadda,tartib,input1,mo3amil){

      let a = eval(document.getElementById(input1).value);

      sumAll = (a)
      NoteOfThis = sumAll / 1
      resu = NoteOfThis * mo3amil
      no9at[tartib] = resu
      if (a > 20) {
            alert (theMEssage)
            document.getElementById(Lmadda).style.backgroundColor = "#38488a";
            document.getElementById(Lmadda).innerText = "0"
      }else{
            document.getElementById(Lmadda).innerText = NoteOfThis
            theMark(NoteOfThis,Lmadda)
      }

      }

// for two exams
function calc_2(Lmadda,tartib,input1,input2,mo3amil){

      let a = eval(document.getElementById(input1).value);
      let b = eval(document.getElementById(input2).value);

      sumAll = (a+b)
      NoteOfThis = sumAll / 2
      resu = NoteOfThis * mo3amil
      no9at[tartib] = resu
      if (a > 20 || b > 20) {
            alert (theMEssage)
            document.getElementById(Lmadda).style.backgroundColor = "#38488a";
            document.getElementById(Lmadda).innerText = "0"
      }else{
            document.getElementById(Lmadda).innerText = NoteOfThis
            theMark(NoteOfThis,Lmadda)
      }
      }      
// for three exams
function calc_3(Lmadda,tartib,input1,input2,input3,mo3amil){

      let a = eval(document.getElementById(input1).value);
      let b = eval(document.getElementById(input2).value);
      let c = eval(document.getElementById(input3).value);

      sumAll = (a+b+c)
      NoteOfThis = sumAll / 3
      resu = NoteOfThis * mo3amil
      no9at[tartib] = resu
      if (a > 20 || b > 20 || c > 20) {
            alert (theMEssage)
            document.getElementById(Lmadda).style.backgroundColor = "#38488a";
            document.getElementById(Lmadda).innerText = "0"
      }else{
            document.getElementById(Lmadda).innerText = NoteOfThis
            theMark(NoteOfThis,Lmadda)
      }
      }
// for four exams
function calc_4(Lmadda,tartib,input1,input2,input3,input4,mo3amil){

      let a = eval(document.getElementById(input1).value);
      let b = eval(document.getElementById(input2).value);
      let c = eval(document.getElementById(input3).value);
      let d = eval(document.getElementById(input4).value);

      sumAll = (a+b+c+d)
      NoteOfThis = sumAll / 4
      resu = NoteOfThis * mo3amil
      no9at[tartib] = resu
      if (a > 20 || b > 20 || c > 20 || d > 20) {
            alert (theMEssage)
            document.getElementById(Lmadda).style.backgroundColor = "#38488a";
            document.getElementById(Lmadda).innerText = "0"
      }else{
            document.getElementById(Lmadda).innerText = NoteOfThis
            theMark(NoteOfThis,Lmadda)
      }
      }

// for five exams
function calc_5(Lmadda,tartib,input1,input2,input3,input4,input5,mo3amil){

      let a = eval(document.getElementById(input1).value);
      let b = eval(document.getElementById(input2).value);
      let c = eval(document.getElementById(input3).value);
      let d = eval(document.getElementById(input4).value);
      let e = eval(document.getElementById(input5).value);

      sumAll = (a+b+c+d+e)
      NoteOfThis = sumAll / 5
      resu = NoteOfThis * mo3amil
      no9at[tartib] = resu
      if (a > 20 || b > 20 || c > 20 || d > 20 || e > 20) {
            alert (theMEssage)
            document.getElementById(Lmadda).style.backgroundColor = "#38488a";
            document.getElementById(Lmadda).innerText = "0"
      }else{
            document.getElementById(Lmadda).innerText = NoteOfThis
            theMark(NoteOfThis,Lmadda)
      }
      }

function calcAllThis() {


      document.getElementById("finaliti").style.display = "inline";
      

      let mo3amilat = lmo3amilat.reduce((memory,value)=>{
          return memory + value
       }) 

       console.log("hado mjmo3 dlmo3amilat : "+mo3amilat)


      let allNoteFLMo3amil22 = no9at.reduce((memory,value)=>{
           return memory + value
      },0)      

      console.log("this is no9at fl mo3amil : "+allNoteFLMo3amil22)

      

      //  function reduseSomeNumbers(Arr) {
      //       let resolta = Arr.reduce((memory,value)=>{
      //             return memory + value
      //        },0) 
      //        console.log(resolta)
      //  }
      //  reduseSomeNumbers(lmo3amilat)  
       


      finallResult = allNoteFLMo3amil22 / mo3amilat
      document.getElementById("dawra").innerText = finallResult
    
}
