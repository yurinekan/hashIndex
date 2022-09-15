class Page {
  constructor(first, last, table) {
    this.content = [];
    this.first = first;
    this.last = last;

    for (let j = first; j < last; j++) {
      if (table[j])
        this.content.push(table[j].replace("\r", ""));
    }
  }

  searchString(str) {
    console.log(`buscando ${str} na página...`)
    for (i = 0; i < this.content.length; i++)
      if (this.content[i] == str) console.log(`${str} encontrada no índice ${i}`)
  }
}
