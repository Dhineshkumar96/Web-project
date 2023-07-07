
const searchForm = document.querySelector('form');


const searchResultsContainer = document.getElementById('search-results');

searchForm.addEventListener('submit', function (event) {
    event.preventDefault();


    const nameInput = document.getElementById('name');
    const skillInput = document.getElementById('skill');


    const name = nameInput.value.trim();
    const skill = skillInput.value.trim();

    searchResultsContainer.innerHTML = '';


    displaySearchResults(name, skill);
});


function displaySearchResults(name, skill) {

    const dummyResults = [
        { name: 'Mani', skill: 'JavaScript Developer' },
        { name: 'Dhineshkumar', skill: 'Front-end Developer' },
        { name: 'Sadham', skill: 'Full-stack Developer' },
    ];

    er
    dummyResults.forEach(function (result) {
        const resultDiv = document.createElement('div');
        resultDiv.classList.add('result');

        const nameElement = document.createElement('p');
        nameElement.textContent = 'Name: ' + result.name;

        const skillElement = document.createElement('p');
        skillElement.textContent = 'Skill: ' + result.skill;

        resultDiv.appendChild(nameElement);
        resultDiv.appendChild(skillElement);

        searchResultsContainer.appendChild(resultDiv);
    });
}
$(function () {
    $('a.page-scroll').bind('click', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function () {
    $('.navbar-toggle:visible').click();
});