// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
const drivers1 = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

  function findMatching(array, name){
    if ((Match) => Match.toLowerCase() === name.toLowerCase()){
    return array.filter((Match) => Match.toLowerCase() === name.toLowerCase());
    }
  }

  function fuzzyMatch(array, string){
    if ((Match) => Match.toLowerCase().indexOf(string.toLowerCase()) === 0){
    return array.filter((Match) => Match.toLowerCase().indexOf(string.toLowerCase()) === 0);
    }
  }

  function matchName(array, name) {
    return array.filter((Match) => Match.name === name);
  }