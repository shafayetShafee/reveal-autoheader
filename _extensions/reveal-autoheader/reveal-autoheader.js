function AutoHeader() {
  const slevel = document.querySelector('[data-slevel]')?.getAttribute('data-slevel');
  const selectorString = `section.slide.level${slevel}`;
  const nodeList = document.querySelectorAll(selectorString);
  
  const hnames = Array.from(nodeList, node => node.getAttribute('data-hname'));
  
  let lastValue = null;

  const filledHnames = hnames.map(value => {
    if (value !== null) {
      lastValue = value;
      return value;
    }
    return lastValue;
  });
  

  let ids = [];
  let idCounts = {};

  filledHnames.forEach(item => {
    if (item === null) {
      ids.push(null);
    } else {
      const lowerItem = item.toLowerCase();
      
      if (!idCounts[lowerItem]) {
        idCounts[lowerItem] = 0;
      }
      
      idCounts[lowerItem]++;
      ids.push(`${lowerItem}${idCounts[lowerItem]}`);
    }
  });


  nodeList.forEach((node, index) => {
    const hname = node.getAttribute('data-hname');

    if (!hname) {
      const id = ids[index];
      if(!node.id) {
        node.id = id;
      }
      const hlevel = `h${slevel}`;
      const h2 = document.createElement(hlevel);
      h2.textContent = filledHnames[index]; 
      node.insertBefore(h2, node.firstChild); 
    }
  });
};


window.addEventListener("load", (event) => {
  AutoHeader();
});
