import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Typography } from '../../../components';
import { IColumn } from '../../../@types/table';
import Table from './Table';
import { AppState } from '../../../redux/store';
import { getMyOrder } from '../../../redux/Order/action';
import { InfoContainer } from '../style';

const columns: IColumn[] = [
  {
    name: 'user',
  },
  {
    name: 'orderItems',
  },
  {
    name: 'shippingAddress',
  },
  {
    name: 'paymentMethod',
  },
  {
    name: 'clientSecret',
  },
  {
    name: 'taxPrice',
  },
  {
    name: 'shippingPrice',
  },
  {
    name: 'totalPrice',
  },
  {
    name: 'isPaid',
  },
  {
    name: 'paidAt',
  },
  {
    name: 'isDelivered',
  },
  {
    name: 'deliveredAt',
  },
];

export default function OrdersProduct() {
  const { orders } = useSelector((state: AppState) => state.order.myOrder);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMyOrder());
  }, [dispatch]);

  return (
    <InfoContainer
      align-items="flex-start"
      width="70%"
      flex-wrap="wrap"
      height="528px"
      background="#F2F2F2"
      border-radius="16px"
      padding="2em"
    >
      <Typography variant="h2" fontSize="1.5rem">
        My Orders
      </Typography>
      <Table data={[]} columns={columns} />
    </InfoContainer>
  );
}
