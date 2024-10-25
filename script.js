// taking inputs from uesr
var nameInput = document.getElementById('name');
var emailInput = document.getElementById('email');
var phoneInput = document.getElementById('phone');
var photoInput = document.getElementById('photo');
var schoolInput = document.getElementById('school-name');
var degreeInput = document.getElementById('degree');
var insInput = document.getElementById('ins-name');
var roleInput = document.getElementById('ins-role');
var skillsInput = document.getElementById('skills-name');
var skillsInput1 = document.getElementById('skills-name1');
var projectsInput = document.getElementById('projects-name');
// taking output fields to display the resume
var outputName = document.getElementById('outputName');
var outputEmail = document.getElementById('outputEmail');
var outputPhone = document.getElementById('outputPhone');
var photoDisplay = document.getElementById('photoDisplay');
var outputSchool = document.getElementById('outputSchool');
var outputDegree = document.getElementById('outputDegree');
var outputIns = document.getElementById('outputIns');
var outputRole = document.getElementById('outputRole');
var outputSkills = document.getElementById('outputSkills');
var outputSkills1 = document.getElementById('outputSkills1');
var outputProjects = document.getElementById('outputProjects');
var formArea = document.getElementById('formArea');
var outputArea = document.getElementById('output');
var submitBtn = document.getElementById('submitBtn');
submitBtn.addEventListener('click', function () {
    outputArea.style.display = 'block';
    formArea.style.display = 'none';
    if (photoInput.files && photoInput.files.length > 0) {
        var file = photoInput.files[0];
        var reader = new FileReader();
        reader.onload = function (e) {
            var _a;
            if ((_a = e.target) === null || _a === void 0 ? void 0 : _a.result) {
                photoDisplay.innerHTML = "<img src=\"".concat(e.target.result, "\" alt=\"Uploaded Photo\" style=\"width: 150px; height: 150px; border-radius: 50%; border: 2px solid #4a90e2; object-fit: cover; margin-bottom: 20px;\">");
            }
        };
        reader.readAsDataURL(file);
    }
    else {
        photoDisplay.innerHTML = "<p>No photo uploaded</p>";
    }
    outputName.textContent = nameInput.value;
    outputEmail.textContent = emailInput.value;
    outputPhone.textContent = phoneInput.value;
    outputSchool.textContent = schoolInput.value;
    outputDegree.textContent = degreeInput.value;
    outputIns.textContent = insInput.value;
    outputRole.textContent = roleInput.value;
    outputSkills.textContent = skillsInput.value;
    outputProjects.textContent = projectsInput.value;
});
