const art = document.getElementById("part");
const btns = document.querySelectorAll(".btn");
const data = document.getElementById("text");
btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (btn.classList.contains("btn-start")) {
      var check = art.classList.toggle("container-move");
      
      if (check) {
        console.log(check);
      } else {
        console.log(check)
      }


    }
    if (btn.classList.contains("btn-end")) {
      art.classList.toggle("container-rotate");
    
    }
  });
});
