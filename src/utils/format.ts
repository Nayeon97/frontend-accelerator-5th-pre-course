export const formatMoney = (amount: number) => {
  return amount.toLocaleString('ko-KR');
};

export const formatDifference = (amount: number) => {
  const sign = amount >= 0 ? '+' : '';
  return `${sign}${formatMoney(Math.round(amount))}원`;
};

export const extractNumber = (value: string): number => {
  return Number(value.replace(/[^0-9]/g, '')) || 0;
};
