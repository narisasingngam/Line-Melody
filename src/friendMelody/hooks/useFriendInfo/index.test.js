import { renderHook, act } from "@testing-library/react-hooks";
import useFriendInfo from ".";
import axios from "axios";

jest.mock("axios");

describe("useFriendInfo", () => {
  const mockUserRepo = {
    data: {
        friend:{
            items: []
        }
    },
  };

  beforeEach(() => {
      axios.get.mockImplementation(() => Promise.resolve(mockUserRepo))
  })

  it("should return useFriendInfo correctly", async() => {
    const { result } = renderHook(() => useFriendInfo());

    const promise = Promise.resolve()
    await act(() => promise)

    expect(result.current.friends).toEqual(mockUserRepo.data)
  });
});
