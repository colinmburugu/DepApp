var steps = Array.from(document.querySelectorAll("form .step"));
var nextBtn = document.querySelectorAll("form .next-btn");
var prevBtn = document.querySelectorAll("form .previous-btn");
var form = document.querySelector("form");
var inputs = Array.from(document.querySelectorAll("input"));

console.log(inputs)

nextBtn.forEach((button) => {
  button.addEventListener("click", () => {

    changeStep("next");
  });
});
prevBtn.forEach((button) => {
  button.addEventListener("click", () => {
    changeStep("prev");
  });
});


function changeStep(btn) {
    var index = 0;
    var active = document.querySelector("form .active");
    index = steps.indexOf(active);
    steps[index].classList.remove("active");
    if (btn === "next") {
      index++;
    } else if (btn === "prev") {
      index--;
    }
    steps[index].classList.add("active");
  }


  
//   inputs.forEach((input) => {
//     input.addEventListener("change", () =>{
//         console.log(input.value.length)
//     });
//   });
// inputs.forEach(input {
//     input.addEventListener('change', (e)){
        
//     }
//   });
// function take(x){
//    return x
// }
// function restrict(btn){
  
// inputs.forEach(function(input) {
//       btn.addEventListener('change',(e)=>{
//           take(e.target.value)
          
//       })
//       if(take){
//         console.log('ok')
//       }else {
//         console.log('enter a value')
//       }
      
//  })
// }
// nextBtn.forEach((button) => {
  
// });


$(document).on('submit','#questionnaire',function(e){
       e.preventDefault();
       //console.log(e.target)
    $.ajax({
          method: 'POST',
          url:'myapp/prediction',
          
          data:{
                Age : $("#ag").val(),
                Gender: $('input[name = "gender"]:checked').val(),
                family_history: $('input[name = "family_history"]:checked').val(),
                work_interfere: $('input[name = "work_interfere"]:checked').val(),
                benefits: $('input[name = "benefits"]:checked').val(),
                care_options: $('input[name = "care_options"]:checked').val(),
                wellness_program: $('input[name = "wellness_program"]:checked').val(),
                seek_help:$('input[name = "seek_help"]:checked').val(),
                anonymity: $('input[name = "anonimity"]:checked').val(),
                leave: $('input[name = "leave"]:checked').val(),
                mental_health_consequence: $('input[name = "mental_health_consequence"]:checked').val(),
                coworkers : $('input[name = "coworkers"]:checked').val(),
                mental_health_interview : $('input[name = "mental_health_interview"]:checked').val(),
                mental_vs_physical : $('input[name = "mental_vs_physical"]:checked').val(),
                obs_consequence : $('input[name = "obs_consequence"]:checked').val(),
                down:$('input[name = "down"]:checked').val(),
                best:$('input[name = "best"]:checked').val(),
                cry:$('input[name = "cry"]:checked').val(),
                sleep:$('input[name = "sleep"]:checked').val(),
                eat:$('input[name = "eat"]:checked').val(),
                look:$('input[name = "look"]:checked').val(),
                weight:$('input[name = "weight"]:checked').val(),
                heart:$('input[name = "heart"]:checked').val(),
                constipation:$('input[name = "constipation"]:checked').val(),
                tired:$('input[name = "tired"]:checked').val(),
                clear:$('input[name = "clear"]:checked').val(),
                easy:$('input[name = "easy"]:checked').val(),
                still:$('input[name = "still"]:checked').val(),
                future:$('input[name = "future"]:checked').val(),
                irritable:$('input[name = "irritable"]:checked').val(),
                decision:$('input[name = "decision"]:checked').val(),
                need:$('input[name = "need"]:checked').val(),
                full:$('input[name = "full"]:checked').val(),
                better:$('input[name = "better"]:checked').val(),
                things:$('input[name = "things"]:checked').val(),
                csrfmiddlewaretoken:$('input[name=csrfmiddlewaretoken]').val(),
                action : 'post'
           },
           
            success:function(json){
            document.forms["questionnaire"].reset();
            if((json['result'] == 1 || json['result']==0) && json['index']>0){
                //window.alert('form submitted');
                if (window.confirm('If you click "ok" you would be redirected.Cancel will load this website ')) 
{
window.location.href='myapp/results';
};
            }
            
            
            
            

   },
   error:function(xhr,errmsg,err){

   }
        
  });
   
 })
     