export const formatPrice = price => {
  const priceStr = price.toString()
  const divider = priceStr.length - 3

  return `${priceStr.slice(0, divider)} ${priceStr.slice(divider)}`
}