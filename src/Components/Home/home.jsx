import { Helmet } from "react-helmet";
import Banner from "./Banner";
import CalcServices from "./CalcServices";
import CardsSec from "./CardsSec";
import FilterBox from "./FilterBox";

export default function Home() {
  return (
		<div className="py-10">
			<Helmet>
				<title>Clinic-Square </title>
				<meta name="description" content="وصف مخصص لصفحة معينة" />
				<meta name="keywords" content="كلمات, مفتاحية, هنا" />
			</Helmet>
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<Banner />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<FilterBox />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<CardsSec />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<CalcServices />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
		</div>
	);
}
