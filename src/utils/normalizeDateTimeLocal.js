export default function (date) {
    if(!date) return;
    const now = new Date(date);
    now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
    return now.toISOString().slice(0, -1);
}