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

// Event Listeners
document.addEventListener('DOMContentLoaded', getColorFromLokalStorage);
colorScheme.addEventListener('change', changeColorInLokalStorage);

// Functions
function getColorFromLokalStorage(e){
  if(localStorage.getItem('scheme') !== null) {
    colorScheme.value = localStorage.getItem('scheme');
  }
}

function changeColorInLokalStorage(e){
  const schemeChoice = colorScheme.value;

  if(localStorage.getItem('scheme') === null) {
    scheme = [];
  }

  localStorage.setItem('scheme', schemeChoice);
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
