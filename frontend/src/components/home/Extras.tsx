import ExtrasProp from "./ExtrasProp"
import type { ExtraSectionBlock } from "../../utils/types/types"
import { getStrapiMedia } from '../../utils/StrapiImage';


const Extras = ({infoPlusImage}: ExtraSectionBlock) => {
  return (
    <>
        {/* <div>Extras</div> */}
        {infoPlusImage.map((item,index) => {
            const imageUrl =
            item?.image?.image?.url ||
            item?.image?.url ||
            null;

          const imageSrc = getStrapiMedia(imageUrl);
            return (
            <ExtrasProp key={index} text1={item.text1} title={item.title} desc={item.description} bgColor={item.bgColor} image={imageSrc || '/placeholder.png'}/>
        );
        })}
    </>
  )
}

export default Extras