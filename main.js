function sumOfTwoNumbers(numero1, numero2) {
  return console.log(numero1 + numero2)
}
sumOfTwoNumbers(2, 3)

function differenceOfTwoNumbers(numero1, numero2) {
  return console.log(numero1 - numero2)
}
differenceOfTwoNumbers(2, 3)

function multiplicationOfTwoNumbers(numero1, numero2) {
  return console.log(numero1 * numero2)
}
multiplicationOfTwoNumbers(2, 3)

function divisionOfTwoNumbers(numero1, numero2) {
  return console.log(numero1 / numero2)
}
divisionOfTwoNumbers(2, 3)

function modOfTwoNumbers(numero1, numero2) {
  return console.log(numero1 % numero2)
}
modOfTwoNumbers(2, 3)

function isEven(numero1, numero2) {
  let sum = numero1 + numero2
  return sum % 2 === 0 ? console.log("Par") : console.log("Ímpar")
}
isEven(2, 2)

function isEqual(numero1, numero2) {
  return numero1 === numero2 ? console.log("Iguais") : console.log("Diferentes")
}
isEqual(2, 2)
