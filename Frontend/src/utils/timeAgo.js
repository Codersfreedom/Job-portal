export default function timeAgo(createdAt) {
    const now = new Date();
    const createdDate = new Date(createdAt);
  
    const secondsAgo = Math.floor((now - createdDate) / 1000);
    const minutesAgo = Math.floor(secondsAgo / 60);
    const hoursAgo = Math.floor(minutesAgo / 60);
    const daysAgo = Math.floor(hoursAgo / 24);
    const weeksAgo = Math.floor(daysAgo / 7);
  
    if (secondsAgo < 60) return `${secondsAgo}s ago`;
    if (minutesAgo < 60) return `${minutesAgo}m ago`;
    if (hoursAgo < 24) return `${hoursAgo}h ago`;
    if (daysAgo < 7) return `${daysAgo}d ago`;
    return `${weeksAgo}w ago`;
  }