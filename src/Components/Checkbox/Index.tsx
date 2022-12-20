import { useState } from "react";
import { Container } from "./Style/Index";

export type Props = {
    children?: string,
    className?: string
}
export function Checkbox({children = 'Create Accout', className}: Props) {

  const [isChecked, setIsChecked] = useState(false);

  return (
    <Container className={className}>
      <input
        type="checkbox"
        onChange={() => setIsChecked(!isChecked)}
      />
      <span
        className={`checkbox ${isChecked ? "checkbox--active" : ""}`}
        aria-hidden="true"
      />
      <span>{children}</span>
    </Container>
  );
}