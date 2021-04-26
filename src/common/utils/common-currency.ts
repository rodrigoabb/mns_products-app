// Full List on -> https://gist.github.com/Fluidbyte/2973986

interface ICurrency {
  symbol: string
  name: string
  symbol_native: string,
  decimal_digits: number,
  rounding: number,
  code: string,
  name_plural: string,
};

interface ICurrencyObject {
  [key: string]: ICurrency,
};

export const COMMON_CURRENCIES: ICurrencyObject =
{
  GBP: {
		symbol: "£",
		name: "British Pound Sterling",
		symbol_native: "£",
		decimal_digits: 2,
		rounding: 0,
		code: "GBP",
		name_plural: "British pounds sterling",
	},
  EUR: {
		symbol: "€",
		name: "Euro",
		symbol_native: "€",
		decimal_digits: 2,
		rounding: 0,
		code: "EUR",
		name_plural: "euros",
	},
  ARS: {
		symbol: "AR$",
		name: "Argentine Peso",
		symbol_native: "$",
		decimal_digits: 2,
		rounding: 0,
		code: "ARS",
		name_plural: "Argentine pesos",
	},
	USD: {
		symbol: "$",
		name: "US Dollar",
		symbol_native: "$",
		decimal_digits: 2,
		rounding: 0,
		code: "USD",
		name_plural: "US dollars",
	},
	CAD: {
		symbol: "CA$",
		name: "Canadian Dollar",
		symbol_native: "$",
		decimal_digits: 2,
		rounding: 0,
		code: "CAD",
		name_plural: "Canadian dollars",
	},
}
