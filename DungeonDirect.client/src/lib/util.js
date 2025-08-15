export function currencyFormat(amount) {
  return "$" + (amount / 100).toFixed(2);
}

export function filterEmptyValues(values) {
  return Object.fromEntries(
    Object.entries(values).filter(([, value]) => {
      if (value === "" || value == null) return false;
      if (Array.isArray(value) && value.length === 0) return false;
      return true;
    })
  );
}

export const formatAddressString = (address) => {
  return `${address?.name}, ${address?.line1}, ${address?.city}, ${address?.state}, ${address?.postal_code}, ${address?.country}`;
};

export const formatPaymentString = (card) => {
  return `${card?.brand?.toUpperCase()}, **** **** **** ${card?.last4}, Exp: ${card?.exp_month}/${card?.exp_year}`;
};

export function handleApiError(error, setError, fieldNames) {
  const apiError = error || {};
  const message = typeof apiError.message === "string" ? apiError.message : "";

  if (!message) return;

  const errorArray = message.split(",");
  errorArray.forEach((e) => {
    const lower = e.toLowerCase();
    const matchedField = fieldNames.find((fieldName) =>
      lower.includes(String(fieldName).toLowerCase())
    );
    if (matchedField) setError(matchedField, { message: e.trim() });
  });
}