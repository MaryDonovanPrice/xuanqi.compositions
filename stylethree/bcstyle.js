// const hamburgerButton = document.getElementById('hamburger');
// const navList = document.getElementById('navList');



// function toggleButton() {
// 	navList.classList.toggle('show');
// }


// hamburgerButton.addEventListener('click', toggleButton);


const bio = document.getElementById('bio');
const bioButton = document.getElementById('bioButton');
const cvButton = document.getElementById('cvButton');
const cv = document.getElementById('cv');


function toggleBio() {
	bio.classList.add('show');
	bioButton.classList.add('small')
	cvButton.classList.add('small')
	if (cv.classList.contains('show')){
		cv.classList.remove('show');
	};
};

function toggleCv() {
	cv.classList.add('show');
	cvButton.classList.add('small');
	bioButton.classList.add('small')
	if (bio.classList.contains('show')) {
		bio.classList.remove('show');
	};
};

bioButton.addEventListener('click', toggleBio);
cvButton.addEventListener('click', toggleCv);
