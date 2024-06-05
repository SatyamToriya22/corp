import AtomImageTextView from "@/commonComponents/atomImageTextView";
import scaleImage from "/public/images/scale.jpg";
const ScalePage = () => {
  return (
    <AtomImageTextView
      imgPath={scaleImage}
      imgAltText="scale-page-image"
      title="Scale your app to infinity"
    />
  );
};

export default ScalePage;
