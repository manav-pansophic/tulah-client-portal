export const initialPafSchema: any = {
  allergiesForm: {
    allergies: [{ medication: "", reactmedication: "" }],
  },
  medicalForm: {
    procedure: [
      {
        procedure: "",
        anesthesia_type: "",
        year: "",
      },
    ],
    prescription: [
      {
        medicationName: "",
        strengthMedication: "",
        year: "",
      },
    ],
  },
};
