// UI Variables
const cv                = document.querySelector('#cv');
const softSkills        = document.querySelector('#soft-skills');
const itSkills          = document.querySelector('#it-skills');
const contact           = document.querySelector('#contact');
const cvContent         = document.querySelector('#cv-content');
const softSkillsContent = document.querySelector('#soft-skills-content');
const itSkillsContent   = document.querySelector('#it-skills-content');
const contactContent    = document.querySelector('#contact-content');
const colorScheme       = document.querySelector('#scheme-select');
const logo              = document.querySelector('logo');

// Event Listeners
document.addEventListener('DOMContentLoaded', getColorFromLokalStorage);
colorScheme.addEventListener('change', changeColorInLokalStorage);

// Functions
function getColorFromLokalStorage(e){
  if(localStorage.getItem('scheme') !== null) {
    const chosenColor = localStorage.getItem('scheme');
    colorScheme.value = chosenColor;
    setColorScheme(chosenColor);
  }
}

function setColorScheme(chosenColor){
  var bodyStyles = window.getComputedStyle(document.body);
  console.log(chosenColor);  
  if(chosenColor === 'dracula'){
    document.body.style.setProperty('--grey', bodyStyles.getPropertyValue('--dracula-grey'));
    document.body.style.setProperty('--dark-grey', bodyStyles.getPropertyValue('--dracula-dark-grey'));
    document.body.style.setProperty('--red', bodyStyles.getPropertyValue('--dracula-red'));
    document.body.style.setProperty('--green', bodyStyles.getPropertyValue('--dracula-green'));
    document.body.style.setProperty('--yellow', bodyStyles.getPropertyValue('--dracula-yellow'));
    document.body.style.setProperty('--blue', bodyStyles.getPropertyValue('--dracula-blue'));
    document.body.style.setProperty('--purple', bodyStyles.getPropertyValue('--dracula-purple'));
    document.body.style.setProperty('--dark-green', bodyStyles.getPropertyValue('--dracula-dark-green'));
    document.body.style.setProperty('--white', bodyStyles.getPropertyValue('--dracula-white'));
    document.body.style.setProperty('--background', bodyStyles.getPropertyValue('--dracula-background'));
  } else {
    document.body.style.setProperty('--grey', bodyStyles.getPropertyValue('--monokai-grey'));
    document.body.style.setProperty('--dark-grey', bodyStyles.getPropertyValue('--monokai-dark-grey'));
    document.body.style.setProperty('--red', bodyStyles.getPropertyValue('--monokai-red'));
    document.body.style.setProperty('--green', bodyStyles.getPropertyValue('--monokai-green'));
    document.body.style.setProperty('--yellow', bodyStyles.getPropertyValue('--monokai-yellow'));
    document.body.style.setProperty('--blue', bodyStyles.getPropertyValue('--monokai-blue'));
    document.body.style.setProperty('--purple', bodyStyles.getPropertyValue('--monokai-purple'));
    document.body.style.setProperty('--dark-green', bodyStyles.getPropertyValue('--monokai-dark-green'));
    document.body.style.setProperty('--white', bodyStyles.getPropertyValue('--monokai-white'));
    document.body.style.setProperty('--background', bodyStyles.getPropertyValue('--monokai-background'));
  }
}

function changeColorInLokalStorage(e){
  const schemeChoice = colorScheme.value;

  if(localStorage.getItem('scheme') === null) {
    scheme = [];
  }

  localStorage.setItem('scheme', schemeChoice);
  window.location.reload();
  // Logo reload
  var content = logo.innerHTML;
  logo.innerHTML= content;
}

//  WinBox Functions
cv.addEventListener("click", () => {
  const cvBox = new WinBox({
    title: "CV",
    width: "780px",
    height: "540px",
    modal: true,
    mount: cvContent,
    onfocus: function () {
      this.setBackground("#1E1E1E");
    },
    onblur: function () {
      this.setBackground("#404040");
    },
  });
});

softSkills.addEventListener("click", () => {
  const softSkillsBox = new WinBox({
    title: "Soft-Skills",
    width: "380px",
    height: "450px",
    modal: true,
    mount: softSkillsContent,
    onfocus: function () {
      this.setBackground("#1E1E1E");
    },
    onblur: function () {
      this.setBackground("#404040");
    },
  });
});

itSkills.addEventListener("click", () => {
  const itSkillsBox = new WinBox({
    title: "it-Skills",
    width: "380px",
    height: "600px",
    modal: true,
    mount: itSkillsContent,
    onfocus: function () {
      this.setBackground("#1E1E1E");
    },
    onblur: function () {
      this.setBackground("#404040");
    },
  });
});

contact.addEventListener("click", () => {
  const contactBox = new WinBox({
    title: "Interests / contact",
    width: "500px",
    height: "220px",
    modal: true,
    mount: contactContent,
    onfocus: function () {
      this.setBackground("#1E1E1E");
    },
    onblur: function () {
      this.setBackground("#404040");
    },
  });
});
