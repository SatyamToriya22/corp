import AtomImageTextView from "@/commonComponents/atomImageTextView";
import reliabilityImage from "/public/images/reliability.jpg";
const ReliabilityPage = () => {
  return (
    <AtomImageTextView
      imgPath={reliabilityImage}
      imgAltText="reliability-page-image"
      title="Reliability Page"
    />
  );
};

export default ReliabilityPage;
