/**
 * @param {Date | string} timestamp
 */
function formatDate(timestamp) {
    return new Date(timestamp).toLocaleDateString();
  }
  
  export default formatDate;
  