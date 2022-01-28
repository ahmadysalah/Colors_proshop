import { Link } from 'react-router-dom';
import Typography from '../../Typography';
import { LogoSt } from './LogoSt';

export default function Logo() {
  return (
    <LogoSt as={Link} to="/">
      <Typography
        // color="#FCDD06"
        font-size="40px"
        variant="h1"
        fontFamily="mulish"
      >
        ProShop
      </Typography>
    </LogoSt>
  );
}
