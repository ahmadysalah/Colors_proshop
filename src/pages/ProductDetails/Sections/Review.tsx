import { Container, Rating, Typography } from '../../../components';

const data = [
  {
    name: 'Jenifer Medhurst',
    rating: 2,
    content:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita.',
  },
  {
    name: 'Jenifer Medhurst',
    rating: 2,
    content:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita.',
  },
  {
    name: 'Jenifer Medhurst',
    rating: 2,
    content:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita.',
  },
];
const ReviewSection: React.FC = () => {
  return (
    <Container direction="column" margin="2em 0">
      <Typography variant="h3" bold margin="1em 0">
        Reviews
      </Typography>
      <Container
        flex-Wrap="wrap"
        justify-Content="space-between"
        border="1px solid #D7D7D7"
      >
        {data.map(({ name, rating, content }) => {
          return (
            <Container direction="column" padding="2em">
              <Typography variant="h3" margin=".5em 0" bold>
                {name}
              </Typography>
              <Rating value={rating} />
              <Typography
                padding="1em"
                background-Color="#F2F2F2"
                margin=".5em 0"
                line-Height={1.6}
                font-Family="Mulish"
              >
                {content}
              </Typography>
            </Container>
          );
        })}
      </Container>
    </Container>
  );
};

export default ReviewSection;
