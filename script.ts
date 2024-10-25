// taking inputs from uesr
const nameInput = document.getElementById('name') as HTMLInputElement
const emailInput = document.getElementById('email') as HTMLInputElement;
const phoneInput = document.getElementById('phone') as HTMLInputElement;
const photoInput = document.getElementById('photo') as HTMLInputElement;

const schoolInput = document.getElementById('school-name') as HTMLInputElement;
const degreeInput = document.getElementById('degree') as HTMLInputElement;
const schoolInput1 = document.getElementById('school-name1') as HTMLInputElement;
const degreeInput1 = document.getElementById('degree1') as HTMLInputElement;

const insInput = document.getElementById('ins-name') as HTMLInputElement;
const roleInput = document.getElementById('ins-role') as HTMLInputElement;
const insInput1 = document.getElementById('ins-name1') as HTMLInputElement;
const roleInput1 = document.getElementById('ins-role1') as HTMLInputElement;

const skillsInput = document.getElementById('skills-name') as HTMLInputElement;
const skillsInput1 = document.getElementById('skills-name1') as HTMLInputElement;
const projectsInput = document.getElementById('projects-name') as HTMLInputElement;

// taking output fields to display the resume
const outputName = document.getElementById('outputName') as HTMLElement;
const outputEmail = document.getElementById('outputEmail') as HTMLElement;
const outputPhone = document.getElementById('outputPhone') as HTMLElement;
const photoDisplay = document.getElementById('photoDisplay') as HTMLElement;

const outputSchool = document.getElementById('outputSchool') as HTMLElement;
const outputDegree = document.getElementById('outputDegree') as HTMLElement;
const outputSchool1 = document.getElementById('outputSchool1') as HTMLElement;
const outputDegree1 = document.getElementById('outputDegree1') as HTMLElement;

const outputIns = document.getElementById('outputIns') as HTMLElement;
const outputRole = document.getElementById('outputRole') as HTMLElement;
const outputIns1 = document.getElementById('outputIns1') as HTMLElement;
const outputRole1 = document.getElementById('outputRole1') as HTMLElement;

const outputSkills = document.getElementById('outputSkills') as HTMLElement;
const outputSkills1 = document.getElementById('outputSkills1') as HTMLElement;
const outputProjects = document.getElementById('outputProjects') as HTMLElement;

const formArea = document.getElementById('formArea') as HTMLElement;
const outputArea = document.getElementById('output') as HTMLElement;
const submitBtn = document.getElementById('submitBtn') as HTMLElement;


submitBtn.addEventListener('click', () => {
    outputArea.style.display = 'block';
    formArea.style.display = 'none'

    if (photoInput.files && photoInput.files.length > 0) {
        const file = photoInput.files[0];
        const reader = new FileReader();
        reader.onload = function (e) {
            if (e.target?.result) {
                photoDisplay.innerHTML = `<img src="${e.target.result}" alt="Uploaded Photo" style="width: 150px; height: 150px; border-radius: 50%; border: 2px solid #4a90e2; object-fit: cover; margin-bottom: 20px;">`;
            }
        };
        reader.readAsDataURL(file);
    } else {
        photoDisplay.innerHTML = "<p>No photo uploaded</p>";
    }

    outputName.textContent = nameInput.value;
    outputEmail.textContent = emailInput.value;
    outputPhone.textContent = phoneInput.value;

    outputSchool.textContent = schoolInput.value;
    outputDegree.textContent = degreeInput.value;
    outputSchool1.textContent = schoolInput1.value;
    outputDegree1.textContent = degreeInput1.value;

    outputIns.textContent = insInput.value;
    outputRole.textContent = roleInput.value;
    outputIns1.textContent = insInput1.value;
    outputRole1.textContent = roleInput1.value;

    outputSkills.textContent = skillsInput.value;
    outputProjects.textContent = projectsInput.value;



});








