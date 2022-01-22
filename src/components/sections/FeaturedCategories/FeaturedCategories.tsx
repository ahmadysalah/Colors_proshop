/* eslint-disable import/extensions */
import React, { useState, CSSProperties, useCallback, useEffect } from 'react';
import SwipeableViews from 'react-swipeable-views';
import { Row, Column, CategoryCard, Container } from '../..';
import { ColumnCusom, Divider, Title } from '../../DeviderTitle/style';
import Play from '../../../assets/Images/play.jpg';
import { CategDots, Dot } from '../../Slider/SliderStyle';
import {
  CardsCategory,
  RowInnerSlider,
  WrapperDots,
} from '../FeaturedProducts/styles';

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

export const FeaturedCategories = () => {
  const [sliderIndex, setSliderIndex] = useState<number>(0);
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleSize = () => {
      setWidth(window.innerWidth);
      console.log(width);
    };
    setSliderIndex(0);
    window.addEventListener('resize', handleSize);
    return () => window.removeEventListener('resize', handleSize);
  }, [width]);

  const chunkSize = width > 1100 ? 4 : width > 1100 ? 2 : 1;

  const getSlides = useCallback(() => {
    const chunks: any = [];
    Array(12)
      .fill(obj)
      .map((i: any, idx: number) => {
        if (idx % chunkSize === 0) {
          chunks.push([]);
        }

        const firstArrayLength = chunks.length;
        const secondArrayLength = chunks[firstArrayLength - 1].length;

        chunks[firstArrayLength - 1][secondArrayLength] = i;

        return chunks;
      });

    return chunks.map((i: any, inx: number) => (
      <RowInnerSlider key={inx}>
        {i.map(item => (
          <CategoryCard description="Devices" img={Play} />
        ))}
      </RowInnerSlider>
    ));
  }, [width]);

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
        </Container>
        <WrapperDots
          item="center"
          style={{
            marginTop: '22px',
          }}
        >
          {Array(getSlides().length)
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
      <Divider width="100%" height="1px" color="#707070" />
      <SwipeableViews index={sliderIndex} style={cssStyle}>
        {getSlides()}
      </SwipeableViews>
    </Container>
  );
};
