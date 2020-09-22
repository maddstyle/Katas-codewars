const trash = [{
        name: 'Pizza Box',
        material: 'paper',
        dirty: true
    },
    {
        name: 'Coke Can',
        material: 'metal',
        dirty: false
    },
    {
        name: 'Plastic Bag',
        material: 'plastic',
        dirty: false
    },
    {
        name: 'Moldy Food',
        material: 'generic',
        dirty: true
    },
    {
        name: 'Cardboard',
        material: 'paper',
        dirty: false
    },
    {
        name: 'Detergent Container',
        material: 'plastic',
        dirty: false
    },
    {
        name: 'Wine Bottle',
        material: 'glass',
        dirty: false
    },
    {
        name: 'Pickle Jar',
        material: 'glass',
        dirty: false
    },
    {
        name: 'Newspaper',
        material: 'paper',
        dirty: false
    },
    {
        name: 'Magazine',
        material: 'paper',
        dirty: false
    },
    {
        name: 'Tree Leaves',
        material: 'generic',
        dirty: false
    },
    {
        name: 'Beer Bottle',
        material: 'glass',
        dirty: false
    },
    {
        name: 'Beer Bottle',
        material: 'paper',
        dirty: false
    },
    {
        name: 'Tuna Can',
        material: 'metal',
        dirty: true
    },
    {
        name: 'Sausage Can',
        material: 'metal',
        dirty: false
    },
    {
        name: 'Milk Carton',
        material: 'plastic',
        dirty: false
    },
    {
        name: 'Cereal Box',
        material: 'paper',
        dirty: false
    },
    {
        name: 'Juice Pack',
        material: 'plastic',
        dirty: false
    },
    {
        name: 'Cut Grass',
        material: 'generic',
        dirty: false
    },
    {
        name: 'Water Bottle',
        material: 'plastic',
        dirty: false
    }
];

// for every material there is color of the bin
const binColorMap = {
    paper: 'blue',
    plastic: 'yellow',
    metal: 'yellow',
    glass: 'green',
    generic: 'black'
};

// arrays of objects will help to get the right item
const trashBins = {
    blue: [],
    yellow: [],
    green: [],
    black: []
};
/*
let abc = 'paper';
console.log(binColorMap[abc]);
*/
for (let item of trash) {
    let color = binColorMap[item.material];
    //console.log(color);
    if (item.dirty === false) {
        trashBins[color].push(item.name);
    } else {
        trashBins.black.push(item.name);
    }
    return trashBins();
}
//trashBins({});


//console.log(trashBins);
/*
{ blue:
   [ 'Cardboard',
     'Newspaper',
     'Magazine',
     'Beer Bottle',
     'Cereal Box' ],
  yellow:
   [ 'Coke Can',
     'Plastic Bag',
     'Detergent Container',
     'Sausage Can',
     'Milk Carton',
     'Juice Pack',
     'Water Bottle' ],
  green: [ 'Wine Bottle', 'Pickle Jar', 'Beer Bottle' ],
  black:
   [ 'Pizza Box',
     'Moldy Food',
     'Tree Leaves',
     'Tuna Can',
     'Cut Grass' ] 
}
*/