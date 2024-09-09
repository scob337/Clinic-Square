import { Helmet } from "react-helmet";
import Banner from "./Banner";
import CalcServices from "./CalcServices";
import CardsSec from "./CardsSec";
import FilterBox from "./FilterBox";

export default function Home() {
  return (
    <div className="">
      <Helmet>
        <title>Clinic-Square </title>
        <meta name="description" content="وصف مخصص لصفحة معينة" />
        <meta name="keywords" content="كلمات, مفتاحية, هنا" />
      </Helmet>
      <Banner />
      <FilterBox />
      <CardsSec />
      <br />
      <br />
      <br />
      <CalcServices />
    </div>
  );
}
