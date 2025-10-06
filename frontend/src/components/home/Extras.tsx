// import React from 'react'
import ExtrasProp from "./ExtrasProp"
import Rectangle38 from '../../assets/images/Rectangle38.png'
import Rectangle39 from '../../assets/images/Rectangle39.png'
import Rectangle40 from '../../assets/images/Rectangle40.png'

const SubItems = [
    {
        text1: "Rent Vehicle",
        title: "Rent for Special Occasion",
        desc: "Lorem ipsum Lorem ipsum dolor sit amet consectetur. Nisi lectusdolor Nisi lectus phasellus nibh neque et nullam, nisi lectusdolor Lorem ipsum Lorem ipsum dolor sit amet consectetur.",
        bgColor: "bg-[#000000]",
        image: Rectangle38
    },
    {
        text1: "Rent Vehicle",
        title: "Rent for Special Occasion",
        desc: "Lorem ipsum Lorem ipsum dolor sit amet consectetur. Nisi lectusdolor Nisi lectus phasellus nibh neque et nullam, nisi lectusdolor Lorem ipsum Lorem ipsum dolor sit amet consectetur.",
        bgColor: "bg-[#7BA5FF]",
        image: Rectangle39
    },
    {
        text1: "Rent Vehicle",
        title: "Rent for Special Occasion",
        desc: "Lorem ipsum Lorem ipsum dolor sit amet consectetur. Nisi lectusdolor Nisi lectus phasellus nibh neque et nullam, nisi lectusdolor Lorem ipsum Lorem ipsum dolor sit amet consectetur.",
        bgColor: "bg-[#7028FF]",
        image: Rectangle40
    },
]

const Extras = () => {
  return (
    <>
        {/* <div>Extras</div> */}
        {SubItems.map((item,index) => (
            <ExtrasProp key={index} text1={item.text1} title={item.title} desc={item.desc} bgColor={item.bgColor} image={item.image}/>
        ))}
    </>
  )
}

export default Extras