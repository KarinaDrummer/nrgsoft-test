export function addPost(post) {
  return { type: 'ADD_POST', post }
}

export function removePost(post) {
  return { type: 'REMOVE_POST', post }
}
