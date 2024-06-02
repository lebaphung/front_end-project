// Hàm để chuyển đổi số sang định dạng tiền tệ
export const formatCurrency = (number) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(number);
};
