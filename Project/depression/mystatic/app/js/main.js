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
    //console.log(index)
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
  // inputs.forEach((input) => {
  //   input.addEventListener('change', ()=>{
  //       value = input.value
  //       if (value == null){
  //           console.log(0)
  //       }
  //       else{
  //            console.log(value)
  //       }
  //   });
  // });

  
     