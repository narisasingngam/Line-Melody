import React from "react";
import {render} from '@testing-library/react'
import Card from ".";
import 'jest-styled-components'

describe("Card", () => {
  it("renders Card correctly", () => {
    const {container} = render(<Card/>)

    expect(container.firstChild).toMatchSnapshot()
  });
});