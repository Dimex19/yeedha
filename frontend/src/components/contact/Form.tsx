import { useState} from 'react'
import { Formik, Form as FormikForm, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import Rectangle4516 from '../../assets/images/rectangle4516.png'
const Form = () => {
    const [activeButton, setActiveButton] = useState<string>("e-hailing"); // default active
           
             const handleButtonClick = (buttonName: string) => {
               setActiveButton(buttonName);
             };
  return (
    <>
        <div className="font-[Manrope] mt-[95px] px-[125px]">
            <p className="mb-[18px]">What type of user are you?</p>
            <div className="flex justify-between">
                <div className="font-medium text-[18px]">
                    <div className={`grid grid-cols-6 gap-x-[15px] gap-y-[17px] text-[16px] font-medium text-[#2563EB]`}>
                        <button
                            className={`col-span-2 w-[190.21px] h-[60.64px] rounded-[10.21px] ${
                                activeButton === "e-hailing"
                                    ? "bg-[#2563EB] text-white"
                                    : "bg-[#F5F9FE] text-[#2563EB]"
                            }`}
                            onClick={() => handleButtonClick("e-hailing")}
                        >
                            E-Hailing Driver
                        </button>
                        <button className={`col-span-2 w-[190.21px] h-[60.64px] rounded-[10.21px] ${
                                activeButton === "car-pool"
                                    ? "bg-[#2563EB] text-white"
                                    : "bg-[#F5F9FE] text-[#2563EB]"
                            }`}
                            onClick={() => handleButtonClick("car-pool")}>Car Pool Driver</button>
                        <button className={`col-span-2 w-[190.21px] h-[60.64px] rounded-[10.21px] ${
                                activeButton === "shuttle-driver"
                                    ? "bg-[#2563EB] text-white"
                                    : "bg-[#F5F9FE] text-[#2563EB]"
                            }`}
                            onClick={() => handleButtonClick("shuttle-driver")}>Shuttle Driver</button>
                        <button className={`col-span-2 w-[190.21px] h-[60.64px] rounded-[10.21px] ${
                                activeButton === "freelance-driver"
                                    ? "bg-[#2563EB] text-white"
                                    : "bg-[#F5F9FE] text-[#2563EB]"
                            }`} onClick={() => handleButtonClick("freelance-driver")}>Freelance Driver</button>
                        <button className={`col-span-2 w-[190.21px] h-[60.64px] rounded-[10.21px] ${
                                activeButton === "fleet-business"
                                    ? "bg-[#2563EB] text-white"
                                    : "bg-[#F5F9FE] text-[#2563EB]"
                            }`} onClick={() => handleButtonClick("fleet-business")}>Fleet Business</button>
                        <button className={`col-span-2 w-[190.21px] h-[60.64px] rounded-[10.21px] ${
                                activeButton === "shuttle-business"
                                    ? "bg-[#2563EB] text-white"
                                    : "bg-[#F5F9FE] text-[#2563EB]"
                            }`} onClick={() => handleButtonClick("shuttle-business")}>Shuttle Business</button>
                        <button className={`col-span-3 w-full h-[60.64px] rounded-[10.21px] ${
                                activeButton === "car-rental-business"
                                    ? "bg-[#2563EB] text-white"
                                    : "bg-[#F5F9FE] text-[#2563EB]"
                            }`} onClick={() => handleButtonClick("car-rental-business")}>Car Rental Business</button>
                        <button className={`col-span-3 w-full h-[60.64px] rounded-[10.21px] ${
                                activeButton === "others"
                                    ? "bg-[#2563EB] text-white"
                                    : "bg-[#F5F9FE] text-[#2563EB]"
                            }`} onClick={() => handleButtonClick("others")}>Others</button>
                    </div>
                    <Formik
                        initialValues={{ fullName: "", driverId: "", phone: "", email: "" }}
                        validationSchema={Yup.object({
                            fullName: Yup.string().required("Full Name is required"),
                            phone: Yup.string().required("Phone Number is required"),
                            message: Yup.string().required("Invalid email address"),
                        })}
                        onSubmit={(values, { setSubmitting, resetForm }) => {
                            console.log("Form data", values);
                            setSubmitting(false);
                            resetForm();
                        }}
                    >
                        {({ isSubmitting }) => (
                        <FormikForm className="space-y-6 mt-[40px]">
                            <div>
                                <label className="block font-medium mb-2.5">Full Names <span className="text-red-500">*</span></label>
                                <Field
                                name="fullName"
                                type="text"
                                placeholder="Enter your full name"
                                className="w-full border border-[#D8E9FF] h-[57px] bg-white rounded px-3 py-2"
                                />
                                <ErrorMessage
                                name="fullName"
                                component="p"
                                className="text-red-500 text-sm"
                                />
                            
                            </div>
                            <div>
                                <label className="block font-medium mb-2.5">Phone Number <span className="text-red-500">*</span></label>
                                <div className="flex gap-x-[13.61px]">
                                    <Field
                                    name="phone"
                                    type="text"
                                    placeholder="+234"
                                    className="w-[113px] border border-[#D8E9FF] h-[57px] bg-white rounded px-3 py-2"
                                    />
                                    <Field
                                    name="phone"
                                    type="text"
                                    placeholder=""
                                    className="w-full border border-[#D8E9FF] h-[57px] bg-white rounded px-3 py-2"
                                    />
                                </div>
                                <ErrorMessage
                                name="phone"
                                component="p"
                                className="text-red-500 text-sm"
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
                                className="w-full border border-[#D8E9FF] h-[90px] bg-white rounded px-3 py-2 resize-none"
                                />
                                <ErrorMessage
                                name="message"
                                component="p"
                                className="text-red-500 text-sm"
                                />
                            </div>
                            <div className="flex justify-end">
                                <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full h-[50px] bg-[#2563EB] text-white rounded-[12px] text-[16px] font-medium"
                                >
                                {isSubmitting ? "Submitting..." : "Submit"}
                                </button>
                            </div>
                        </FormikForm>
                        )}
                    </Formik>                
                </div>
                <img src={Rectangle4516} alt="" className="" />
            </div>
        </div>
    </>
  )
}

export default Form