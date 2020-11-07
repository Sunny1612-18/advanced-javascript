const students=[
    {id: 11, name:'sunny'},
    {id: 12, name:'misu'},
    {id: 13, name:'messi'},
    {id: 14, name:'ron'},
];
const names=students.map(s =>s.name);
const ids=students.map(s=>s.id);
const bigger=students.filter(s=>s.id>40);
const biggerone=students.find(s=>s.id>40);

console.log(biggerone);