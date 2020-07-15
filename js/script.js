

    //----------------------------------------------
    // VARIABLES AND OBJECTS
    //----------------------------------------------

     var app = document.getElementById("#app");
     var inputCaracters = document.getElementById("#number-caracters");

     var configuration = {
         caracters: parseInt(inputCaracters.),
        //  symbols: true,
        //  numbers: true,
        //  uppercase: true,
     }
      console.log(configuration.caracters);
    
    // var caracters = {
    //      numbers: "0 1 2 3 4 5 6 7 8 9 ",
    //      symbols: "! @ # $ % ^ & * ( ) - + ? < , > . / \ : ;",
    //      uppercase:"A B C D E F G H I J K L M N O P Q R S T U V W X Y Z",
    //      lowercase:"a b c d e f g h i j k l m n o p q r s t u v w x y z",
    //  }

     //-----------------------------------------------
     // EVENTOS
     //-----------------------------------------------

    //EVENTS TO PREVENT THE APP FROM SUBMITTING
    //  .app.addEventListener("submit", function(e){
    //      e.preventDefault();
    //  });

    //  app.elements.namedItem("btn-plus-one").addEventListener("click", function(){
    //      configuration.caracters++;
    //      inputCaracters.value = configuration.caracters;

    //  });

    //  app.elements.namedItem("btn-minus-one").addEventListener("click", function(){
    //      if (configuration.caracters > 8){
    //     configuration.caracters--;
    //     inputCaracters.value = configuration.caracters;
    //      }

    //      console.log(configuration.caracters)
    //  });

    //  app.elements.namedItem("btn-simbols").addEventListener("click", function(){
    //       btnToggle(this);
    //       configuration.simbols = !configuration.simbols;
    //  });

    //  app.elements.namedItem("btn-numbers").addEventListener("click", function(){
    //     btnToggle(this);
    //     configuration.numbers = !configuration.numbers;
    //  });
    //  app.elements.namedItem("btn-uppercase").addEventListener("click", function(){
    //      btnToggle(this);
    //      configuration.uppercase = !configuration.uppercase;
    // });

    //  app.elements.namedItem("btn-generate").addEventListener("click", function(){
    //      generatePassword();
    //  });
      
    //  app.elements.namedItem("input-password").addEventListener("click", function(){
    //      copyPassword();
    //  })


     

     //-----------------------------------------------
     // FUNCTION
     //-----------------------------------------------
//      function btnToggle(element){
//         this.classList.toggle("false");
//         this.chiledNodes[0].classList.toggle("fa-check")
//         this.chiledNodes[0].classList.toggle("fa-times")
//      }

//      function generatePassword(){
//          var finalCaracters = "";
//          var  password = "";

//          for (property in configuration){
//              if(configuration[property] == true){
//                  finalCaracters += caracters[property];

//              }
//          }
//         finalCaracters = finalCaracters.trim();
//         finalCaracters = finalCaracters.split(" ");

//         for(var i = 0; i < configuration.caracters; i++){
//            password += finalCaracters[Math.floor(Math.random() * finalCaracters.length)];
//         }

//         app.element.namedItem("input-password").value = password;

//         function copyPassword(){
//             app.elements.namedItem("input-password"). select();
//             document.execCommand("copy");
//             document.getElementsById("alert-copy").classList.add("active");

//             setTimeout(function(){
//                 document.getElementsById("alert-copy").classList.remove("active")
//             }, 2000);
//         }

//    })
//  generatePassword();
// }())

