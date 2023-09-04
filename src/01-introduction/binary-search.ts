export function binarySearch(list: number[], search: number) {
  let high = list.length - 1
  let low = 0
  let steps = 0

  while(low <= high) {
    steps += 1

    const mid = Math.floor((high + low) / 2)
    const guess = list[mid]

    if (guess == search) return { position: mid, steps }

    if (guess > search) {
      high = mid - 1
      continue
    }

    low = mid + 1
  }

  return { position: null, steps }
}
