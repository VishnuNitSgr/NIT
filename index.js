const searchLogo=document.getElementById('search-icon');  
const searchBox=document.getElementById('search-box');
searchLogo.addEventListener('click',()=>{
    searchBox.classList.toggle('active');
    if (searchBox.classList.contains("active")) {
    searchBox.focus();
  }
  
})
searchBox.addEventListener('keydown',(enter)=>{
    if(enter.key==='Enter'){
        searchBox.classList.remove('active');
         searchBox.value = ""; 

    }
})
