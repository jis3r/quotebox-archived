function formatDate(timestamp) {
    const date = new Date(timestamp * 1000);
    const dateString = date.toLocaleDateString();
    //const timeString = date.toLocaleTimeString();
    return `${dateString}`;
}

export default formatDate;