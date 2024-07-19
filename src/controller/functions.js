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
/*handle mobile touch*/
export function handleTouchStart(e, mouseStartX, isDragging) {
  const width = window.innerWidth;
  if (width >= 768) return;
  const touch = e.touches[0];
  mouseStartX.current = touch.clientX;
  isDragging.current = true;
}
export function handleTouchMove(
  e,
  isDragging,
  currentX,
  mouseStartX,
  setDraggingOffset
) {
  const touch = e.touches[0];
  const width = window.innerWidth;
  if (width >= 768 || !isDragging.current) return;
  currentX.current = touch.clientX;
  setDraggingOffset(currentX.current - mouseStartX.current);
}
export function handleTouchEnd(
  isDragging,
  currentX,
  setCircleBackground,
  setDraggingOffset,
  mouseStartX,
  circleBackground
) {
  const width = window.innerWidth;
  if (width >= 768 || !isDragging.current) return;
  setDraggingOffset(0);
  if (
    currentX.current - mouseStartX.current >= width / 3 &&
    circleBackground > 0
  ) {
    setCircleBackground((prevCircleBackground) => prevCircleBackground - 1);
  } else if (
    currentX.current - mouseStartX.current <= -width / 3 &&
    circleBackground < 4
  ) {
    setCircleBackground((prevCircleBackground) => prevCircleBackground + 1);
  }
  isDragging.current = false;
}
/*change the page button circle*/
export function changeCard(index, setCircleBackground) {
  setCircleBackground(index);
}
/*if in mobile*/
export function useIfInMobile(ifMobile, setIfMobile, useEffect) {
  (() => {
    const width = window.innerWidth;
    if (width < 768 && ifMobile === false) {
      setIfMobile(true);
    }
  })();
  const changeToMobile = () => {
    const width = window.innerWidth;
    if (width < 768) {
      setIfMobile(true);
    } else if (width > 768) {
      setIfMobile(false);
    }
  };
  useEffect(() => {
    window.addEventListener("resize", changeToMobile);
    return () => {
      window.removeEventListener("resize", changeToMobile);
    };
  }, []);
}
