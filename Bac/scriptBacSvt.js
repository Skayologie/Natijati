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

function calcAllThis() {
      document.getElementById("finaliti").style.display = "inline";
      var allNoteFLMo3amil = notes[0]+notes[1]+notes[2]+notes[3]+notes[4]+notes[5]+notes[6]+notes[7]+notes[8]+notes[9]
      finallResult = allNoteFLMo3amil / 36
      document.getElementById("dawra").innerText = finallResult
}
function doAllThisS() {
      TheChoose()
      calc_3('resultEIS',0,'test36','test37','test38',2)
      calc_3('resultSPS',1,'test39','test40','test41',4)
      calc_3('resultMATHS',2,'test42','test43','test44',7)
      calc_3('resultFiloS',3,'test45','test46','test47',2)
      calc_3('resultpcS',4,'test48','test49','test50',5)
      calc_3('resultengS',5,'test52','test53','test54',2)
      calc_3('resultarS',6,'test55','test56','test57',2)
      calc_5('resultfrS',7,'test58','test59','test60','test61','test62',4)
      calc_5('resultsvtS',8,'test63','test64','test65','test66','test67',7)
      calc_1('resultmobS',9,'test68',1)
}

