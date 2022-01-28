/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/extensions */
/* eslint-disable no-underscore-dangle */
import { useState, CSSProperties, useCallback, useEffect } from 'react';
import SwipeableViews from 'react-swipeable-views';
import { CardItem } from './CardItem';
import {
  FeaturedProductsContainer,
  WrapperDots,
  RowInnerSlider,
} from './styles';
import { Container, SpinnerContainer } from '../..';
import ComplexCard from '../../Card/productCard';
import { ContainerWrapper } from '../../Container/style';
import { Dot } from '../../Slider/SliderStyle';
import { InnerSection } from '../../../pages/User/ReviewOrder/Sections/style';
import { DeviderTitle } from '../../DeviderTitle/deviderTitle';
import { IGetAllProduct, IProducts } from '../../../redux/Product/type';
import Play from '../../../assets/Images/play.jpg';

interface Props {
  data: IProduct[];
}

const cssStyle: CSSProperties = {
  position: 'relative',
  width: '100%',
  height: '100%',
};

const DotsStyles: CSSProperties = {
  color: '#707070',
  zIndex: 2,
  margin: 10,
};

export interface IProduct {
  _id: string;
  image: string;
  price: number;
  name: string;
  rating: number;
  discount: number;
}
interface IProps {
  data?: IProducts[];
}
export const FeaturedProduct = ({ data }: IProps) => {
  const [sliderIndex, setSliderIndex] = useState<number>(0);
  const [width, setWidth] = useState(window.innerWidth);
  const handleSize = () => {
    setWidth(window.innerWidth);
    setSliderIndex(0);
  };

  const chunkSize =
    window.innerWidth > 1100 ? 3 : window.innerWidth > 1100 ? 2 : 1;
  const getSlider = () => {
    const chunks: any = [];

    data?.map((i: any, idx: number) => {
      if (idx % chunkSize === 0) {
        chunks.push([]);
      }

      const firstArrayLength = chunks.length;
      const secondArrayLength = chunks[firstArrayLength - 1].length;

      chunks[firstArrayLength - 1][secondArrayLength] = i;

      return i;
    });
    return chunks.map((i: any, inx: number) => (
      <RowInnerSlider key={inx} style={{ margin: '0' }}>
        {i.map((item: IProducts, index) => (
          <ComplexCard {...item} image={item.images[0]} key={index} />
        ))}
      </RowInnerSlider>
    ));
  };

  const fetchFeathers = {
    isLoading: false,
  };

  return fetchFeathers.isLoading ? (
    <SpinnerContainer />
  ) : (
    <Container
      direction="column"
      align-items="center"
      background="#F7F8FC"
      width="100%"
    >
      <Container direction="column" width="85.4%">
        <DeviderTitle title="Featured Product" position="center" />
      </Container>

      <Container direction="row" width="85.4%" justify-content="space-between">
        <SwipeableViews enableMouseEvents index={sliderIndex} style={cssStyle}>
          {getSlider()}
        </SwipeableViews>
      </Container>
      <Container
        flexDirection="row"
        background="#F7F8FC"
        padding="1em"
        width="auto"
      >
        {Array(getSlider().length)
          .fill(0)
          .map((x, i) => (
            <Dot
              style={DotsStyles}
              width="14px"
              isGrey={sliderIndex !== i}
              onClick={() => setSliderIndex(i)}
            />
          ))}
      </Container>
      <Container height="20px" />
    </Container>
  );
};
