const nextBtn = document.querySelector(".next");
const imgEle = document.querySelectorAll("img")

const prevEle = document.querySelector(".preview")
const imgContainerEle = document.querySelector(".imgContainer")
 let currentImg = 1;
nextBtn.addEventListener("click", ()=>{
  
  currentImg++;
  clearTimeout(timeout)
  updatePic();
})
prevEle.addEventListener("click", ()=>{
  currentImg--;
  clearTimeout(timeout)
  updatePic();

})

updatePic()
 timeout;

function updatePic(){
  if(currentImg > imgEle .length){
    currentImg = 1;
  }
  else if(currentImg < 1){
    currentImg = imgEle.length
  }
  imgContainerEle.style.transform = `translateX(-${(currentImg-1) *500}px)`;

 timeout = setTimeout(()=>{
     currentImg++;
     updatePic();
  }, 3000)

  
}