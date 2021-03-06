//Grid templates with various game of life applications

const gliderGun = [
    [10,16],
    [11,16],
    [11,17],
    [10,17],
    [10,26],
    [11,26],
    [12,26],
    [13,27],
    [14,28],
    [14,29],
    [13,31],
    [12,32],
    [11,32],
    [10,32],
    [11,33],
    [11,30],
    [9,31],
    [8,29],
    [8,28],
    [9,27],
    [10,36],
    [10,37],
    [9,37],
    [9,36],
    [8,36],
    [8,37],
    [7,38],
    [11,38],
    [11,40],
    [12,40],
    [7,40],
    [6,40],
    [8,50],
    [9,50],
    [9,51],
    [8,51],
];
const oscillators = [
    [5,10],
    [5,11],
    [5,12],
    [5,23],
    [6,23],
    [7,24],
    [6,26],
    [5,26],
    [4,25],
    [11,10],
    [11,11],
    [12,11],
    [12,10],
    [13,12],
    [14,12],
    [14,13],
    [13,13],
    [24,5],
    [24,6],
    [24,7],
    [26,8],
    [27,8],
    [28,8],
    [29,7],
    [29,6],
    [29,5],
    [28,3],
    [27,3],
    [26,3],
    [28,10],
    [27,10],
    [26,10],
    [24,11],
    [24,12],
    [24,13],
    [26,15],
    [27,15],
    [28,15],
    [29,13],
    [29,12],
    [29,11],
    [31,11],
    [31,12],
    [31,13],
    [32,10],
    [33,10],
    [34,10],
    [36,11],
    [36,12],
    [36,13],
    [34,15],
    [33,15],
    [32,15],
    [34,8],
    [33,8],
    [32,8],
    [31,6],
    [31,7],
    [31,5],
    [36,7],
    [36,6],
    [36,5],
    [34,3],
    [33,3],
    [32,3],
    [25,28],
    [25,27],
    [25,26],
    [26,25],
    [27,25],
    [28,26],
    [28,27],
    [28,28],
    [27,29],
    [26,29],
    [33,28],
    [33,27],
    [33,26],
    [34,25],
    [35,25],
    [36,26],
    [36,27],
    [36,28],
    [35,29],
    [34,29],
    


    [3,48],
    [3,49],
    [4,47],
    [5,46],
    [6,45],
    [7,45],
    [8,46],
    [9,47],
    [10,48],
    [10,49],
    [9,50],
    [8,51],
    [7,52],
    [6,52],
    [5,51],
    [4,50],
    [18,52],
    [18,53],
    [20,52],
    [20,51],
    [21,50],
    [22,51],
    [22,52],
    [22,53],
    [21,53],
    [21,54],
    [22,54],
    [22,55],
    [21,55],
    [20,55],
    [19,56],
    [20,57],
    [21,57],
    [22,56],
    [23,56],
    [24,56],
    [24,57],
    [25,58],
    [26,57],
    [26,56],
    [25,55],
    [25,54],
    [25,53],
    [26,53],
    [27,52],
    [26,51],
    [25,51],
    [24,52],
    [23,52],
    [23,53],
    [24,53],
    [24,55],
    [23,55],
    [24,54],
    [28,56],
    [28,55],
    [25,49],
    [24,49],
    [21,59],
    [22,59],
    [34,55],
    [34,56],
    [35,56],
    [35,55],
    [37,56],
    [37,55],
    [37,54],
    [37,53],
    [38,57],
    [39,57],
    [40,57],
    [41,57],
    [42,56],
    [42,55],
    [42,54],
    [42,53],
    [41,52],
    [40,52],
    [39,52],
    [38,52],
    [40,59],
    [41,59],
    [41,60],
    [40,60],
    [44,53],

    [44,54],
    [45,54],
    [45,53],
    [38,50],
    [39,50],
    [39,49],
    [38,49],
    [39,54],
    [39,55],
    [40,56],

    
];

const spaceships = [
    [45,7],
    [45,8],
    [45,9],
    [44,10],
    [44,11],
    [45,12],
    [45,13],
    [45,14],
    [43,9],
    [43,10],
    [43,11],
    [43,12],
    [42,14],
    [43,15],
    [41,15],
    [41,16],
    [40,16],
    [41,17],
    [40,18],
    [39,18],
    [38,19],
    [37,18],
    [36,17],
    [37,16],
    [38,15],
    [39,15],
    [41,11],
    [41,10],
    [40,10],
    [40,11],
    [42,7],
    [43,6],
    [41,6],
    [41,5],
    [41,4],
    [40,5],
    [40,3],
    [39,3],
    [39,6],
    [38,6],
    [37,5],
    [36,4],
    [37,3],
    [38,2],
   


    [45,30],
    [45,31],
    [44,31],
    [44,30],
    [40,30],
    [40,29],
    [41,29],
    [40,31],
    [40,32],
    [41,32],
    [39,31],
    [39,30],
    [41,34],
    [40,34],
    [39,34],
    [41,27],
    [40,27],
    [39,27],
    [36,30],
    [36,31],
    [36,32],
    [36,29],
    [36,28],
    [36,33],
    [35,29],
    [34,29],
    [34,30],
    [34,31],
    [34,32],
    [35,32],
    
    
    [46,48],
    [46,49],
    [45,49],
    [45,48],
    [44,49],
    [43,49],
    [42,49],
    [41,50],
    [40,50],
    [40,49],
    [45,47],
    [44,47],
    [43,47],
    [42,47],
    [45,46],
    [44,46],
    [39,51],
    [39,52],
    [38,52],
    [38,51],
    [37,51],
    [37,52],
    [36,50],
    [37,49],
    [38,49],
    [38,48],
    [37,48],
    [37,54],
    [38,54],
    [39,54],
    

    [39,55],
    [38,55],
    [37,55],
    [36,56],
    [37,57],
    [38,57],
    [38,58],
    [37,58],
    [40,56],
    [41,56],
    [40,57],
    [42,57],
    [43,57],
    [44,57],
    [45,57],
    [46,57],
    [46,58],
    [45,58],
    [45,59],
    [45,60],
    [44,60],
    [44,59],
    [43,59],
    [42,59],

    [41,60],
    [40,60],
    [41,46],
    [40,46],
];

export {spaceships, oscillators, gliderGun}