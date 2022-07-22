// Expected result : [[1, 3, 5, 7, 9], [2, 4, 6, 8, 10]]
// Direction : Return nested array first is odd value and second is even array from the array number
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function result(number) {
    // Your Code Here
    const odd_value=[]
    const  even_value=[]
    for (num of number){
        if(num%2==0){
            even_value.push(num)
        }else {
            odd_value.push(num)
        }
    }
    const result=[]
    result.push(odd_value)
    result.push(even_value)
    return result
}

console.log(result(number));