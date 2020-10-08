document.getElementById('burger').addEventListener('click', (event)=>{

let valid = document.querySelector(".navDisplay");

if(valid){
    valid.className="navDisplayTrue"
    valid = document.querySelector(".navDisplayTrue");
}else if(valid==null){
    valid=document.querySelector(".navDisplayTrue");
    valid.className='navDisplay'
}

    
})