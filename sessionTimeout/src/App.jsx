import { useState } from "react";
import { PersonalDetails } from "./components/personalDetails";
import "./App.css";
import { AddressDetails } from "./components/addressDetails";
import { ApplicationDetails } from "./components/applicationDetail";
function App() {
  const [formData, setformData] = useState({
    nameOfApplicant: "",
    relation: "", // e.g., S/W/D of
    relationName: "",

    fullName: "", // Full name of applicant
    gender: "",
    dob: "",
    age: "",
    placeOfBirth: "",
    countryOfBirth: "",
    bloodGroup: "",

    email: "",
    landlineNumber: "",
    mobileNumber: "",
    altMobileNumber: "",
    qualification: "",
    identificationMark1: "",
    identificationMark2: "",

    presentState: "",
    presentDistrict: "",
    presentTaluka: "",
    presentTownOrVillage: "",
    presentHouse: "",
    presentStreet: "",
    presentLandmark: "",
    presentPincode: "",
    presentStayYears: "",
    presentStayMonths: "",

    sameAsPresent: false,

    permState: "",
    permDistrict: "",
    permTaluka: "",
    permTownOrVillage: "",
    permHouse: "",
    permStreet: "",
    permLandmark: "",
    permPincode: "",

    stateSelection: "Kerala",
    rtoOffice: "",
  });
  const handleClick = async () => {
    console.log("hello")
  }
  
  return (
    <>
      <div class="card mb-4">
        <form onSubmit={handleClick}>
          <h2 class="form-main-title">Learner's Licence Application</h2>
          <ApplicationDetails formData={formData} setformData={setformData} />
          <PersonalDetails formData={formData} setformData={setformData} />
          <AddressDetails formData={formData} setformData={setformData} />
          <div class="text-center button-wrapper">
            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
