const fetchServerData = (): Promise<{ data: string }> => {
  return new Promise((res) => setTimeout(() => res({
    data: 'Hello! 👋',
  }), 500));
}

export { fetchServerData }
