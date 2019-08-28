window.onload = function()
{
    let bornDate = new Date("September 7, 1996");
    let now = new Date();

    let bornYear = bornDate.getFullYear();
    let currentYear = now.getFullYear();

    let bornMonth = bornDate.getMonth() + 1;
    let currentMonth = now.getMonth() + 1;
    
    let yearsOld = currentYear - bornYear - 1;


    if (bornMonth < currentMonth) // birthday has passed this year
    {
        yearsOld = currentYear - bornYear;
    }
    else if (bornMonth == currentMonth) // birthday is this month
    {
        let bornDay = bornDate.getDate();
        let currentDay = now.getDate();

        if (bornDay <= currentDay) // birthday is either passed or it is today
        {
            yearsOld = currentYear - bornYear;
        }
    }

    document.getElementById('yearsOld').innerHTML = yearsOld;
}