const list = [1,1,2,2,3,3,5,8,1];
const sorted_list = (list)=>{
    const sList = [];

    

    for(i=0; i<list.length; i++){
        if(!sList.includes(list[i])){
            sList.push(list[i])
        }
    }

    return sList
}

console.log(sorted_list(list));

