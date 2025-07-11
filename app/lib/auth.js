export function registerUser(username, password) {
  if (!username || !password) return false;

  const key = `user_${username}`;
  if (localStorage.getItem(key)) return false;

  localStorage.setItem(key, password);
  return true;
}

export function loginUser(username, password) {
  const key = `user_${username}`;
  const stored = localStorage.getItem(key);
  return stored === password;
}
