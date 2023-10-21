notes = [0,0,0,0,0,0,0,0,0,0,0,0];

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
      notes[tartib] = resu
      document.getElementById(Lmadda).innerText = NoteOfThis
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
      notes[tartib] = resu
      document.getElementById(Lmadda).innerText = NoteOfThis
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
      notes[tartib] = resu
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
      notes[tartib] = resu
      document.getElementById(Lmadda).innerText = NoteOfThis
      if (a > 20 || b > 20 || c > 20 || d > 20 ) {
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
      notes[tartib] = resu
      document.getElementById(Lmadda).innerText = NoteOfThis
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
      var allNoteFLMo3amil = notes[0]+notes[1]+notes[2]+notes[3]+notes[4]+notes[5]+notes[6]+notes[7]+notes[8]+notes[9]+notes[10]+notes[11]
      finallResult = allNoteFLMo3amil / 31
      document.getElementById("dawra").innerText = finallResult
}
function doAllThis() {
      calc_3('resultHg',0,'test1','test2','test3',2)
      calc_3('resultEI',1,'test4','test5','test6',2)
      calc_3('resultSP',2,'test7','test8','test9',2)
      calc_3('resultMATH',3,'test10','test11','test12',4)
      calc_3('resultFilo',4,'test13','test14','test15',2)
      calc_4('resultpc',5,'test16','test17','test18','test19',4)
      calc_3('resulteng',6,'test20','test21','test22',3)
      calc_3('resultar',7,'test23','test24','test25',2)
      calc_5('resultfr',8,'test26','test27','test28','test29','test30',3)
      calc_5('resultinf',9,'test31','test32','test33','test34','test35',2)
      calc_3('resultsvt',10,'test36','test37','test38',4)
      calc_1('resultmob',11,'test40',1)
}