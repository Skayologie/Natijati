notes = [0,0,0,0,0,0,0,0,0,0];

function theMark(NoteOfThis,theSubject) {
      if (NoteOfThis < "10") {
            document.getElementById(theSubject).style.backgroundColor = "#e70000";
      }
      else if(NoteOfThis > "20"){
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
      notes[tartib] = resu
      if (a > 20 || b > 20 || c > 20 || d > 20 || e > 20) {
            alert (theMEssage)
            document.getElementById(Lmadda).style.backgroundColor = "#38488a";
            document.getElementById(Lmadda).innerText = "0"
      }else{
            document.getElementById(Lmadda).innerText = NoteOfThis
            theMark(NoteOfThis,Lmadda)
      }
      }

function calcAllThisPC() {
      document.getElementById("finalitiPC").style.display = "inline";
      var allNoteFLMo3amil = notes[0]+notes[1]+notes[2]+notes[3]+notes[4]+notes[5]+notes[6]+notes[7]+notes[8]+notes[9]
      finallResult = allNoteFLMo3amil / 36
      document.getElementById("dawraPC").innerText = finallResult
}
function doAllThisPC() {
      TheChoose()
      calc_3('resultEI',0,'test4','test5','test6',2)
      calc_3('resultSP',1,'test7','test8','test9',4)
      calc_3('resultMATH',2,'test10','test11','test12',7)
      calc_3('resultFilo',3,'test13','test14','test15',2)
      calc_4('resultpc',4,'test16','test17','test18','test19',7)
      calc_3('resulteng',5,'test20','test21','test22',2)
      calc_3('resultar',6,'test23','test24','test25',2)
      calc_5('resultfr',7,'test26','test27','test28','test29','test30',4)
      calc_3('resultsvt',8,'test31','test32','test33',5)
      calc_1('resultmob',9,'test35',1)
}