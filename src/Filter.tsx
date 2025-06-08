function Filter(contaminated: string[], contaminants: string[]): string[] {
  let filtered: string[] = contaminated.filter(
    (contaminant) => !contaminants.includes(contaminant),
  );

  return filtered;
}

export default Filter;
