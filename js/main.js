function hideAllContents() 
{
    let aboutContent = document.getElementById('about_content');
    let portfolioContent = document.getElementById('portfolio_content');
    let resumeContent = document.getElementById('resume_content');

    aboutContent.style.display = 'none';
    portfolioContent.style.display = 'none';
    resumeContent.style.display = 'none';
}

function click_about() 
{
    hideAllContents();

    let aboutContent = document.getElementById('about_content');
    aboutContent.style.display = "block";

    selectBtn('about_btn');
}

function click_portfolio() 
{
    hideAllContents();

    let portfolioContent = document.getElementById('portfolio_content');
    portfolioContent.style.display = "block";

    selectBtn('portfolio_btn');
}

function click_resume()
{
    hideAllContents();

    let resumeContent = document.getElementById('resume_content');
    resumeContent.style.display = "block";

    selectBtn('resume_btn');
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
    let portfolioBtn = document.getElementById('portfolio_btn');
    let resumeBtn = document.getElementById('resume_btn');

    aboutBtn.style.backgroundColor = 'aliceblue';
    portfolioBtn.style.backgroundColor = 'aliceblue';
    resumeBtn.style.backgroundColor = 'aliceblue';

    aboutBtn.style.color = 'black';
    portfolioBtn.style.color = 'black';
    resumeBtn.style.color = 'black';
}

