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

  // if (!isUrlValid(vClientCompanyUrlValue)) {
  //   document.getElementById("companyUrlInvalid").innerHTML =
  //     "Invalid company url.";
  //   return false;
  // }

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

  if (vInstructionValue == "") {
    document.getElementById("instructionInvalid").innerHTML =
      "Select any instruction.";
    return false;
  }
}

function isUrlValid(userInput) {
  var res =
    "/(http(s)?://.)?(www.)?[-a-zA-Z0-9@:%._+~#=]{2,256}.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&=]*)/g";
  return res.test(userInput);
  // if (res == null) return false;
  // else return true;
}

function isEmailValid(userInput) {
  var re = "[a - zA - Z0 -9_.+-] +@[a - zA - Z0 - 9 -]+.[a - zA - Z0 - 9 -.] +";
  return re.test(userInput);
}
