import { useState } from "react";
import { Footer } from "flowbite-react";

export default function FooterComponent() {
  const [year] = useState(new Date().getFullYear());

  return (
    <Footer container className="mt-8 bg-transparent dark:bg-transparent">
      <Footer.Copyright by="Francisco Mercado Escalante" year={year} />
    </Footer>
  );
}
