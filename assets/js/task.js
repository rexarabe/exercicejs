/*
let array1;

array1 = [10,20,30,40,50,60,70];
let i , n;
n = array1.length;
for (i=0; i<n; i +=2){
    console.log(array1[i]);
}
*/


let a = [30, 30 , 40 , 40 ,0, 0 ,0, 0, 0, 0, 87 , 84 , 85, 439 , 1, 0, 0 , 0 , 0  ];
/*
console.log(a.length);
let i;
for (i = 0; i < a.length; i++){
    console.log(a[i]);
}

//вывети все отрицательные элементы
for (i = 0; i < a.length; i++)
{
    if (a[i] < 0){
        console.log('Element',a[i], 'and index= ', i);
    }
}

//ввести все нули
let countOfZeros = 0;
console.log('ввести все нули и их количество');
for (i = 0; i < a.length; i++){
    if (a[i] == 0){
        countOfZeros++;
        console.log('index of zero', i)
    }
}
console.log('Count of zeros is', countOfZeros);

*/

// Задача 1. найти сумму отрицательных элементов массива
// Задача 2. заменить все нулевые элементы на 100

// Задача 3. если элемент массива отрицальтельный умножить его на 2, и наче поделить на 3

// Задача 4. найти максимальную сумму в параъ соседних элементов
// 2 7 3 9 0 1

//task1
console.log(`-------------------`);
let sumNegElemArray = 0;
for (i =0; i<a.length; i++){
    if (a[i]< 0)
    {
        sumNegElemArray += a[i];
    }
}
console.log(`Sum of negative elmeent of array is ${sumNegElemArray}`);


//task2
console.log('--------------');
for(i=0; i<a.length; i++){
    if(a[i]==0){
        a[i]=100;
        //console.log(a[i]);
    }
}
//task3
console.log(`----------`);
for(i=0; i<a.length; i++){
    if(a<0){
        a[i] *=2;
    }
    else{
        a[i] /=3;
    }
}
console.log(a);
console.log(`----------`);