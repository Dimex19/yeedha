import { useState } from 'react'
import { Formik, Form as FormikForm, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// Ensure this path is correct based on your project structure
import Rectangle4516 from '../../assets/images/rectangle4516.png' 

const Form = () => {
    // Corrected initialValues in validationSchema for 'message' instead of 'email' and added an initial value to keep the Formik schema cleaner.
    const initialValues = { fullName: "", driverId: "", phone: "", message: "" };

    const validationSchema = Yup.object({
        fullName: Yup.string().required("Full Name is required"),
        // A simple string check for phone; consider a more robust regex for production
        phone: Yup.string().required("Phone Number is required"),
        // Added message validation to match the form field
        message: Yup.string().required("Message is required"),
    });

    const [activeButton, setActiveButton] = useState<string>("e-hailing"); // default active

    const handleButtonClick = (buttonName: string) => {
        setActiveButton(buttonName);
    };

    return (
        <>
            {/* Added responsiveness: px-4 for mobile, md:px-12 for tablets, lg:px-[125px] for large screens. mt-10 for mobile, lg:mt-[95px] for large screens. */}
            <div className="font-[Manrope] mt-10 px-4 md:px-12 xl:px-[125px]">
                <p className="mb-4 text-lg md:text-[18px]">What type of user are you?</p>
                {/* Changed from 'flex justify-between' to a responsive grid/flex layout */}
                {/* On small screens, the image will stack below the form. On md screens and up, they are side-by-side. */}
                <div className="flex flex-col lg:flex-row lg:justify-between lg:gap-12">
                    <div className="font-medium text-[18px] lg:w-1/2">
                        {/* Responsive grid:
                            - On mobile (default): 1 column (or use grid-cols-2 for smaller buttons)
                            - On tablets (md): 3 columns, allowing two buttons per row (3 * 2/3 = 2 buttons)
                            - On large screens (lg): 6 columns as in the original design
                        */}
                        <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-3 md:gap-x-[15px] gap-y-4 md:gap-y-[17px] text-sm md:text-[16px] font-medium text-[#2563EB]`}>
                            {/* Replaced fixed widths (w-[190.21px]) with w-full to make buttons fill their grid column */}
                            <button
                                className={`col-span-1 md:col-span-1 lg:col-span-2 w-full h-[50px] md:h-[60.64px] rounded-[10.21px] ${
                                    activeButton === "e-hailing"
                                        ? "bg-[#2563EB] text-white"
                                        : "bg-[#F5F9FE] text-[#2563EB]"
                                }`}
                                onClick={() => handleButtonClick("e-hailing")}
                            >
                                E-Hailing Driver
                            </button>
                            <button className={`col-span-1 md:col-span-1 lg:col-span-2 w-full h-[50px] md:h-[60.64px] rounded-[10.21px] ${
                                activeButton === "car-pool"
                                    ? "bg-[#2563EB] text-white"
                                    : "bg-[#F5F9FE] text-[#2563EB]"
                            }`}
                                onClick={() => handleButtonClick("car-pool")}>Car Pool Driver</button>
                            <button className={`col-span-1 md:col-span-1 lg:col-span-2 w-full h-[50px] md:h-[60.64px] rounded-[10.21px] ${
                                activeButton === "shuttle-driver"
                                    ? "bg-[#2563EB] text-white"
                                    : "bg-[#F5F9FE] text-[#2563EB]"
                            }`}
                                onClick={() => handleButtonClick("shuttle-driver")}>Shuttle Driver</button>
                            <button className={`col-span-1 md:col-span-1 lg:col-span-2 w-full h-[50px] md:h-[60.64px] rounded-[10.21px] ${
                                activeButton === "freelance-driver"
                                    ? "bg-[#2563EB] text-white"
                                    : "bg-[#F5F9FE] text-[#2563EB]"
                            }`} onClick={() => handleButtonClick("freelance-driver")}>Freelance Driver</button>
                            <button className={`col-span-1 md:col-span-1 lg:col-span-2 w-full h-[50px] md:h-[60.64px] rounded-[10.21px] ${
                                activeButton === "fleet-business"
                                    ? "bg-[#2563EB] text-white"
                                    : "bg-[#F5F9FE] text-[#2563EB]"
                            }`} onClick={() => handleButtonClick("fleet-business")}>Fleet Business</button>
                            <button className={`col-span-1 md:col-span-1 lg:col-span-2 w-full h-[50px] md:h-[60.64px] rounded-[10.21px] ${
                                activeButton === "shuttle-business"
                                    ? "bg-[#2563EB] text-white"
                                    : "bg-[#F5F9FE] text-[#2563EB]"
                            }`} onClick={() => handleButtonClick("shuttle-business")}>Shuttle Business</button>
                            {/* Changed col-span to be responsive: full width on mobile, 3 columns on medium, and 3 on large */}
                            <button className={`col-span-2 md:col-span-3 w-full h-[50px] md:h-[60.64px] rounded-[10.21px] ${
                                activeButton === "car-rental-business"
                                    ? "bg-[#2563EB] text-white"
                                    : "bg-[#F5F9FE] text-[#2563EB]"
                            }`} onClick={() => handleButtonClick("car-rental-business")}>Car Rental Business</button>
                            <button className={`col-span-2 md:col-span-3 w-full h-[50px] md:h-[60.64px] rounded-[10.21px] ${
                                activeButton === "others"
                                    ? "bg-[#2563EB] text-white"
                                    : "bg-[#F5F9FE] text-[#2563EB]"
                            }`} onClick={() => handleButtonClick("others")}>Others</button>
                        </div>
                        <Formik
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={(values, { setSubmitting, resetForm }) => {
                                console.log("Form data", values);
                                setSubmitting(false);
                                resetForm();
                            }}
                        >
                            {({ isSubmitting }) => (
                                <FormikForm className="space-y-6 mt-8 md:mt-[40px]">
                                    <div>
                                        <label className="block font-medium mb-2.5">Full Names <span className="text-red-500">*</span></label>
                                        <Field
                                            name="fullName"
                                            type="text"
                                            placeholder="Enter your full name"
                                            className="w-full border border-[#D8E9FF] h-[50px] md:h-[57px] bg-white rounded px-3 py-2 focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition duration-150"
                                        />
                                        <ErrorMessage
                                            name="fullName"
                                            component="p"
                                            className="text-red-500 text-sm mt-1"
                                        />

                                    </div>
                                    <div>
                                        <label className="block font-medium mb-2.5">Phone Number <span className="text-red-500">*</span></label>
                                        {/* Simplified the phone number fields for responsiveness: first field is fixed width, second is full width of remaining space */}
                                        <div className="flex gap-x-2 md:gap-x-[13.61px]">
                                            <Field
                                                name="countryCode" // Added a new field for country code for separation
                                                type="text"
                                                placeholder="+234"
                                                className="w-[80px] md:w-[113px] border border-[#D8E9FF] h-[50px] md:h-[57px] bg-white rounded px-3 py-2 text-center focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition duration-150"
                                                // Assuming countryCode is not part of the current validation for simplicity
                                            />
                                            <Field
                                                name="phone"
                                                type="text"
                                                placeholder="e.g., 8012345678"
                                                className="w-full border border-[#D8E9FF] h-[50px] md:h-[57px] bg-white rounded px-3 py-2 focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition duration-150"
                                            />
                                        </div>
                                        <ErrorMessage
                                            name="phone"
                                            component="p"
                                            className="text-red-500 text-sm mt-1"
                                        />
                                    </div>
                                    {/* Message */}
                                    <div>
                                        <label className="block font-medium mb-2.5">
                                            Message <span className="text-red-500">*</span>
                                        </label>
                                        <Field
                                            as="textarea"
                                            name="message"
                                            placeholder="Type your message here"
                                            className="w-full border border-[#D8E9FF] h-[100px] bg-white rounded px-3 py-2 resize-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition duration-150"
                                        />
                                        <ErrorMessage
                                            name="message"
                                            component="p"
                                            className="text-red-500 text-sm mt-1"
                                        />
                                    </div>
                                    <div className="flex justify-center md:justify-end pt-2">
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full md:w-[250px] h-[50px] bg-[#2563EB] text-white rounded-[12px] text-[16px] font-medium hover:bg-[#1E56B4] disabled:bg-[#9BB4E1] transition duration-150"
                                        >
                                            {isSubmitting ? "Submitting..." : "Submit"}
                                        </button>
                                    </div>
                                </FormikForm>
                            )}
                        </Formik>
                    </div>
                    {/* Image responsiveness: Hidden on small screens, block on medium screens, takes up 1/2 width on large screens. */}
                    <div className="hidden lg:block lg:w-1/2 mt-10 lg:mt-0">
                        <img src={Rectangle4516} alt="Illustration" className="w-full h-auto object-cover rounded-xl shadow-lg" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Form