import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayOut from "./Components/MainLayOut.jsx";
import Home from "./Components/Home/home.jsx";
import Doctors from "./Pages/doctors.jsx";
import { Provider } from "react-redux";
import { store } from "../RTK/store.js";
import Services from "./Pages/Services/Services.jsx";
import "./i18n";
import Activity from "./Pages/Activities/Activity.jsx";
const router = createBrowserRouter([
	{
		path: "/",
		element: <MainLayOut />,
		children: [
			{ path: "/", element: <Home /> },
			{ path: "/services", element: <Services /> },
			{ path: "/doctors", element: <Doctors /> },
			{ path: "/activity", element: <Activity /> },
		],
	},
]);

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	</StrictMode>
);
