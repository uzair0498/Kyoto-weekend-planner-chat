export type StayCard = {
  cardType: "stay";
  details: {
    destination: string;
    listingTitle: string;
    checkIn: string;
    checkOut: string;
    nights: string;
    nightlyPriceUsd: string;
    highlight: string;
  };
};

export type ExperienceCard = {
  cardType: "experience";
  details: {
    activityName: string;
    dayPlan: {
      day: string;
      duration: string;
      "priceperguest(USD)": string;
    }[];
  };
};

export type FoodCard = {
  cardType: "food";
  details: {
    restaurantName: string;
    mealType: string;
    priceRange: string;
    estcostfor2USD: string;
  };
};

export type TripCard = StayCard | ExperienceCard | FoodCard;

export const mockResponse: TripCard[] = [
  {
    cardType: "stay",
    details: {
      destination: "Gion, Kyoto",
      listingTitle: "Restored machiya townhouse near Gion",
      checkIn: "2025-04-11",
      checkOut: "2025-04-13",
      nights: "2",
      nightlyPriceUsd: "168",
      highlight: "Private garden and cedar soaking tub",
    },
  },
  {
    cardType: "experience",
    details: {
      activityName: "Tea ceremony in a 100-year-old machiya",
      dayPlan: [
        {
          day: "2025-04-12",
          duration: "2 hours",
          "priceperguest(USD)": "58",
        },
      ],
    },
  },
  {
    cardType: "food",
    details: {
      restaurantName: "Menya Inoichi",
      mealType: "Dinner",
      priceRange: "$",
      estcostfor2USD: "34",
    },
  },
];
