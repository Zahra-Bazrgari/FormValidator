import Flag from "react-world-flags";
import BodyTexts from "../elements/BodyTexts";
import InputBoxes from "../elements/inputBoxes/InputBoxes";
import * as React from "react";

interface FormValues {
  companyName: string;
  businessNature: string;
  address: string;
  postcode: string;
  contactName: string;
  contactPhone: string;
  email: string;
  linkedin: string;
  idea: string;
}

export default function BodySection() {
  const [values, setValues] = React.useState<FormValues>({
    companyName: "",
    businessNature: "",
    address: "",
    postcode: "",
    contactName: "",
    contactPhone: "",
    email: "",
    linkedin: "",
    idea: "",
  });

  const [errors, setErrors] = React.useState<Partial<FormValues>>({});

  const stringValidator = (value: string) => /^[a-zA-Z\s]+$/.test(value);
  const numberValidator = (value: string) =>
    /^\d+$/.test(value) && value.length >= 7;
  const emailValidator = (value: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  const handleChange = (field: keyof FormValues, value: string) => {
    setValues({ ...values, [field]: value });

    let errorMessage = "";
    if (!value) {
      errorMessage = "This field is required.";
    } else {
      switch (field) {
        case "companyName":
        case "businessNature":
        case "contactName":
          if (!stringValidator(value)) {
            errorMessage = "Only letters are allowed.";
          }
          break;
        case "postcode":
        case "contactPhone":
          if (!numberValidator(value)) {
            errorMessage = `${
              field === "contactPhone" ? "Phone number" : "Postcode"
            } must be at least 7 digits.`;
          }
          break;
        case "email":
          if (!emailValidator(value)) {
            errorMessage = "Please enter a valid email address.";
          }
          break;
        default:
          break;
      }
    }

    setErrors({ ...errors, [field]: errorMessage });
  };

  const isFormValid =
    Object.values(errors).every((error) => !error) &&
    Object.values(values).every((value) => !!value);

  const handleSubmit = () => {
    if (isFormValid) {
      console.log(values);
    } else {
      console.log("Form contains errors.");
    }
  };

  return (
    <div className="text-center justify-center items-center p-20 grid gap-4 lg:grid-cols-[50%_45%] lg:text-left">
      <div className="w-full flex flex-col justify-center items-center lg:items-start p-9">
        <div>
          <BodyTexts
            text="Contact us"
            textSize="text-3xl"
            textColor="text-black"
          />
        </div>

        <div className="lg:w-2/3 mt-7">
          <BodyTexts
            text="Need an experienced and skilled hand with custom IT projects? Fill out the form to get a free consultation."
            textColor="text-costume-md-gray"
          />
        </div>

        <div className="mt-16 grid gap-10 w-full">
          <InputBoxes
            placeHoder={"Your Company Name"}
            onChangeHandler={(value) => handleChange("companyName", value)}
            value={values.companyName}
            isValid={!errors.companyName}
            error={errors.companyName}
          />

          <InputBoxes
            placeHoder={"Nature of Business"}
            onChangeHandler={(value) => handleChange("businessNature", value)}
            value={values.businessNature}
            isValid={!errors.businessNature}
            error={errors.businessNature}
          />

          <div className="grid lg:grid-cols-[65%_35%] gap-6">
            <InputBoxes
              placeHoder={"Address"}
              onChangeHandler={(value) => handleChange("address", value)}
              value={values.address}
              isValid={!errors.address}
              error={errors.address}
            />

            <InputBoxes
              placeHoder={"Postcode"}
              onChangeHandler={(value) => handleChange("postcode", value)}
              value={values.postcode}
              isValid={!errors.postcode}
              error={errors.postcode}
            />
          </div>

          <InputBoxes
            placeHoder={"Contact Name"}
            onChangeHandler={(value) => handleChange("contactName", value)}
            value={values.contactName}
            isValid={!errors.contactName}
            error={errors.contactName}
          />

          <InputBoxes
            placeHoder={"Contact Phone"}
            onChangeHandler={(value) => handleChange("contactPhone", value)}
            value={values.contactPhone}
            isValid={!errors.contactPhone}
            error={errors.contactPhone}
          />

          <InputBoxes
            placeHoder={"Email"}
            onChangeHandler={(value) => handleChange("email", value)}
            value={values.email}
            isValid={!errors.email}
            error={errors.email}
          />

          <InputBoxes
            placeHoder={"Linkedin"}
            onChangeHandler={(value) => handleChange("linkedin", value)}
            value={values.linkedin}
            isValid={!errors.linkedin}
            error={errors.linkedin}
          />

          <InputBoxes
            placeHoder={"Let's talk about your idea"}
            onChangeHandler={(value) => handleChange("idea", value)}
            value={values.idea}
            isValid={!errors.idea}
            error={errors.idea}
          />

          <div className="w-full">
            <div className="border-dashed border-2 border-gray-300 px-4 py-16 rounded-md">
              <div className="flex flex-col items-center justify-center space-y-2">
                <p className="text-sm text-gray-600">Upload Additional file</p>
              </div>
            </div>
            <p className="text-xs text-gray-400 mb-6 mt-2">
              Attach file: File size should not exceed 10MB
            </p>

            <button
              type="submit"
              className={`w-full bg-green-600 text-white py-2 rounded-md text-lg hover:bg-green-700 transition ${
                !isFormValid ? "opacity-50 cursor-not-allowed" : ""
              }`}
              onClick={handleSubmit}
              disabled={!isFormValid}
            >
              SUBMIT
            </button>

            <div className="mt-4 flex items-center space-x-2">
              <input
                type="checkbox"
                id="nda"
                className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
              />
              <label htmlFor="nda" className="text-sm text-gray-600">
                I want to protect my data by signing an NDA
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-1/2 mx-auto flex flex-col justify-center items-start gap-14">
        <div>
          <BodyTexts text="Offices" textColor="text-black" />
          <div className="mt-4">
            <BodyTexts text="United States" />
            <BodyTexts text="500 5th Avenue Suite 400, NY 10110" />
          </div>

          <div className="mt-4">
            <BodyTexts text="United Kingdom" />
            <BodyTexts text="High St. Bromley BRI IDN" />
          </div>

          <div className="mt-4">
            <BodyTexts text="France" />
            <BodyTexts text="80 avenue des Terroirs de France, Paris" />
          </div>
        </div>

        <div className="grid gap-5">
          <div className="mb-2">
            <BodyTexts text="For Quick Inquiries" textColor="text-black" />
          </div>

          <div className="flex items-center">
            <Flag code="GB" className="w-6 h-6 mr-2" />
            <BodyTexts text="+44 7777777" />
          </div>

          <div className="flex items-center">
            <Flag code="US" className="w-6 h-6 mr-2" />
            <BodyTexts text="+1 3333333330" />
          </div>
        </div>

        <div>
          <BodyTexts
            text="Would you like to join our newsletter?"
            textColor="text-black"
          />

          <div className="flex gap-4">
            <div className="w-[90%]">
              <InputBoxes
                placeHoder={"Email"}
                onChangeHandler={(value) => handleChange("email", value)}
                value={values.email}
                isValid={!errors.email}
                error={errors.email}
              />
            </div>

            <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-md">
              Join
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
