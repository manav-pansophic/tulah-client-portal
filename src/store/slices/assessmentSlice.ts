import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  guestId: "",
  assessment: {
    basicInformation: {
      gender: "",
      age: "",
      goals: [],
      autoimmuneDisease: {
        diagnosed: "",
        conditionDetails: ''},
    },
    nutrition: {
      expSignificant: "",
      height: "",
      weight: "",
      dominateSide: "",
      bowelFunction: "",
      preference: [],
    },
    allergies: {
      "expSignificant": '',
      "medication": '',
      "reactmedication": ''
    },
    skin: {
      "skin_issue": [],
      "bruises_easily": ""
    },
    medical: {
      "surgical_procedure": '',
      "surgical_anesthesia_type": '',
      "surgical_year": '',
      "suppliment_name": '',
      "suppliment_strength": '',
      "suppliment_year": '',
      "suppliment_start_date": '',
      "skin_issues": [],
      "leave_comment": '',
      "further_details": '',
    },
    exerciseTolerance: {
      "flightStairs": "",
      "answered_question": [],
      "physicalActivity": "",
      "extrtionLevel": "",
    },
    sleep: {
      "sleep": "",
      "sleep_hours": "",
    },
    smoke: {
      "you_smoke": '',
      "leaveComment": '',
    },
    pillowPreference: {
      "preference": []
    },
    additionalInfo: {
      condition_symptoms: "",
      emergency_contact: {
        name: "",
        phone: "",
      },
      date: "",
    },
  },
};

const assessmentSlice = createSlice({
  name: "assessmentData",
  initialState,
  reducers: {
    setAssessmentFormData(state, action) {
      console.log({ action: action.payload });
      state = action.payload;
    },
  },
});

export const { setAssessmentFormData } = assessmentSlice.actions;
export default assessmentSlice.reducer;
