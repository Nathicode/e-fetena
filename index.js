let desc = ["This web app makes you more succsessful student", "This app is used for pre test preparation", "for any question please join our telegram channel", "You can practice by answering quizzes", "This only makes you to prepare for mid & final exam"];
let p = document.querySelector('#description');
let timein = 0; 
let time = setInterval(function(){
    timein++;
    document.querySelector('#desc').innerHTML = desc[Math.floor(Math.random() * desc.length)];
   // p.innerHTML = timein;
    console.log(timein);
    if (timein == 1){
        document.querySelector('#desc').style.animationName += 'descr';
    }
   
    if (timein == 3){
        document.querySelector('#desc').style.animationName += 'descr';
    }
   
    if (timein == 6){
        document.querySelector('#desc').style.animationName += 'descr';
    }
    
    if (timein == 9){
        document.querySelector('#desc').style.animationName += 'descr';
    }
    if (timein == 10) {
        timein = 0;
       // document.querySelector('#desc').style.animationName = 'descr';
     
    }
    
   
}, 3000);

let biologyone = ["<label>A tentative idea or statement that explains observed facts and predicts new outcomes</label><p>A. Journal</p><p>B. Article</p><p>C. Principle</p><p>D. Hypothesis</p>",
"<label>Biologists can get collaboration with other biologists?</label><br>",
"<label>A biologist who is very popular for his descovery of cells is</label><p>A. Antovan Leuweahock</p><p>B. Aristotle</p><p>C. Robert Hooke</p><p>D. Robert Koch</p>",
"<label>The first female Ethiopian professor from A.A.U is____</label><br>",
"<label>Ethiopian institute which is working on an interrnationally recognised issue of biodiversity is____</label><br>"
];
let biologytwo = ["<label>Some object is seen under the microscope and its size is increased by 100x. This statement explains which ability of the microscope?</label><p>A. Mounting</p><p>B. Resolution</p><p>C. staining</p><p>D. Magnification</p>",
"<label>Which of the following cell is incorectly matched with it's function</label><p>A. Nerve cell - conduction of electrochemical impulse</p><p>B. Red Blood Cell - transport of materials and gases in the body</p><p>C. White blood cell - production of hormones</p><p>D. Sperm cell - reproductive role</p>",
"<label>Among the list of cells given below which one is prokaryotic</label><p>A. Egg cell</p><p>B. Bacteria cell</p><p>C. Muscle cell</p><p>D. protozoan cell</p>",
"<label>The ability of a microscope to reveal the fine detail of an objects call____</label><br>",
"<label>In addition to have cell membrane, plant cells are surrounded ____</label>"
];

document.querySelector('#bts').onclick = function wrt(){
    let inputs = document.getElementById('am');
document.querySelector("label").style.textAlign = "center"
document.querySelector("label").style.marginLeft = "10px";
    if(document.querySelector("#select").value == 'one' && document.querySelector('#selecttwo').value == "bio" && inputs.value == "10"){
       
       
       function wr(){
          document.querySelector(".main").innerHTML =  biologyone[0] + biologytwo[0]  + biologyone[1] + biologytwo[1]  + biologyone[2] + biologytwo[2] +  biologyone[3] + biologytwo[3] + biologyone[4] +  biologytwo[4]; document.querySelector('.footer').innerHTML = "<p>Input the answer</p>1<input type='text' id='fir'> 2<input type='text' id='sec'>3<input type='text' id='thr'>4<input type='text' id='four'>5<input type='text' id='five'>6<input type='text' id='six'>7<input type='text' id='seven'>8<input type='text' id='eight'>9<input type='text' id='nine'>10<input type='text' id='ten'><button id='scores'>Get scores</button><p id='p' style='display: none;'></p>";
       }
       wr()
       
       let first = document.querySelector('#fir');
      let sec = document.querySelector('#sec');
      let thr = document.querySelector('#thr');
      let four = document.querySelector('#four');
      let five = document.querySelector('#five');
      let six = document.querySelector('#six');
      let seven = document.querySelector('#seven');
      let eight = document.querySelector('#eight');
      let nine = document.querySelector('#nine');
      let ten = document.querySelector('#ten');
      let scores = 0;
      document.querySelector("#scores").onclick = function bt() {
        //let scores = 0;
alert(first[0])
localStorage.setItem("tex", document.body.innerHTML)

   if (first.value[0] == "D") {
        scores++;
    }
    if(sec.value[0] == "D"){
scores++;
    }
    if(thr.value[0] == "T"){
scores++;
    }
    if(four.value[0] == "C"){
        scores++;
            }
            if(five.value[0] == "C"){
            scores++;
            }
            if(six.value[0] == "B"){
                scores++;
                }
                if(seven.value.includes("Y", "e", "a", "e", "m")){
                    scores++;
                    } 
                    if (eight.value == "Resolution") {
                        scores++;
                    } 
                    if (ten.value == "Cell wall") {
                        scores++;
                    }
                    if (nine.value.includes("I", "b", "c")) {
                   scores++;
       
                 }
             document.querySelector('#p').style.display = "block"; document.querySelector('#p').innerHTML = "<p>You Got " + scores + " From 10 questions</p>";  
   
    }
}
}
    
