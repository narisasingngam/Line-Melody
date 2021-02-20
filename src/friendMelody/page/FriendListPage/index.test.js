import React from "react";
import {render} from '@testing-library/react'
import FriendListPage from ".";
import useFriendInfo from './../../hooks/useFriendInfo'
import 'jest-styled-components'

jest.mock("./../../hooks/useFriendInfo")

describe("FriendListPage", () => {



    beforeEach(() => {
        useFriendInfo.mockReturnValue({
            friends: {
                items: []
            }
        })
    })

  it("renders FriendListPage correctly", () => {
    const {container} = render(<FriendListPage/>)

    expect(useFriendInfo).toBeCalled()

    expect(container.firstChild).toMatchSnapshot()
  });
});