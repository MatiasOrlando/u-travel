export interface Activity {
  name: string;
  type: string;
  interests: string[];
  ageRange: string;
  budget: string;
  groupType: string;
}

export interface CityItinerary {
  city: string;
  cityImage?: string;
  activities: Activity[];
}

export interface CountryItinerary {
  country: string;
  countryImage: string;
  countryCartoon?: string;
  itinerary: CityItinerary[];
}

export interface TravelItineraries {
  travelItineraries: CountryItinerary[];
}
