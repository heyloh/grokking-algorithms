export function binarySearch(list: number[], search: number) {
  let high = list.length - 1
  let low = 0

  while(low <= high) {
    const mid = Math.floor((high + low) / 2)
    const guess = list[mid]

    if (guess == search) return mid

    if (guess > search) {
      high = mid - 1
      continue
    }

    low = mid + 1
  }

  return null
}
