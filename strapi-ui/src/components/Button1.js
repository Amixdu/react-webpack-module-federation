import { Button as StrapiButton } from "@strapi/design-system";
import { DesignSystemProvider, lightTheme } from "@strapi/design-system";
import React from "react";

const Button = ({ name }) => {
  return (
    <DesignSystemProvider locale="en-GB" theme={lightTheme}>
      <StrapiButton variant={"default"}>{name}</StrapiButton>
    </DesignSystemProvider>
  );
};

export default Button;
