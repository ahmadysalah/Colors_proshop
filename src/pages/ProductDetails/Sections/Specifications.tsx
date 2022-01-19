import { Container, Typography } from '../../../components';

const data = [
  {
    key: 'brand',
    value: 'Apple',
  },
  {
    key: 'model',
    value: 'Iphone X',
  },
  {
    key: 'model',
    value: 'Iphone X',
  },
  {
    key: 'model',
    value: 'Iphone X',
  },
  {
    key: 'model',
    value: 'Iphone X',
  },
  {
    key: 'model',
    value: 'Iphone X',
  },
];
let i = 0;
const Specifications: React.FC = () => {
  return (
    <Container direction="column">
      <Typography variant="h3" bold margin="1em 0">
        Specifications
      </Typography>
      <Container
        flex-Wrap="wrap"
        justify-Content="space-between"
        border="1px solid #D7D7D7"
      >
        {data.map(({ key, value }, index) => {
          if (index % 2 === 0) i += 1;

          return (
            <Container
              flex-Basis="45%"
              background-Color={i % 2 === 0 ? '#f5f5f5' : '#FFFFFF'}
              justify-Content="space-between"
              padding="1em"
              margin=".5em 1em"
              border-Radius=".5rem"
              box-Shadow="0 0.1rem .1rem rgba(0,0,0,0.1)"
            >
              <Typography variant="h4" bold>
                {key}
              </Typography>
              <Typography>{value}</Typography>
            </Container>
          );
        })}
      </Container>
    </Container>
  );
};

export default Specifications;
