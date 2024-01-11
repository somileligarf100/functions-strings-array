let marks_class_12=[91,82,63,84]
console.log(marks_class_12[0])
console.log(marks_class_12[1])
console.log(marks_class_12[2])
console.log(marks_class_12[3])
marks_class_12[4]=89
marks_class_12[0]=96

console.log(marks_class_12)

let num = [1,2,3,34,4]
let num2 = [11,22,78,89,95]
console.log(num.toString())
console.log(num.join("_"))
console.log(num.pop())
console.log(num, num.push(56))
console.log(num.shift())
console.log(num, num.unshift(78))
delete num[0]
console.log(num)
console.log(num.length)
console.log(num.concat(num2))
console.log(num.sort())
let compare = (a,b) =>{
return b-a
}
console.log(num.sort(compare))
console.log(num.reverse())
let num1 = [178,289,456,280,356]
console.log(num1.splice(2,2,480,481,500))
console.log(num1)
newnum=num1.slice(3)
console.log(newnum)

let num3=[3,54,1,2,4]
for(let i=0;i<num3.length;i++){
    console.log(num3[i])
}
num3.forEach((element)=>{
console.log(element*element)
})

let name1="Harry"
let arr=Array.from(name1)
console.log(arr)

for(let i of num3){
    console.log(i)
}
for(let item in num3){
    console.log(num3[item])
}

let a =[45,23,21]
let b=a.map((value, index, array)=>{
    console.log(value, index, array)
    return value + index
})
console.log(b)
let arr2=[45,23,21,0,3,5]
let a2=arr2.filter((x)=>{
    return x<10
})
console.log(a2)

let arr3=[1,2,3,5,2,1]
let newarr3=arr3.reduce((h1,h2)=>{
return h1+h2
})
console.log(newarr3)
