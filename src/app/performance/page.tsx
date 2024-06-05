import AtomImageTextView from "@/commonComponents/atomImageTextView";
import perfomanceImage from "/public/images/performance.jpg";
const PerformancePage = () => {
  return (
    <AtomImageTextView
      imgPath={perfomanceImage}
      imgAltText="performance-page-image"
      title="Performance Page"
    />
  );
};

export default PerformancePage;
