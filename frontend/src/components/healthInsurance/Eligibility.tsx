import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const HowItWorks = () => {
  const initialValues = {
    fullName: "",
    driverId: "",
    phone: "",
    email: "",
    driving2Months: "",
    registeredAssociation: "",
    healthInsurance: "",
    conditions: "",
    agree: false,
  };

  const validationSchema = Yup.object({
    fullName: Yup.string().required("Full name is required"),
    driverId: Yup.string().required("Driver ID is required"),
    phone: Yup.string().required("Phone number is required"),
    driving2Months: Yup.string().required("This field is required"),
    registeredAssociation: Yup.string().required("This field is required"),
    healthInsurance: Yup.string().required("This field is required"),
    agree: Yup.boolean().oneOf([true], "You must accept before submitting"),
  });

  const onSubmit = (values: typeof initialValues) => {
    console.log("Form Data", values);
    alert("Form Submitted!");
  };

  return (
    <>
      <div className="font-[Manrope] mt-20 md:mt-[121px] bg-[#FBFBFB] px-4 sm:px-8 md:px-16 lg:px-24 xl:px-[314px] pt-10 md:pt-[68px] pb-10 md:pb-[77px] mb-20 md:mb-[96px]">
        {/* Header */}
        <div className="max-w-[650px] mx-auto text-center">
          <p className="text-[#2563EB] text-[24px] sm:text-[30px] md:text-[35px] font-semibold leading-snug">
            Check if you're eligible
          </p>
          <p className="text-[14px] sm:text-[16px] md:text-[20px] font-medium text-[#828282] mt-2">
            Lorem ipsum dolor sit amet consectetur. Nisi lectus phasellus nibh
            neque et nullam. Ut maecenas consequat habitasse.
          </p>
        </div>

        {/* Form Section */}
        <div className="mt-10 md:mt-[60px]">
          <p className="text-xl sm:text-2xl text-center font-medium mb-6 md:mb-[30px]">
            Health Cover Application
          </p>

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {() => (
              <Form className="space-y-6">
                {/* Full Name + Driver ID */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-medium mb-2.5">
                      Full Names <span className="text-red-500">*</span>
                    </label>
                    <Field
                      name="fullName"
                      type="text"
                      placeholder="Enter your full name"
                      className="w-full border border-[#D8E9FF] h-[50px] sm:h-[55px] bg-white rounded px-3 py-2 text-sm sm:text-base"
                    />
                    <ErrorMessage
                      name="fullName"
                      component="p"
                      className="text-red-500 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block font-medium mb-2.5">
                      Yeedha Driver ID <span className="text-red-500">*</span>
                    </label>
                    <Field
                      name="driverId"
                      type="text"
                      placeholder="YD123456"
                      className="w-full border border-[#D8E9FF] h-[50px] sm:h-[55px] bg-white rounded px-3 py-2 text-sm sm:text-base"
                    />
                    <ErrorMessage
                      name="driverId"
                      component="p"
                      className="text-red-500 text-sm"
                    />
                  </div>
                </div>

                {/* Phone + Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-medium mb-2.5">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <Field
                      name="phone"
                      type="text"
                      placeholder="+234"
                      className="w-full border border-[#D8E9FF] h-[50px] sm:h-[55px] bg-white rounded px-3 py-2 text-sm sm:text-base"
                    />
                    <ErrorMessage
                      name="phone"
                      component="p"
                      className="text-red-500 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block font-medium mb-2.5">
                      Email Address (optional)
                    </label>
                    <Field
                      name="email"
                      type="email"
                      placeholder="example@mail.com"
                      className="w-full border border-[#D8E9FF] h-[50px] sm:h-[55px] bg-white rounded px-3 py-2 text-sm sm:text-base"
                    />
                  </div>
                </div>

                {/* Driving 2 months */}
                <div>
                  <label className="block font-medium mb-2">
                    Have you been driving on Yeedha for at least 2 months?{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <div className="flex flex-wrap gap-4 sm:gap-6">
                    <label className="flex items-center">
                      <Field type="radio" name="driving2Months" value="Yes" />
                      <span className="ml-2">Yes</span>
                    </label>
                    <label className="flex items-center">
                      <Field type="radio" name="driving2Months" value="No" />
                      <span className="ml-2">No</span>
                    </label>
                  </div>
                  <ErrorMessage
                    name="driving2Months"
                    component="p"
                    className="text-red-500 text-sm"
                  />
                </div>

                {/* Registered Drivers Association */}
                <div>
                  <label className="block font-medium mb-2">
                    Are you a member of a registered drivers' association?{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <div className="flex flex-wrap gap-4 sm:gap-6">
                    <label className="flex items-center">
                      <Field type="radio" name="registeredAssociation" value="Yes" />
                      <span className="ml-2">Yes</span>
                    </label>
                    <label className="flex items-center">
                      <Field type="radio" name="registeredAssociation" value="No" />
                      <span className="ml-2">No</span>
                    </label>
                  </div>
                  <ErrorMessage
                    name="registeredAssociation"
                    component="p"
                    className="text-red-500 text-sm"
                  />
                </div>

                {/* Health Insurance */}
                <div>
                  <label className="block font-medium mb-2">
                    Do you currently have any health insurance?{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <div className="flex flex-wrap gap-4 sm:gap-6">
                    <label className="flex items-center">
                      <Field type="radio" name="healthInsurance" value="Yes" />
                      <span className="ml-2">Yes</span>
                    </label>
                    <label className="flex items-center">
                      <Field type="radio" name="healthInsurance" value="No" />
                      <span className="ml-2">No</span>
                    </label>
                  </div>
                  <ErrorMessage
                    name="healthInsurance"
                    component="p"
                    className="text-red-500 text-sm"
                  />
                </div>

                {/* Pre-existing conditions */}
                <div>
                  <label className="block font-medium mb-2">
                    Any pre-existing medical conditions? (Optional)
                  </label>
                  <Field
                    as="textarea"
                    name="conditions"
                    placeholder="Please describe any existing health conditions..."
                    className="w-full border border-[#D8E9FF] bg-white rounded px-3 py-2 h-24 text-sm sm:text-base"
                  />
                </div>

                {/* Checkbox */}
                <div className="bg-[#E8F0FE] p-3 sm:p-4 rounded">
                  <label className="flex items-start sm:items-center gap-2">
                    <Field
                      type="checkbox"
                      name="agree"
                      className="appearance-none w-[19px] h-[19px] border border-gray-400 rounded-sm checked:bg-[#2563EB] checked:border-[#2563EB]"
                    />
                    <span className="text-xs sm:text-sm text-gray-600 leading-snug">
                      I agree for Yeedha to process my data for the purpose of
                      providing health cover. Your information will be kept
                      confidential and used only for health coverage assessment.
                    </span>
                  </label>
                  <ErrorMessage
                    name="agree"
                    component="p"
                    className="text-red-500 text-sm"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full bg-[#2563EB] text-white py-3 rounded-md font-medium hover:bg-blue-700 text-sm sm:text-base"
                >
                  Apply Now
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default HowItWorks;
