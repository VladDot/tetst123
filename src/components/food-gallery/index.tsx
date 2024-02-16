import './style.css';

import { tmpSrcFood } from '../../mock';
import { Button, ImgInterior } from '../../components';
import { routes } from '../../constants/routes';

export const FoodGallery = () => {
  return (
    <section className='container pt-20 items-center'>
      <h2 className='mb-5 text-[18px] text-center font-serif text-secondText'>ГАЛЕРЕЯ СТРАВ</h2>

      <h1 className='mb-20 text-[42px] text-center'>Вишуканість та натуральність</h1>

      <ul className='flex gallery-dishes justify-between flex-wrap w-full gap-1 lg:gap-y-3 mb-4 lg:mb-8'>
        {tmpSrcFood.map(({ imgUrl, aspectMenu }, idx) => (
          <ImgInterior
            url={imgUrl}
            aspect={aspectMenu}
            className='gallery-dishes'
            key={`ImageInterior-foodGallery-${idx}`}
          />
        ))}
      </ul>

      <Button
        route={routes.gallery}
        textContent='Дивитись усю галерею'
        className='max-w-[250px] mx-auto'
      />
    </section>
  );
};
