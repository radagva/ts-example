type CountryISOCodes = "VE" | "CO" | "CL" | "UY" | "CA" | "USA";
type LACountryISOCodes = Exclude<CountryISOCodes, "CA" | "USA">;

type PaymentMethods =
  | {
      name: "paypal";
      config: { apiKey: string };
    }
  | {
      name: "stripe";
      config: { publishableKey: string };
    }
  | {
      name: "binance";
      config: { bncKey: string };
    }
  | {
      name: "revenuecat";
      config: { publishableKey: string };
    };

type AvailablePaymentMethods = Exclude<
  PaymentMethods,
  { name: "paypal" } | { config: { publishableKey: string } }
>;
