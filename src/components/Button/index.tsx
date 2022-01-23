import { Button } from '..';
import { IStyleButton } from './IStyleButton';

export default function ButtonComponent(props: IStyleButton) {
  return <Button {...props} />;
}
