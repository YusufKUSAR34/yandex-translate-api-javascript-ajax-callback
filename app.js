//prototype,ajax,callback
eventListeners();


function eventListeners()
{
    document.getElementById("translate-form").addEventListener("submit",translateWord);
    //Change
    document.getElementById("language").onchange=function()
    {        
           ui.changeUI();
    }
}

const translate=new Translate(document.getElementById("word").value,document.getElementById("language").value);
const ui=new UI();
function translateWord(e)
{
       translate.translateWord(function(err,response)
       {
              if(err)
              {
                  //hata
                  console.log(err)
              }
              else{
                //console.log(response) 
                ui.displayTranslate(response);
              }
       });
       translate.changeParameters(document.getElementById("word").value,document.getElementById("language").value);
    e.preventDefault();
}