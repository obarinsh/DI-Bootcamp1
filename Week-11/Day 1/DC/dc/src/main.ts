

const validateUnionType = (value: any, allowedTypes: string[]): boolean => {
  const typeOfValue = typeof value
  return allowedTypes.includes(typeOfValue)
}

console.log(validateUnionType(3, ['string', 'object']))
console.log(validateUnionType('olga', ['string', 'object']))
console.log(validateUnionType(['olga'], ['string', 'object']))