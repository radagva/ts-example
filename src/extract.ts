type CountryISOCodes = "VE" | "CO" | "CL" | "UY" | "CA" | "USA";
type NonLAContryISOCodes = Extract<CountryISOCodes, "CA" | "USA" | "FR">;

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

type AvailablePaymentMethods = Extract<
  PaymentMethods,
  { config: { publishableKey: string } }
>;
