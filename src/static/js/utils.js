export function converTimeStamp(utcTimestamp){
    let date = new Date(utcTimestamp);
    let hours = date.getUTCHours();
    let minutes = date.getUTCMinutes();
    // Determine AM/PM
    let period = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; 
    let time12hr = hours + ':' + (minutes < 10 ? '0' + minutes : minutes) + ' ' + period;
    return time12hr
}

export function priorityClass(priority){
    if(priority == "high"){
        return "bg-red-300 text-green-900"
    }
    else if(priority == "medium"){
        return "bg-yellow-400 text-gray-600"
    }
    if(priority == "low"){
        return "bg-gray-200 text-green-900"
    }
}