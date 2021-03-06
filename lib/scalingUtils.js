import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
// const [shortDimension, longDimension] = width < height ? [width, height] : [height, width];

//Guideline sizes are based on standard ~5" screen mobile device
// const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;

const scale = size => {
   const out = (height / guidelineBaseHeight) * size;
   return out;
}
// const verticalScale = size => longDimension / guidelineBaseHeight * size;
const moderateScale = (size, factor = 0.5) => {
    const out = size + (( scale(size) - size ) * factor);
    return out;
}
// const moderateVScale = (size, factor = 0.5) => size + ( verticalScale(size) - size ) * factor;

export {scale, moderateScale};
