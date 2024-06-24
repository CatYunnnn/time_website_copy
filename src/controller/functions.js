export function updateDisplay(
  leftVisible,
  rightVisible,
  leftBlur,
  rightBlur,
  button,
  buttonRight,
  blur,
  blurRight
) {
  button.current.style.display = leftVisible ? "block" : "none";
  buttonRight.current.style.display = rightVisible ? "block" : "none";
  blur.current.style.backgroundImage = leftBlur
    ? "linear-gradient(90deg,black,transparent)"
    : "none";
  blurRight.current.style.backgroundImage = rightBlur
    ? "linear-gradient(90deg,transparent,black)"
    : "none";
}
/*change css when innerSize change*/
export function handleResize(
  updateDisplay,
  shortScreen,
  setTemp,
  buttonLeftRef,
  buttonRightRef,
  blurLeft,
  blurRight
) {
  if (window.innerWidth > 1161) {
    shortScreen = false;
    setTemp(0);
    updateDisplay(
      false,
      false,
      false,
      false,
      buttonLeftRef,
      buttonRightRef,
      blurLeft,
      blurRight
    );
  } else {
    /*避免持續更新窄螢幕設定*/
    if (shortScreen) {
      return;
    }
    shortScreen = true;
    updateDisplay(
      false,
      true,
      false,
      true,
      buttonLeftRef,
      buttonRightRef,
      blurLeft,
      blurRight
    );
  }
}
/*photo or cards offset*/
export function offsetRight(
  offset,
  setOffset,
  updateDisplay,
  buttonLeftRef,
  buttonRightRef,
  blurLeft,
  blurRight
) {
  const width = window.innerWidth;
  if (1448 - offset - 260 < width) {
    setOffset(1420 - width);
    updateDisplay(
      true,
      false,
      true,
      false,
      buttonLeftRef,
      buttonRightRef,
      blurLeft,
      blurRight
    );
  } else {
    setOffset(offset + 260);
    updateDisplay(
      true,
      true,
      true,
      true,
      buttonLeftRef,
      buttonRightRef,
      blurLeft,
      blurRight
    );
  }
}

export function offsetLeft(
  offset,
  setOffset,
  updateDisplay,
  buttonLeftRef,
  buttonRightRef,
  blurLeft,
  blurRight
) {
  const newTemp = offset - 260;
  if (newTemp <= 0) {
    setOffset(0);
    updateDisplay(
      false,
      true,
      false,
      true,
      buttonLeftRef,
      buttonRightRef,
      blurLeft,
      blurRight
    );
  } else {
    setOffset(newTemp);
    updateDisplay(
      true,
      true,
      true,
      true,
      buttonLeftRef,
      buttonRightRef,
      blurLeft,
      blurRight
    );
  }
}
/*addEventListener callback function*/
export function useEffectCallBack(
  useEffect,
  handleResize,
  updateDisplay,
  shortScreen,
  setOffset,
  buttonLeftRef,
  buttonRightRef,
  blurLeft,
  blurRight
) {
  useEffect(() => {
    handleResize(
      updateDisplay,
      shortScreen,
      setOffset,
      buttonLeftRef,
      buttonRightRef,
      blurLeft,
      blurRight
    );

    window.addEventListener("resize", () =>
      handleResize(
        updateDisplay,
        shortScreen,
        setOffset,
        buttonLeftRef,
        buttonRightRef,
        blurLeft,
        blurRight
      )
    );

    return () => {
      window.removeEventListener("resize", () =>
        handleResize(
          updateDisplay,
          shortScreen,
          setOffset,
          buttonLeftRef,
          buttonRightRef,
          blurLeft,
          blurRight
        )
      );
    };
  }, []);
}
