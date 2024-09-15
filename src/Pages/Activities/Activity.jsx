import Doctors_Card from "../../Components/DoctorCard/Doctors_Card";
import Pic from "../../assets/doctor2-removebg-preview.png";
import Order from "./Order";
export default function Activity() {
	const Item = {
		name: "Dr. Ahmed",
		speciality: "Dentist",
		image: Pic,
		rank: "5.0",
	};

	return (
		<div className="w-full min-h-[100vh] lg:mt-[100px] p-4">
			<div className="p-3 mb-3 ">
				<h1 className="font-bold text-[18px] ">
					Welcome , <span className="text-[#00ACA8]">Muhammed Ahmed</span>
				</h1>
			</div>

			<div className="p-3 mt-10 flex flex-col gap-5">
				<h1
					className="font-bold text-[24px]   ml-10 
        "
				>
					My Appointments
				</h1>
				<div className="flex flex-wrap gap-2 w-3/4">
					<Doctors_Card
						Item={Item}
						Type={"Order"}
						TimeArray={[
							{
								time: "10:00 AM",
								date: "10/10/2022",
								City: "123 Wellness Ave, Suite 200",
							},
						]}
					/>
					<Doctors_Card
						Item={Item}
						Type={"Order"}
						TimeArray={[
							{
								time: "10:00 AM",
								date: "10/10/2022",
								City: "123 Wellness Ave, Suite 200",
							},
						]}
					/>
					<Doctors_Card
						Item={Item}
						Type={"Order"}
						TimeArray={[
							{
								time: "10:00 AM",
								date: "10/10/2022",
								City: "123 Wellness Ave, Suite 200",
							},
						]}
					/>
					<Doctors_Card
						Item={Item}
						Type={"Order"}
						TimeArray={[
							{
								time: "10:00 AM",
								date: "10/10/2022",
								City: "123 Wellness Ave, Suite 200",
							},
						]}
					/>
				</div>
			</div>
			<Order/>
		</div>
	);
}
