function checkValidation() {
  var vProjectNameValue = document.getElementById("selectionProject").value;
  var vJobNameValue = document.getElementById("selectionJob").value;
  var isRemotejobValue = document.getElementById("cbRemoteJob").value;
  var vResourceCountValue = document.getElementById("inputResource").value;
  var vSalaryCountryValue = document.getElementById("selectionSalaryCountry")
    .value;
  var vMinSalaryValue = document.getElementById("inputMinSalary").value;
  var vMaxSalaryValue = document.getElementById("inputMaxSalary").value;
  var vTimeValue = document.getElementById("selectionTime").value;
  var vApplicantValue = document.getElementById("selectionApplicant").value;
  var vClientCompanyNameValue = document.getElementById(
    "inputClientCompanyName"
  ).value;
  var vClientCompanyUrlValue = document.getElementById("inputClientCompanyUrl")
    .value;
  var vManagerNameValue = document.getElementById("inputManagerName").value;
  var vManagerEmailValue = document.getElementById("inputManagerEmail").value;
  var vInstructionValue = document.getElementById("selectionInstructions")
    .value;

  if (vProjectNameValue == "" || vProjectNameValue == "Choose") {
    document.getElementById("projectNameValueInvalid").innerHTML =
      "Select any project.";
    return false;
  }

  if (vJobNameValue == "" || vJobNameValue == "Choose") {
    document.getElementById("jobNameValueInvalid").innerHTML =
      "Select any job.";
    return false;
  }

  if (vResourceCountValue == "") {
    document.getElementById("resourceValueInvalid").innerHTML =
      "Resource value must be filled out";
    return false;
  }

  if (vSalaryCountryValue == "" || vSalaryCountryValue == "Choose") {
    document.getElementById("salaryCountryValueInvalid").innerHTML =
      "Select appropriate salary unit.";
    return false;
  }

  if (vMinSalaryValue == "") {
    document.getElementById("minSalaryInvalid").innerHTML =
      "Minimum salary must be filled out";
    return false;
  }

  if (vMaxSalaryValue == "") {
    document.getElementById("maxSalaryInvalid").innerHTML =
      "Maximum salary must be filled out";
    return false;
  }

  if (vTimeValue == "" || vTimeValue == "Choose") {
    document.getElementById("timeInvalid").innerHTML =
      "Select any appropriate time.";
    return false;
  }

  if (vApplicantValue == "" || vApplicantValue == "Choose") {
    document.getElementById("applicantValueInvalid").innerHTML =
      "Select any applicant type.";
    return false;
  }

  if (vClientCompanyNameValue == "") {
    document.getElementById("companyNameInvalid").innerHTML =
      "Company name must be filled out";
    return false;
  }

  if (vClientCompanyUrlValue == "") {
    document.getElementById("companyUrlInvalid").innerHTML =
      "Company url must be filled out";
    return false;
  }

  if (!validateUrl(vClientCompanyUrlValue)) {
    document.getElementById("companyUrlInvalid").innerHTML =
      "Invalid company url";
    return false;
  }

  if (vManagerNameValue == "") {
    document.getElementById("managerNameInvalid").innerHTML =
      "Manager name must be filled out";
    return false;
  }

  if (vManagerEmailValue == "") {
    document.getElementById("managerEmailInvalid").innerHTML =
      "Manager email must be filled out";
    return false;
  }

  if (!validateEmail(vManagerEmailValue)) {
    document.getElementById("managerEmailInvalid").innerHTML =
      "Invalid manager email";
    return false;
  }

  if (vInstructionValue == "") {
    document.getElementById("instructionInvalid").innerHTML =
      "Select any instruction.";
    return false;
  }

  alert("Submission Successful.");
  return true;
}

function validateUrl(url) {
  var reg = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
  if (reg.test(url) == false) {
    return false;
  }
  return true;
}

function validateEmail(email) {
  var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  if (reg.test(email) == false) {
    return false;
  }
  return true;
}
