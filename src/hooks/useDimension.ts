import { Dimensions, PixelRatio } from 'react-native';

const useDimensions = () => {
  const { width, height, scale, fontScale } = Dimensions.get('screen');


  const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

  const widthBaseScale = SCREEN_WIDTH / 414;
  const heightBaseScale = SCREEN_HEIGHT / 896;

  const widthFunc = (percent:number) => width * (percent / 100);
  const heightFunc = (percent:number) => height * (percent / 100);
  const scaleFunc = (size:number) => size * scale;
  const fontScaleFunc = (size:number) => size * fontScale;

  function normalize(size: number, based = 'width') {
    const newSize =
      based === 'height' ? size * heightBaseScale : size * widthBaseScale;
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  }
  // for width  pixel
  const wp = (size: number) => {
    return normalize(size, 'width');
  };
  // for height  pixel
  const hp = (size: number) => {
    return normalize(size, 'height');
  };
  // for font  pixel
  const fp = (size: number) => {
    return hp(size);
  };
  // for Margin and Padding vertical pixel
  const psv = (size: number) => {
    return hp(size);
  };
  // for Margin and Padding horizontal pixel
  const psh = (size: number) => {
    return wp(size);
  };

  return {
    width: widthFunc,
    height: heightFunc,
    scale: scaleFunc,
    fontScale: fontScaleFunc,
    wp,
    hp,
    fp,
    psv,
    psh,
  };
};

export default useDimensions;
