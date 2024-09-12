const toggleButton = document.getElementById('toggle-skills') as HTMLButtonElement

const skills = document.getElementById('skills') as HTMLElement


// event listener wait krta hai user ka button pr click krne ka
// event listener pr anonymous function banatay hain ke jesay hi button pr click ho to funtion run hojaye jis pr conditions banaye hoti hain 
toggleButton.addEventListener('click' , ()=>{
    if(skills.style.display === 'none') {
        skills.style.display ='block'
    }
    else{
        skills.style.display = 'none'
    }
});