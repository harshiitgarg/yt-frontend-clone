export const PublishedTimeOfVideo = ({ publishedAt }) => {
  const publishedDate = new Date(publishedAt);
  const currentDate = new Date();
  const yearsDifference =
    currentDate.getFullYear() - publishedDate.getFullYear();
  const monthsDifference = currentDate.getMonth() - publishedDate.getMonth();
  const daysDifference = currentDate.getDate() - publishedDate.getDate();
  const hoursDifference = currentDate.getHours() - publishedDate.getHours();

  if (yearsDifference > 0) {
    return yearsDifference + " years ago";
  } else if (monthsDifference < 0) {
    return 12 + monthsDifference + " months ago";
  } else if (monthsDifference > 0) {
    return monthsDifference + " months ago";
  } else if (daysDifference === 0) {
    // return "Today";
    if (hoursDifference === 0) {
      return "Just now";
    } else {
      return hoursDifference + " hours ago";
    }
  } else if (daysDifference === 1) {
    return "1 day ago";
  } else {
    return daysDifference + " days ago";
  }
};
