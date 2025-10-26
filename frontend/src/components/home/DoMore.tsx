import { getStrapiMedia } from '../../utils/StrapiImage';
import DoMoreCardProps from './DoMoreCardProps';
import type { DoMoreBlock } from '../../utils/types';

const DoMore = ({ text, description, actions }: DoMoreBlock) => {
  return (
    <div className="px-[30px] md:px-[47px] lg:px-[77px] xl:px-[97px] pt-10 md:pt-[120px]">
      {/* Section title and description */}
      <div>
        <p className="text-3xl lg:text-[45px] text-[#2563EB] font-bold font-[Manrope] text-center md:text-left">
          {text}
        </p>
        <p className="md:max-w-[450px] lg:max-w-[617px] text-[#828282] font-medium text-[12px] md:text-[16px] lg:text-[20px] text-center md:text-left">
          {description}
        </p>
      </div>

      {/* ✅ Map through the actions dynamically */}
      <div className="mt-10 md:mt-[86px] grid grid-cols-1 md:grid-cols-2 gap-6">
        {actions?.map((action, index) => {
          const imageUrl =
            action?.backgroundImage?.image?.url ||
            action?.backgroundImage?.url ||
            null;

          const imageSrc = getStrapiMedia(imageUrl);

          return (
            <DoMoreCardProps
              key={index}
              image={imageSrc || '/placeholder.png'}
              title={action.text}
              description={action.description}
              BtnText={action.cta?.label || 'Learn More'}
            />
          );
        })}
      </div>
    </div>
  );
};

export default DoMore;
