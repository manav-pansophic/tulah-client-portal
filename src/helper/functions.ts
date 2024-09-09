// Convert UTC to readale date format
export const convertUTCToDate = (utcDate) => {
    const date = new Date(utcDate);
    const year = date.getUTCFullYear();
    const month = String(date.getUTCMonth() + 1).padStart(2, '0'); 
    const day = String(date.getUTCDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

// Get First Name and Last Name for the Select dropdown
export const  createGuestSelectOptions = (data) => {
    return data
        .filter(item => item.firstName && item.lastName)
        .map(item => ({
            label: `${item.firstName} ${item.lastName}`, 
            value: item._id 
        }));
}

// GST Calculator
export const  calculateGST = (amount : any) => {
    const gstRate = 0.18; // GST rate of 18%
    const gstAmount = amount * gstRate;
    return gstAmount;
}