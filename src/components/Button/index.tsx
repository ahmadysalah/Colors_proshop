import { Button, ButtonStyle } from './ButtonStyle';
import { IStyleButton } from './IStyleButton';

export default function ButtonComponent(props: any) {
  return <Button {...(props as any)} />;
}
