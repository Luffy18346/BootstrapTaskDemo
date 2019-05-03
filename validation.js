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
    alert("Select any project.");
    return;
  }

  if (vJobNameValue == "" || vJobNameValue == "Choose") {
    alert("Select any job.");
    return;
  }

  if (vResourceCountValue == "") {
    alert("Resource value must be filled out");
    return;
  }

  if (vSalaryCountryValue == "" || vSalaryCountryValue == "Choose") {
    alert("Select appropriate salary unit.");
    return;
  }

  if (vMinSalaryValue == "") {
    alert("Minimum salary must be filled out");
    return;
  }

  if (vMaxSalaryValue == "") {
    alert("Maximum salary must be filled out");
    return;
  }

  if (vTimeValue == "" || vTimeValue == "Choose") {
    alert("Select any appropriate time.");
    return;
  }

  if (vApplicantValue == "" || vApplicantValue == "Choose") {
    alert("Select any applicant type.");
    return;
  }

  if (vClientCompanyNameValue == "") {
    alert("Company name must be filled out");
    return;
  }

  if (vClientCompanyUrlValue == "") {
    alert("Company url must be filled out");
    return;
  }
}
