import { Coordinates, CalculationMethod, Madhab, PrayerTimes, Qibla } from "adhan";

export interface CityInfo {
  slug: string;
  name: string;
  country: string;
  lat: number;
  lng: number;
  timezone: string;
  methodName: string;
  methodDescription: string;
}

export const CITIES_DATA: Record<string, CityInfo> = {
  lahore: {
    slug: "lahore",
    name: "Lahore",
    country: "Pakistan",
    lat: 31.5204,
    lng: 74.3587,
    timezone: "Asia/Karachi",
    methodName: "University of Islamic Sciences, Karachi",
    methodDescription: "University of Islamic Sciences, Karachi (Hanafi Asr juristic calculation)",
  },
  karachi: {
    slug: "karachi",
    name: "Karachi",
    country: "Pakistan",
    lat: 24.8607,
    lng: 67.0011,
    timezone: "Asia/Karachi",
    methodName: "University of Islamic Sciences, Karachi",
    methodDescription: "University of Islamic Sciences, Karachi (Hanafi Asr juristic calculation)",
  },
  islamabad: {
    slug: "islamabad",
    name: "Islamabad",
    country: "Pakistan",
    lat: 33.6844,
    lng: 73.0479,
    timezone: "Asia/Karachi",
    methodName: "University of Islamic Sciences, Karachi",
    methodDescription: "University of Islamic Sciences, Karachi (Hanafi Asr juristic calculation)",
  },
  faisalabad: {
    slug: "faisalabad",
    name: "Faisalabad",
    country: "Pakistan",
    lat: 31.4504,
    lng: 73.135,
    timezone: "Asia/Karachi",
    methodName: "University of Islamic Sciences, Karachi",
    methodDescription: "University of Islamic Sciences, Karachi (Hanafi Asr juristic calculation)",
  },
  rawalpindi: {
    slug: "rawalpindi",
    name: "Rawalpindi",
    country: "Pakistan",
    lat: 33.5651,
    lng: 73.0169,
    timezone: "Asia/Karachi",
    methodName: "University of Islamic Sciences, Karachi",
    methodDescription: "University of Islamic Sciences, Karachi (Hanafi Asr juristic calculation)",
  },
  multan: {
    slug: "multan",
    name: "Multan",
    country: "Pakistan",
    lat: 30.1575,
    lng: 71.5249,
    timezone: "Asia/Karachi",
    methodName: "University of Islamic Sciences, Karachi",
    methodDescription: "University of Islamic Sciences, Karachi (Hanafi Asr juristic calculation)",
  },
  peshawar: {
    slug: "peshawar",
    name: "Peshawar",
    country: "Pakistan",
    lat: 34.0151,
    lng: 71.5249,
    timezone: "Asia/Karachi",
    methodName: "University of Islamic Sciences, Karachi",
    methodDescription: "University of Islamic Sciences, Karachi (Hanafi Asr juristic calculation)",
  },
  quetta: {
    slug: "quetta",
    name: "Quetta",
    country: "Pakistan",
    lat: 30.1798,
    lng: 66.975,
    timezone: "Asia/Karachi",
    methodName: "University of Islamic Sciences, Karachi",
    methodDescription: "University of Islamic Sciences, Karachi (Hanafi Asr juristic calculation)",
  },
  sialkot: {
    slug: "sialkot",
    name: "Sialkot",
    country: "Pakistan",
    lat: 32.4945,
    lng: 74.5229,
    timezone: "Asia/Karachi",
    methodName: "University of Islamic Sciences, Karachi",
    methodDescription: "University of Islamic Sciences, Karachi (Hanafi Asr juristic calculation)",
  },
  gujranwala: {
    slug: "gujranwala",
    name: "Gujranwala",
    country: "Pakistan",
    lat: 32.1877,
    lng: 74.1945,
    timezone: "Asia/Karachi",
    methodName: "University of Islamic Sciences, Karachi",
    methodDescription: "University of Islamic Sciences, Karachi (Hanafi Asr juristic calculation)",
  },
  makkah: {
    slug: "makkah",
    name: "Makkah",
    country: "Saudi Arabia",
    lat: 21.4225,
    lng: 39.8262,
    timezone: "Asia/Riyadh",
    methodName: "Umm al-Qura University",
    methodDescription: "Umm al-Qura University, Makkah al-Mukarramah",
  },
  madinah: {
    slug: "madinah",
    name: "Madinah",
    country: "Saudi Arabia",
    lat: 24.5247,
    lng: 39.5692,
    timezone: "Asia/Riyadh",
    methodName: "Umm al-Qura University",
    methodDescription: "Umm al-Qura University, Madinah al-Munawwarah",
  },
  dubai: {
    slug: "dubai",
    name: "Dubai",
    country: "United Arab Emirates",
    lat: 25.2048,
    lng: 55.2708,
    timezone: "Asia/Dubai",
    methodName: "Dubai Religious Affairs",
    methodDescription: "Dubai Islamic Affairs and Charitable Activities Department (IACAD)",
  },
  london: {
    slug: "london",
    name: "London",
    country: "United Kingdom",
    lat: 51.5074,
    lng: -0.1278,
    timezone: "Europe/London",
    methodName: "London Unified",
    methodDescription: "Unified London Islamic Cultural Centre & Central Mosque",
  },
};

export const CITIES_LIST = Object.values(CITIES_DATA);

export interface PrayerResult {
  city: CityInfo;
  timings24: {
    Fajr: string;
    Sunrise: string;
    Dhuhr: string;
    Asr: string;
    Sunset: string;
    Maghrib: string;
    Isha: string;
  };
  timings12: {
    Fajr: string;
    Sunrise: string;
    Dhuhr: string;
    Asr: string;
    Sunset: string;
    Maghrib: string;
    Isha: string;
  };
  qibla: number;
}

function format24H(date: Date, timezone: string): string {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: timezone,
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).format(date);
  return parts;
}

function format12H(date: Date, timezone: string): string {
  return new Intl.DateTimeFormat("en-US", {
    timeZone: timezone,
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  }).format(date);
}

export function getPrayerTimesForCity(cityKey: string, date: Date = new Date()): PrayerResult {
  const city = CITIES_DATA[cityKey.toLowerCase()] || CITIES_DATA.lahore;
  const coordinates = new Coordinates(city.lat, city.lng);

  let params = CalculationMethod.Karachi();
  if (city.slug === "makkah" || city.slug === "madinah") {
    params = CalculationMethod.UmmAlQura();
  } else if (city.slug === "dubai") {
    params = CalculationMethod.Dubai();
  } else if (city.slug === "london") {
    params = CalculationMethod.MuslimWorldLeague();
  }

  if (city.country === "Pakistan") {
    params.madhab = Madhab.Hanafi;
  }

  const prayerTimes = new PrayerTimes(coordinates, date, params);
  const qibla = Math.round(Qibla(coordinates));

  const timings24 = {
    Fajr: format24H(prayerTimes.fajr, city.timezone),
    Sunrise: format24H(prayerTimes.sunrise, city.timezone),
    Dhuhr: format24H(prayerTimes.dhuhr, city.timezone),
    Asr: format24H(prayerTimes.asr, city.timezone),
    Sunset: format24H(prayerTimes.maghrib, city.timezone),
    Maghrib: format24H(prayerTimes.maghrib, city.timezone),
    Isha: format24H(prayerTimes.isha, city.timezone),
  };

  const timings12 = {
    Fajr: format12H(prayerTimes.fajr, city.timezone),
    Sunrise: format12H(prayerTimes.sunrise, city.timezone),
    Dhuhr: format12H(prayerTimes.dhuhr, city.timezone),
    Asr: format12H(prayerTimes.asr, city.timezone),
    Sunset: format12H(prayerTimes.maghrib, city.timezone),
    Maghrib: format12H(prayerTimes.maghrib, city.timezone),
    Isha: format12H(prayerTimes.isha, city.timezone),
  };

  return {
    city,
    timings24,
    timings12,
    qibla,
  };
}
