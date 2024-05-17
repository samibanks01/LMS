function goToCourse() {
    window.location.href = "course.html";
}

/* course module */

function goToQuiz() {
    window.location.href = "quiz.html";
}  
    
    const navLinks = document.querySelectorAll('.nav-item a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
        event.preventDefault();
        const targetSection = this.getAttribute('href');
        const targetElement = document.querySelector(targetSection);
        targetElement.scrollIntoView({ behavior: "smooth" });
        });
    });



/* quiz module */

function checkAnswers() {
    let score = 0;
    const question1Answer = document.querySelector('input[name="q1"]:checked').value;
    const question2Answer = document.querySelector('input[name="q2"]:checked').value;
    const correctAnswer1 = 'c';
    const correctAnswer2 = 'b';
  
    if (question1Answer === correctAnswer1) {
      score++;
    }
    if (question2Answer === correctAnswer2) {
      score++;
    }
  
    const resultText = `You scored ${score} out of 2 questions.`;
    document.getElementById('result').innerHTML = resultText;
  }
  
/* progress bar */

const progressBar = document.getElementById('progress-bar');
const courseContent = document.querySelector('.course-content');

// Calculate total number of content sections
const totalSections = courseContent.querySelectorAll('.active').length; // Assuming all sections are initially hidden

// Update progress bar width based on current section visibility
function updateProgressBar() {
  const visibleSection = courseContent.querySelector('.active');
  if (visibleSection) {
    const currentSectionIndex = courseContent.querySelectorAll('.active').indexOf(visibleSection) + 1;
    const progress = (currentSectionIndex / totalSections) * 100;
    progressBar.style.width = `${progress}%`;
  }
}

// Update progress bar on initial page load and navigation click
updateProgressBar();

const navLink = document.querySelectorAll('.nav-item a');

navLink.forEach(link => {
  link.addEventListener('click', function() {
    updateProgressBar();
  });
});

/* optional progress feature */

const optionalContent = document.querySelectorAll('.optional-content');

optionalContent.forEach(content => {
  const toggleButton = document.createElement('button');
  toggleButton.textContent = 'Show Additional Resources';
  toggleButton.addEventListener('click', () => {
    content.classList.toggle('active'); // Toggle active class for visibility
    if (content.classList.contains('active')) {
      toggleButton.textContent = 'Hide Additional Resources';
    } else {
      toggleButton.textContent = 'Show Additional Resources';
    }
  });
  content.parentNode.insertBefore(toggleButton, content); // Insert toggle button before content
});

/* knowledge check */

function checkKnowledgeCheck(checkNumber) {
    const answer = document.querySelector(`input[name=kc${checkNumber}]:checked`);
    const feedbackElement = document.getElementById(`module${checkNumber}-feedback`);
  
    if (answer) {
      const correctAnswer = 'c'; // Assuming answer 'c' is correct for check 1
      let feedbackText = 'Correct!';
      if (answer.value !== correctAnswer) {
        feedbackText = 'Incorrect. The primary objective is to protect information assets.';
      }
      feedbackElement.textContent = feedbackText;
    } else {
      feedbackElement.textContent = 'Please select an answer.';
    }
  }

/* slider */

