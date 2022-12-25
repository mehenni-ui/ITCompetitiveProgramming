

const solution_four = (lOne, lTwo)=>{
    const fList = [...lOne, ...lTwo];
    a=[];
    b=[];

    fList.sort((a, b)=> a-b);

    for(i=0; i<lOne.length; i++){
        a.push(fList[i])
    }
    for(i=lOne.length; i<fList.length; i++){
        b.push(fList[i])
    }

    

    

    console.log(a,b);
    



    
}



solution_four([0,2,4,6,8], [1,3,5,7])