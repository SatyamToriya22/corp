import homeImage from "/public/images/home.jpg";
import AtomImageTextView from "@/commonComponents/atomImageTextView";

export default function Home() {
  return (
    <AtomImageTextView
      imgPath={homeImage}
      imgAltText="home-page-image"
      title="Home Page"
    />
  );
}
