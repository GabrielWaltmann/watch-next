import { useState } from "react";
import { Container } from "./Style/Index";

export type Props = {
    children?: string
}
export function Checkbox({children = 'Create Accout'}: Props) {

  const [isChecked, setIsChecked] = useState(false);

  return (
    <Container>
      <input
        type="checkbox"
        onChange={() => setIsChecked(!isChecked)}
      />
      <span
        className={`checkbox ${isChecked ? "checkbox--active" : ""}`}
        aria-hidden="true"
      />
      {children}
    </Container>
  );
}