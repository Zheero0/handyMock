// utils/bookmarkManager.js
let bookmarks = [];

export const saveBookmark = (jobId) => {
  if (!bookmarks.includes(jobId)) {
    bookmarks.push(jobId);
  }
};

export const removeBookmark = (jobId) => {
  bookmarks = bookmarks.filter((id) => id !== jobId);
};

export const getBookmarks = () => {
  return bookmarks;
};

export const isBookmarked = (jobId) => {
  return bookmarks.includes(jobId);
};
