export class DateUtil {
    // Format dates to "YYYY-MM-DD"
    static formatDate = (date: Date) => {
      const year = date.getFullYear();
      const month = (date.getMonth() + 1).toString().padStart(2, '0'); // months are zero-based
      const day = date.getDate().toString().padStart(2, '0');
      return `${year}-${month}-${day}`;
    };
}