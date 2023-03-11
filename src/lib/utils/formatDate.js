/**
 * @param {string | number | Date} timestamp
 */
function formatDate(timestamp) {
    const date = new Date(timestamp);
    return date.toLocaleDateString();
  }
  
  export default formatDate;
  