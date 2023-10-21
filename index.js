var arr = [
  {
    dp: "https://images.unsplash.com/photo-1643325951519-1719312278f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3794&q=80",
    storey:"https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3000&q=80"
  },
  {
    dp: "https://images.unsplash.com/photo-1545912453-3d32e20f72bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3774&q=80",
    storey:"https://images.unsplash.com/photo-1545912453-db258ca9b7b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3774&q=80"
  },
  {
    dp: "https://images.unsplash.com/photo-1524638431109-93d95c968f03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3774&q=80",
    storey:"https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2459&q=80"
  },
  {
    dp: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3456&q=80",
    storey:"https://images.unsplash.com/photo-1532171875345-9712d9d4f65a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2509&q=80"
  },
];
var storiyan=document.querySelector(".storiyan");
var love = document.querySelector("i");
var clutter="";
arr.forEach(function (elem,hami) {
  clutter+=` <div class="storey">
  <img id="${hami}" src="${elem.dp}" alt="">
</div>`
});
storiyan.innerHTML=clutter;
storiyan.addEventListener("click", function(dets){
   document.querySelector(".full-screen").style.display = "block"
   document.querySelector(".full-screen").style.backgroundImage = `url(${arr[dets.target.id].storey})`
   document.querySelector("i").style.display = "none"
   
   setTimeout(function(){
    document.querySelector(".full-screen").style.display = "none"
   },1000)
});
