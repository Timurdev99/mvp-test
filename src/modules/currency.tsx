export const numberToUSDCurrency = (price: number): string => {
  const dollarUsLocale = Intl.NumberFormat("en-US")
  return dollarUsLocale.format(price)
}
