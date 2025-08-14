export default function currencyFormat(amount) {
    return '$' + (amount / 100).toFixed(2)
}