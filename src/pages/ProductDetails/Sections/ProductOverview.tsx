import { useState } from 'react';
import { BsBookmarks } from 'react-icons/bs';
import {
  Container,
  Button,
  Circle,
  Typography,
  Icon,
  Counter,
} from '../../../components';
import { ProductImage } from './style';

const images = [
  'https://m.media-amazon.com/images/I/61TnX0PmqES._SX569_.jpg',
  'data:image/jpeg;base64,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',
  'data:image/jpeg;base64,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',
  'data:image/jpeg;base64,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',
];

const ProductOverview: React.FC = () => {
  const [currentImages, setImages] = useState<string[]>(images);

  const handleImageClick = (index: number) => {
    setImages([
      images[index],
      ...images.slice(0, index),
      ...images.slice(index + 1),
    ]);
  };
  return (
    <>
      <Container align-Items="flex-start" flex-Wrap="wrap">
        <Container direction="column" max-width="25rem" margin="2em 0">
          <Container padding="2em" width="80%">
            <ProductImage size="lg" src={currentImages[0]} />
          </Container>
          <Container direction="row" margin=".5em 0">
            {currentImages.map(
              (image, index) =>
                index > 0 && (
                  <ProductImage
                    key={index.toString()}
                    size="sm"
                    src={image}
                    onClick={() => handleImageClick(index)}
                  />
                ),
            )}
          </Container>
        </Container>
        <Container direction="column" margin-left="2em" width="60%">
          <Container justify-Content="space-between">
            <Typography variant="h3" font-Size="1.5rem" bold>
              Apple iPhone 11 Pro 256GB Memory
            </Typography>
            <Typography bold variant="h2">
              $499.99
            </Typography>
          </Container>
          <Container margin="1em 0">
            <Counter />
          </Container>
          <Container>
            <Typography variant="h3" color="grey">
              Color:
            </Typography>
            <Typography bold variant="h3" margin="0 1em">
              silver
            </Typography>
          </Container>
          <Container
            margin="1em 0"
            max-Width="12rem"
            min-Width="10rem"
            justify-Content="space-between"
          >
            <Circle bgColor="#EE8C4B" />
            <Circle bgColor="#2F58DE" borderColor="black" />
            <Circle bgColor="#101311" />
            <Circle bgColor="#AFB5B1" />
          </Container>
          <Container>
            <Typography variant="h3" color="grey">
              Size:
            </Typography>
            <Typography bold variant="h3" margin="0 1em">
              256GB
            </Typography>
          </Container>
          <Container margin="1em 0 1em 0" justify-Content="space-between">
            <Container>
              <Button margin="0 1em 0 0" padding=".6em 2em">
                64GB
              </Button>
              <Button margin="0 1em" padding=".6em 2em">
                128GB
              </Button>
              <Button margin="0 1em" padding=".6em 2em">
                256GB
              </Button>
            </Container>
            <Button width="3rem" margin="0 1em">
              <Icon size="20" icon={<BsBookmarks />} />
            </Button>
            <Button brand padding=".8em" width="15em">
              Add To Cart
            </Button>
          </Container>
          <Typography
            variant="p"
            line-Height={1.5}
            text-Align="justify"
            font-Family="Mulish"
          >
            Et placeat odio voluptas saepe ullam enim sed. Sint rem sint. Ex
            enim aperiam consequatur. Est temporibus ab. Pariatur aut ut
            temporibus culpa. Aut adipisci veniam esse. Quidem dolor corporis
            consequuntur non sunt et neque. Aut dolorem repellat quo architecto
            sint minima doloremque. At quae laborum incidunt vel voluptas dolor
            similique aut. Aut sunt saepe tempore eos sint ut amet voluptatibus
            dicta. Nihil nemo animi. Est laboriosam tempore. Porro id voluptates
            a nesciunt natus qui. Qui mollitia iusto. Perspiciatis reiciendis
            laborum consequuntur sint porro omnis et facere. Voluptatem vitae
            quo. Similique atque cumque culpa temporibus consequatur
            voluptatibus id. Cupiditate alias quas non ab veritatis et. Sed et
            qui consequatur aut. Eum consequuntur necessitatibus veritatis
            voluptatem qui velit repellat numquam tempore. Qui quam eos modi.
            Libero corporis ut et. Eligendi est expedita aspernatur non
            repellendus nihil perferendis. Et deserunt doloremque esse. Iusto
            veniam odio consequatur sint illum. Quis dolor doloribus. Nemo ut
            sit adipisci dolores iure. Est qui rerum ullam mollitia molestiae
            magnam porro at fugit. Neque ut debitis ut porro rerum. Occaecati
            temporibus voluptatem quo eaque. Voluptas impedit veritatis dolore
            assumenda. Aut doloribus unde repellat pariatur consequatur.
            Blanditiis voluptas aut tempora facilis fugi.
          </Typography>
        </Container>
      </Container>
    </>
  );
};

export default ProductOverview;
