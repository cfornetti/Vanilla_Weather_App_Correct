function formatDate (timestamp){
    let date = new Date (timestamp);
    
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday","Friday","Saturday"];
    let day = days[date.getDay()];
    return `${day} ${formatHours(timestamp)}`;
}
