import React from "react";
import {render} from '@testing-library/react'
import CardProfile from ".";
import useSentMelody from './../../hooks/useSentMelody'
import 'jest-styled-components'

jest.mock("./../../hooks/useSentMelody")

describe("CardProfile", () => {
    const handleSentMelodySpy = jest.fn()
    const handleClickButtonSpy = jest.fn()
    const handleInputChangeSpy = jest.fn()


    beforeEach(() => {
        useSentMelody.mockReturnValue({
            handleSentMelody: handleSentMelodySpy,
            handleClickButton: handleClickButtonSpy,
            handleInputChange: handleInputChangeSpy,
            showInput: 1,
            invalidInput: true,
        })
    })

  it("renders CardProfile correctly", () => {
    const {container} = render(<CardProfile image={'url'} name={"name"} userId={3}/>)

    expect(useSentMelody).toBeCalledWith(3)

    expect(container.firstChild).toMatchSnapshot()
  });
});