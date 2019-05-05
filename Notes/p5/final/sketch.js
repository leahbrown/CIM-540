var aries;
var tarus;
var gemini;
var cancer;
var leo;
var virgo;
var libra;
var scorpio;
var sagittarius;
var capricorn;
var aquarius;
var pisces;
var myRiStrings;
var grammar;

var horoscope;
function setup() {
  //var pattern = '"<start>": "<5-line> % <7-line> % <5-line>", '
  // var pattern = '{"<start>": "You could feel a bit % <1> % stuff", "<1>": "hello | goodbye | things" }';
  // grammar = new RiGrammar(pattern);
  // var result = grammar.expand();
  // console.log(result);

  horoscope = select("#horoscope");

  aries = select("#Aries");
  aries.mousePressed(function(){
    console.log("Aries");
    var randomNum = Math.floor(random(0,3));
    console.log(randomNum);
    var currentMessage = "";
    if(randomNum == 0){
      currentMessage = message1();
      console.log(currentMessage._text);
    }else if(randomNum == 1){
      currentMessage = message2();
      console.log(currentMessage._text);
    }else if(randomNum == 2){
      currentMessage = message3();
      console.log(currentMessage._text);
    }

    horoscope.html(currentMessage.substring(0));



  });

    tarus = select("#Taurus");
    tarus.mousePressed(function(){
      console.log("Taurus");
      var randomNum = Math.floor(random(0,3));
      console.log(randomNum);
      var currentMessage = "";
      if(randomNum == 0){
        currentMessage = message1();
        console.log(currentMessage._text);
      }else if(randomNum == 1){
        currentMessage = message2();
        console.log(currentMessage._text);
      }else if(randomNum == 2){
        currentMessage = message3();
        console.log(currentMessage._text);
      }

      horoscope.html(currentMessage.substring(0));
    });

      gemini = select("#Gemini");
      gemini.mousePressed(function(){
        console.log("Gemini");
        var randomNum = Math.floor(random(0,3));
        console.log(randomNum);
        var currentMessage = "";
        if(randomNum == 0){
          currentMessage = message1();
          console.log(currentMessage._text);
        }else if(randomNum == 1){
          currentMessage = message2();
          console.log(currentMessage._text);
        }else if(randomNum == 2){
          currentMessage = message3();
          console.log(currentMessage._text);
        }

        horoscope.html(currentMessage.substring(0));
      });

        cancer = select("#Cancer");
        cancer.mousePressed(function(){
          console.log("Cancer");
          var randomNum = Math.floor(random(0,3));
          console.log(randomNum);
          var currentMessage = "";
          if(randomNum == 0){
            currentMessage = message1();
            console.log(currentMessage._text);
          }else if(randomNum == 1){
            currentMessage = message2();
            console.log(currentMessage._text);
          }else if(randomNum == 2){
            currentMessage = message3();
            console.log(currentMessage._text);
          }

          horoscope.html(currentMessage.substring(0));
            });

          leo = select("#Leo");
          leo.mousePressed(function(){
            console.log("Leo");
            var randomNum = Math.floor(random(0,3));
            console.log(randomNum);
            var currentMessage = "";
            if(randomNum == 0){
              currentMessage = message1();
              console.log(currentMessage._text);
            }else if(randomNum == 1){
              currentMessage = message2();
              console.log(currentMessage._text);
            }else if(randomNum == 2){
              currentMessage = message3();
              console.log(currentMessage._text);
            }

            horoscope.html(currentMessage.substring(0));
              });

            virgo = select("#Virgo");
            virgo.mousePressed(function(){
              console.log("Virgo");
              var randomNum = Math.floor(random(0,3));
              console.log(randomNum);
              var currentMessage = "";
              if(randomNum == 0){
                currentMessage = message1();
                console.log(currentMessage._text);
              }else if(randomNum == 1){
                currentMessage = message2();
                console.log(currentMessage._text);
              }else if(randomNum == 2){
                currentMessage = message3();
                console.log(currentMessage._text);
              }

              horoscope.html(currentMessage.substring(0));
                });

              libra = select("#Libra");
              libra.mousePressed(function(){
                console.log("Libra");
                var randomNum = Math.floor(random(0,3));
                console.log(randomNum);
                var currentMessage = "";
                if(randomNum == 0){
                  currentMessage = message1();
                  console.log(currentMessage._text);
                }else if(randomNum == 1){
                  currentMessage = message2();
                  console.log(currentMessage._text);
                }else if(randomNum == 2){
                  currentMessage = message3();
                  console.log(currentMessage._text);
                }

                horoscope.html(currentMessage.substring(0));
                  });

                scorpio = select("#Scorpio");
                scorpio.mousePressed(function(){
                  console.log("Scorpio");
                  var randomNum = Math.floor(random(0,3));
                  console.log(randomNum);
                  var currentMessage = "";
                  if(randomNum == 0){
                    currentMessage = message1();
                    console.log(currentMessage._text);
                  }else if(randomNum == 1){
                    currentMessage = message2();
                    console.log(currentMessage._text);
                  }else if(randomNum == 2){
                    currentMessage = message3();
                    console.log(currentMessage._text);
                  }

                  horoscope.html(currentMessage.substring(0));
                    });

              sagittarius = select("#Sagittarius");
              sagittarius.mousePressed(function(){
              console.log("Sagittarius");
              var randomNum = Math.floor(random(0,3));
              console.log(randomNum);
              var currentMessage = "";
              if(randomNum == 0){
                currentMessage = message1();
                console.log(currentMessage._text);
              }else if(randomNum == 1){
                currentMessage = message2();
                console.log(currentMessage._text);
              }else if(randomNum == 2){
                currentMessage = message3();
                console.log(currentMessage._text);
              }

              horoscope.html(currentMessage.substring(0));
                });

              capricorn = select("#Capricorn");
              capricorn.mousePressed(function(){
              console.log("Capricorn");
              var randomNum = Math.floor(random(0,3));
              console.log(randomNum);
              var currentMessage = "";
              if(randomNum == 0){
                currentMessage = message1();
                console.log(currentMessage._text);
              }else if(randomNum == 1){
                currentMessage = message2();
                console.log(currentMessage._text);
              }else if(randomNum == 2){
                currentMessage = message3();
                console.log(currentMessage._text);
              }

              horoscope.html(currentMessage.substring(0));
                });

              aquarius = select("#Aquarius");
              aquarius.mousePressed(function(){
              console.log("Aquarius");
              var randomNum = Math.floor(random(0,3));
              console.log(randomNum);
              var currentMessage = "";
              if(randomNum == 0){
                currentMessage = message1();
                console.log(currentMessage._text);
              }else if(randomNum == 1){
                currentMessage = message2();
                console.log(currentMessage._text);
              }else if(randomNum == 2){
                currentMessage = message3();
                console.log(currentMessage._text);
              }

              horoscope.html(currentMessage.substring(0));
                });


              pisces = select("#Pisces");
              pisces.mousePressed(function(){
              console.log("Pisces");
              var randomNum = Math.floor(random(0,3));
              console.log(randomNum);
              var currentMessage = "";
              if(randomNum == 0){
                currentMessage = message1();
                console.log(currentMessage._text);
              }else if(randomNum == 1){
                currentMessage = message2();
                console.log(currentMessage._text);
              }else if(randomNum == 2){
                currentMessage = message3();
                console.log(currentMessage._text);
              }

              horoscope.html(currentMessage.substring(0));
                });







    //var randnumber = random();

    /*
    if 1
    currentMessage = message1();
    console.log(currentMessage);
    */

    var currentMessage = message1();
    console.log(currentMessage._text);



}

function draw() {
  // put drawing code here

}

function message1(){
  var myRiStrings = new RiString ("You could feel a bit low today due to disappointment from someone important to you.");
  var posList = myRiStrings.pos();

  //replacing words should happen on mouse Pressed
  myRiStrings.replaceWord(5,RiTa.randomWord(posList[5]));
  myRiStrings.replaceWord(6,RiTa.randomWord(posList[6]));
  myRiStrings.replaceWord(13,RiTa.randomWord(posList[13]));
  console.log(myRiStrings);
  return(myRiStrings);
}

function message2() {
  var myRiStrings = new RiString ("If you have to deal with some disappointment today, try not to let it get you down.");
  var posList = myRiStrings.pos();

myRiStrings.replaceWord(7,RiTa.randomWord(posList[7]));
myRiStrings.replaceWord(8,RiTa.randomWord(posList[8]));
  myRiStrings.replaceWord(17,RiTa.randomWord(posList[17]));
  console.log(myRiStrings);
  return(myRiStrings);
}

function message3() {
  var myRiStrings = new RiString("You may want to take a day off from your obligations, perhaps to take care of unfinished creative projects.")
  var posList = myRiStrings.pos();



  myRiStrings.replaceWord(11,RiTa.randomWord(posList[11]));
  myRiStrings.replaceWord(17,RiTa.randomWord(posList[17]));
  myRiStrings.replaceWord(18,RiTa.randomWord(posList[18]));
  myRiStrings.replaceWord(19,RiTa.randomWord(posList[19]));
  console.log(myRiStrings);
  return(myRiStrings);
}
