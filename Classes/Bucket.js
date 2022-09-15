class Bucket {
  constructor(size, index) {
    this.content = [];
    this.size = size;
    this.next = null;
    this.index = index;
  }

  addTuple(string, pageIndex) {
    if (this.content.length < this.size)
      this.content.push(new Tuple(string, pageIndex));
    else {
      colisions++;
      if (this.next == null) {
        this.next = new Bucket(this.size, this.index);
        overflows++;
      }
      this.next.addTuple(string, pageIndex);
    }
  }

  isFull() {
    return this.content.length >= this.size
  }

  searchString(string, access = 0) {
    this.content.forEach((tuple) => {
      access++
      if (tuple.content == string) {

        document.getElementById('results').innerHTML = `Tupla encontrada no bucket ${this.index}\n 
        com ${access} acesso(s) à memória \n
        apontando para a página ${tuple.index}`
        
        pages[tuple.index].searchString(tuple.content)
      }
    });
    if (this.next != null) return this.next.searchString(string, access);
  }
}
