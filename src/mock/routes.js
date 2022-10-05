import FlightSearch from "../Pages/flights-search-page";
import HotelsPage from "../Pages/hotels-page";
import StartPage from "../Pages/start-page";

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
  }
]