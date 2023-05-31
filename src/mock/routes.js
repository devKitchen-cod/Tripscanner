import AdminProfileLayout from "../Common/admin-profile-layout";
import FlightSearch from "../Pages/flights-search-page";
import HotelsPage from "../Pages/hotels-page";
import StartPage from "../Pages/flights-page";

export const routes = [
  {
    path: '/',
    element: <StartPage/>  
  },
  {
    path:'/hotels',
    element: <HotelsPage/>
  },
  {
    path: '/flight-search',
    element: <FlightSearch/>
  },
  {
    path: '/admin-profile',
    element: <AdminProfileLayout/>
  },
]