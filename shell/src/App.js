import React from 'react'
import { DesignSystemProvider, lightTheme } from '@strapi/design-system';

const Button1 = React.lazy(() => import('StrapiApp/Button1'))


export default function App() {
  return (
    <div>
      Shell
      <p>Component from micro frontend running on port 3001:</p>
      <DesignSystemProvider locale="en-GB" theme={lightTheme}>
        <Button1 name={"strapi"} />
      </DesignSystemProvider>
    </div>
  )
}