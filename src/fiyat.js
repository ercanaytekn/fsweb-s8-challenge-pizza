export function fiyatYaz(sayi) {
  if (sayi % 1 === 0) {
    return sayi + '.00'
  }
  return sayi + '0'
}