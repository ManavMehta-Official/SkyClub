/* --------------------- ADDS COMMA TO THE TICKET PRICE --------------------- */
export function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

/* ------------------ CONVERTS SECONDS INTO HOURS & MINUTES ----------------- */
 export function secondsToHoursMinutes(x) {
    var rawHours = x/3600;
    var hours = Math.trunc(rawHours);
    var decHours = x/3600 - hours;
    var minutes = Math.trunc(decHours * 60);
    return `${hours}h ${minutes}m`
}

/* --------------------- OPENS BOOKING LINK IN NEW TAB ---------------------- */
export function openInNewTab(url) {
    window.open(url, '_blank', 'noopener,noreferrer');
}

/* ---------------------------- DYNAMIC TAB TITLE --------------------------- */
export function tabTitle(newTitle) {
    return (document.title = newTitle);
}