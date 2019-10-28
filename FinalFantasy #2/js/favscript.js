let boxarr = document.querySelectorAll('.box');

boxarr.forEach(x=>{
    x.addEventListener('click',push);
});

function push (e){
    
    if(e.target.clasName == 'principalFavorites'){
        return false;
    }

    console.log(e.target)

    let nwcontent,nwhead;

    if(e.target.className == 'box'){

        console.log(e.target.children[1]);
        nwhead = e.target.children[0].innerHTML;
        nwcontent = e.target.children[1].innerHTML;
        console.log(nwcontent);

    } else{

        nwhead = e.target.parentElement.children[0].innerHTML;
        nwcontent = e.target.parentElement.children[1].innerHTML;

    }

    let oldDoc = document.querySelector('div.principalForward');
    oldDoc.children[0].innerHTML = nwhead;
    oldDoc.children[1].innerHTML = nwcontent;

}