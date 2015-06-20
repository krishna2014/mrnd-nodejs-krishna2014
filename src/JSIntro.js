
exports.Sum = function(num1, num2){
return (num1+num2);
}

exports.SumOfArray = function(arrayOfNums){
var i=0,sum=0;
for(i=0;i<arrayOfNums.length;i++)
sum=sum+arrayOfNums[i];
return sum;

}

// Sum only the unique numbers in the array.
// Ex: If array is [2,3,3,2], the sum is 2+3=5

exports.SumOfUniqueNumbers = function(arrayOfNums)
{
var i,j,k=0,l=(arrayOfNums.length),sum=0;
var a=[];
sum=a[k++]=arrayOfNums[0];
for(i=0;i<l;i++)
{
c=0;
for(j=0;j<k;j++)
{
if(arrayOfNums[i] == a[j])
{
c++;
break;
}
}
if(c==0)
{
a[k++]=arrayOfNums[i];
sum=sum+arrayOfNums[i];
}
}
return sum;
}

exports.ReverseString = function(str)
{
return str.split("").reverse().join("");
}


exports.ReverseArrayOfStrings = function(arrayOfStrings)
{
var i;
for(i=0;i<arrayOfStrings.length;i++)
arrayOfStrings[i]=exports.ReverseString(arrayOfStrings[i]);
return arrayOfStrings;
}