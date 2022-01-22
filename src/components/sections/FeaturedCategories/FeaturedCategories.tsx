/* eslint-disable import/extensions */
import React, { useState, CSSProperties, useCallback, useEffect } from 'react';
import SwipeableViews from 'react-swipeable-views';
import { ThunkDispatch } from 'redux-thunk';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Column, CategoryCard, Container, SpinnerContainer } from '../..';
import { ColumnCusom, Divider, Title } from '../../DeviderTitle/style';
import Play from '../../../assets/Images/play.jpg';
import { CategDots, Dot } from '../../Slider/SliderStyle';
import {
  CardsCategory,
  RowInnerSlider,
  WrapperDots,
} from '../FeaturedProducts/styles';
import {
  IGetAllCategory,
  IProducts,
  TAllActionProduct,
} from '../../../redux/Product/type';
import { getAlCategory } from '../../../redux/Product/action';
import { AppState } from '../../../redux/store';
import ComplexCard from '../../Card/ProductCard';

interface IObjFeaturedCategories {
  image: string;
  title: string;
  url: string;
}
const obj: IObjFeaturedCategories = {
  image: 'https://proshop-ms.herokuapp.com/images/phone.jpg',
  title: 'Labptop',
  url: '/Labptop',
};

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
interface IProps {
  data?: IProducts[];
}
export const FeaturedCategories = ({ data }: IProps) => {
  const [sliderIndex, setSliderIndex] = useState<number>(0);
  const [width, setWidth] = useState(window.innerWidth);
  const [dataNew, setDataNew] = useState(data);
  //   const handleSize = () => {
  //     setWidth(window.innerWidth);
  //   };
  //   // dispatch(getAlCategory());

  //   setSliderIndex(0);
  //   window.addEventListener('resize', handleSize);
  //   return () => window.removeEventListener('resize', handleSize);
  // }
  console.log('dataccccccc', dataNew);

  const chunkSize =
    window.innerWidth > 1100 ? 4 : window.innerWidth > 1100 ? 3 : 1;
  const chunks: any = [];
  const getSlider = () => {
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
      <RowInnerSlider key={inx}>
        {i.map(item => (
          <ComplexCard {...item} image={item.images[0]} />
        ))}
      </RowInnerSlider>
    ));
  };

  return (
    <Container
      direction="column"
      background="white"
      width="90%"
      margin="60px auto"
    >
      <Container justifyContent="space-between">
        <Container direction="column" width="auto">
          <Title>Featured Categories</Title>
          <Divider
            width="200px"
            height="7px"
            color="#FCDD06"
            style={{
              marginTop: '0',
            }}
          />
          <WrapperDots
            item="center"
            style={{
              marginTop: '22px',
            }}
          >
            {Array(getSlider().length)
              .fill(0)
              .map((x, i) => (
                <CategDots
                  style={DotsStyles}
                  width="14px"
                  isGrey={sliderIndex !== i}
                  onClick={() => setSliderIndex(i)}
                />
              ))}
          </WrapperDots>
        </Container>
      </Container>
      <Divider width="100%" height="1px" color="#707070" />
      <SwipeableViews enableMouseEvents index={sliderIndex} style={cssStyle}>
        {getSlider()}
      </SwipeableViews>
    </Container>
  );
};
