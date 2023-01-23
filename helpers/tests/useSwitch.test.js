import { useSwitch } from "../useSwitch";
import { renderHook, fireEvent, act } from "@testing-library/react";

describe("useSwitch", () => {
  it("should return toggleClass and switchToggle", () => {
    const { result } = renderHook(() => useSwitch());
    expect(result.current.toggleClass).toBeDefined();
    expect(result.current.switchToggle).toBeDefined();
  });
  it("should switch toggleClass when switchToggle is called", () => {
    const { result } = renderHook(() => useSwitch());
    const { toggleClass } = result.current;
    expect(toggleClass).toBe(false);
    act(() => {
      result.current.switchToggle();
    });
    expect(result.current.toggleClass).toBe(false);
  });
});
