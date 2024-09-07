import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  guestId: "12345",
  assessment: {
    basicInformation: {
      gender: "male",
      age: "30",
      goals: [
        "de_stress",
        "detox",
        "weight_management",
        "improve_fitness",
        "wellbeing_goal",
      ],
      autoimmuneDisease: {
        diagnosed: "yes",
        conditionDetails:
          "Rheumatoid Arthritis, experiencing joint pain and fatigue",
      },
    },
    nutrition: {
      expSignificant: "yes-weight-gain",
      height: "5'10'",
      weight: "55",
      dominateSide: "left",
      bowelFunction: "constipated",
      preference: [
        "vegetarian",
        "gluten-free",
        "lactose-free",
        "any-other?",
      ],
    },
    allergies: {
      "expSignificant": 'yes',
      "medication": 'medication',
      "reactmedication": 'red'
    },
    skin: {
      "skin_issue": [
        "psoriasis",
        "eczema",
        "acne",
        "skin_issue",
      ],
      "bruises_easily": "yes"
    },
    medical: {
      "surgical_procedure": 'Good',
      "surgical_anesthesia_type": 'local',
      "surgical_year": '2022',
      "suppliment_name": 'Name',
      "suppliment_strength": 'Good',
      "suppliment_year": '2021',
      "suppliment_start_date": '',
      "skin_issues": [
        "asthma",
        "cancer",
        "diabetes",
        "dementia",
        "disturbances",
        "seizures",
        "others",
      ],
      "leave_comment": 'Testing 1',
      "further_details": 'Testing 2',
    },
    exerciseTolerance: {
      "flightStairs": "yes",
      "answered_question": ["chest-pain", "breathlessness"],
      "physicalActivity": "no",
      "extrtionLevel": "Comment",
    },
    sleep: {
      "sleep": "3",
      "sleep_hours": "2",
    },
    smoke: {
      "you_smoke": 'no-quit',
      "leaveComment": 'Comment',
    },
    pillowPreference: {
      "preference": [
        "contour",
        "boudoir",
        "feather",
        "cottonSoft",
        "cottonMedium",
      ]
    },
    additionalInfo: {
      condition_symptoms: "Symptoms",
      emergency_contact: {
        name: "Name",
        phone: "9731231",
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
