import { Formik, Form as FormikForm, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const CNGForm = () => {
  return (
    <div className="font-[Manrope] bg-[#FBFBFB] min-h-screen flex flex-col items-center justify-center px-4 sm:px-8 lg:px-24 py-10">
      {/* Title */}
      <div className="text-center mb-10">
        <h1 className="text-[22px] sm:text-[28px] font-semibold text-[#2563EB]">
          Apply for CNG Conversion
        </h1>
        <p className="text-gray-500 text-sm sm:text-base mt-2">
          Fill out the form below and we’ll get back to you within 5 working days.
        </p>
      </div>

      {/* Form Card */}
      <div className="w-full max-w-[850px] p-6 sm:p-10 rounded-2xl border border-[#E5EDFF] shadow-sm">
        <h2 className="text-[18px] sm:text-[20px] font-semibold text-gray-800 mb-6">
          Request CNG Conversion
        </h2>

        <Formik
          initialValues={{
            fullName: "",
            driverId: "",
            phone: "",
            email: "",
            vehicleMake: "",
            model: "",
            modelYear: "",
            fuelType: "",
            location: "",
            experience: "",
            agree: false,
          }}
          validationSchema={Yup.object({
            fullName: Yup.string().required("Full Name is required"),
            phone: Yup.string().required("Phone Number is required"),
            vehicleMake: Yup.string().required("Vehicle Make is required"),
            model: Yup.string().required("Model is required"),
            fuelType: Yup.string().required("Fuel Type is required"),
            location: Yup.string().required("Location is required"),
            agree: Yup.boolean().oneOf(
              [true],
              "You must agree before submitting."
            ),
          })}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            console.log("Form data", values);
            setSubmitting(false);
            resetForm();
          }}
        >
          {({ isSubmitting }) => (
            <FormikForm className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
              {/* Full Name */}
              <div>
                <label className="block font-medium mb-2">Full Name *</label>
                <Field
                  name="fullName"
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full border border-[#D8E9FF] h-[50px] rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
                />
                <ErrorMessage
                  name="fullName"
                  component="p"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* Driver ID */}
              <div>
                <label className="block font-medium mb-2">Yeedha Driver ID</label>
                <Field
                  name="driverId"
                  type="text"
                  placeholder="Optional"
                  className="w-full border border-[#D8E9FF] h-[50px] rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block font-medium mb-2">Phone Number *</label>
                <Field
                  name="phone"
                  type="text"
                  placeholder="+234"
                  className="w-full border border-[#D8E9FF] h-[50px] rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
                />
                <ErrorMessage
                  name="phone"
                  component="p"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block font-medium mb-2">
                  Email Address (optional)
                </label>
                <Field
                  name="email"
                  type="email"
                  placeholder="example@mail.com"
                  className="w-full border border-[#D8E9FF] h-[50px] rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
                />
              </div>

              {/* Vehicle Make */}
              <div>
                <label className="block font-medium mb-2">Vehicle Make *</label>
                <Field
                  name="vehicleMake"
                  type="text"
                  placeholder="e.g. Toyota"
                  className="w-full border border-[#D8E9FF] h-[50px] rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
                />
              </div>

              {/* Model */}
              <div>
                <label className="block font-medium mb-2">Model *</label>
                <Field
                  name="model"
                  type="text"
                  placeholder="e.g. Corolla"
                  className="w-full border border-[#D8E9FF] h-[50px] rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
                />
              </div>

              {/* Model Year */}
              <div>
                <label className="block font-medium mb-2">Model Year *</label>
                <Field
                  name="modelYear"
                  as="select"
                  className="w-full border border-[#D8E9FF] h-[50px] rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
                >
                  <option value="">Select year</option>
                  {Array.from({ length: 20 }, (_, i) => (
                    <option key={i} value={2025 - i}>
                      {2025 - i}
                    </option>
                  ))}
                </Field>
              </div>

              {/* Fuel Type */}
              <div>
                <label className="block font-medium mb-2">Fuel Type *</label>
                <Field
                  name="fuelType"
                  as="select"
                  className="w-full border border-[#D8E9FF] h-[50px] rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
                >
                  <option value="">Select fuel type</option>
                  <option value="petrol">Petrol</option>
                  <option value="diesel">Diesel</option>
                  <option value="hybrid">Hybrid</option>
                </Field>
              </div>

              {/* Location */}
              <div>
                <label className="block font-medium mb-2">Location *</label>
                <Field
                  name="location"
                  as="select"
                  className="w-full border border-[#D8E9FF] h-[50px] rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
                >
                  <option value="">Select location</option>
                  <option value="lagos">Lagos</option>
                  <option value="abuja">Abuja</option>
                  <option value="portharcourt">Port Harcourt</option>
                </Field>
              </div>

              {/* Experience */}
              <div>
                <label className="block font-medium mb-2">
                  How long have you been driving for Yeedha?
                </label>
                <Field
                  name="experience"
                  as="select"
                  className="w-full border border-[#D8E9FF] h-[50px] rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
                >
                  <option value="">Select experience</option>
                  <option value="<1">Less than 1 year</option>
                  <option value="1-2">1 - 2 years</option>
                  <option value=">2">Over 2 years</option>
                </Field>
              </div>

              {/* Agreement Checkbox */}
              <div className="sm:col-span-2 flex items-start gap-2 mt-3">
                <Field
                  type="checkbox"
                  name="agree"
                  className="w-[18px] h-[18px] accent-[#2563EB] mt-1"
                />
                <label className="text-sm text-gray-600 leading-tight">
                  I agree to Yeedha’s conversion terms & policies and accept that
                  my car’s fuel system will be altered for CNG usage.
                </label>
              </div>

              {/* Submit Button */}
              <div className="sm:col-span-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-[52px] bg-[#2563EB] hover:bg-[#1E4FD8] text-white rounded-lg text-[16px] font-medium transition"
                >
                  {isSubmitting ? "Submitting..." : "Apply Now"}
                </button>
              </div>
            </FormikForm>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default CNGForm;
