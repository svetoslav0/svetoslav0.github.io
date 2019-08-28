function hideAllContents() 
{
    let aboutContent = document.getElementById('about_content');
    let projectsContent = document.getElementById('projects_content');
    let backgroundContent = document.getElementById('background_content');

    aboutContent.style.display = 'none';
    projectsContent.style.display = 'none';
    backgroundContent.style.display = 'none';
}

function click_about() 
{
    hideAllContents();

    let aboutContent = document.getElementById('about_content');
    aboutContent.style.display = "block";

    selectBtn('about_btn');
}

function click_projects() 
{
    hideAllContents();

    let projectsContent = document.getElementById('projects_content');
    projectsContent.style.display = "block";

    selectBtn('projects_btn');
}

function click_background()
{
    hideAllContents();

    let backgroundContent = document.getElementById('background_content');
    backgroundContent.style.display = "block";

    selectBtn('background_btn');
}

function selectBtn(button)
{
    unselectAllButtons();

    let btn = document.getElementById(button);
    btn.style.backgroundColor = 'cornflowerblue';
    btn.style.color = 'white';
}

function unselectAllButtons()
{
    let aboutBtn = document.getElementById('about_btn');
    let projectsBtn = document.getElementById('projects_btn');
    let backgroundBtn = document.getElementById('background_btn');

    aboutBtn.style.backgroundColor = 'aliceblue';
    projectsBtn.style.backgroundColor = 'aliceblue';
    backgroundBtn.style.backgroundColor = 'aliceblue';

    aboutBtn.style.color = 'black';
    projectsBtn.style.color = 'black';
    backgroundBtn.style.color = 'black';
}

