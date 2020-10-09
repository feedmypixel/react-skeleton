function transformCatFacts(data) {
  if (data) {
    const { text: catFacts } = data;
    return catFacts;
  }
}

export default transformCatFacts;
