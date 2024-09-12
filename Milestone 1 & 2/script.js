var toggleButton = document.getElementById('toggle-skills');
var skills = document.getElementById('skills');
// event listener wait krta hai user ka button pr click krne ka
// event listener pr anonymous function banatay hain ke jesay hi button pr click ho to funtion run hojaye jis pr conditions banaye hoti hain 
toggleButton.addEventListener('click', function () {
    if (skills.style.display === 'none') {
        skills.style.display = 'block';
    }
    else {
        skills.style.display = 'none';
    }
});
