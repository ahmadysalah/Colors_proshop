import ReactStars from 'react-rating-stars-component';
import { BsBookmark } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import Typography from '../Typography';
import {
  AddCart,
  Content,
  ContentAction,
  Discount,
  MainCard,
  SaveBtn,
} from './cardStyles';
import { Container, Image } from '..';
import { AppState } from '../../redux/store';
import { ActionCartType } from '../../redux/Cart/type';
import { upduteActionCart } from '../../redux/Cart/action';

export interface IProducts {
  image: string;
  rating: number;
  price: number;
  discount: number;
  countInStock?: number;
  _id?: string;
  name?: string;
  description: string;
}
const ComplexCard = ({ ...props }: IProducts) => {
  const navigation = useNavigate();
  const dispatch = useDispatch<ThunkDispatch<AppState, any, ActionCartType>>();

  const AddToCart = () => {
    dispatch(
      upduteActionCart(
        {
          productId: props._id,
          qty: 1,
        },
        () => navigation('/cart', { state: 1 }),
      ),
    );
  };
  const disCount = () => {
    const percentage = (props.discount / props.price) * 100;
    return Math.ceil(percentage);
  };
  return (
    <MainCard>
      {props.discount ? (
        <Discount>
          <Typography width="none" color="white" fontSize="24px">
            {`-${disCount()}%`}
          </Typography>
        </Discount>
      ) : (
        <></>
      )}
      <ContentAction height="340px">
        <Image
          src={props.image}
          alt=""
          style={{ borderRadius: '16px', height: '100%' }}
        />
      </ContentAction>
      <Content margin="0 0 0 20px">
        <Typography variant="h3" fontSize="20px" fontFamily="mulish">
          {props.name}
        </Typography>
      </Content>
      <Content>
        <ReactStars
          isHalf
          name="rate"
          edit={false}
          value={props.rating}
          size={40}
        />
      </Content>
      <Content>
        {props.discount ? (
          <Typography variant="h2" margin="0 10px" color="#FC4059">
            ${`${props.discount}`}
          </Typography>
        ) : (
          <></>
        )}
        <Typography
          variant="h2"
          text-decoration={props.discount ? 'line-through' : 'none'}
          fontFamily="mulish"
        >
          ${props.price}
        </Typography>
      </Content>

      <Container direction="row" margin="auto" padding="15px">
        <SaveBtn>
          <BsBookmark size="24px" />
        </SaveBtn>
        <AddCart onClick={AddToCart}>Add to cart</AddCart>
      </Container>
    </MainCard>
  );
};

export default ComplexCard;
