function bookSearch(){

    let pickloc = document.getElementById("PickUpLoc");
    let droploc = document.getElementById("DropOffLoc");
    let pickdate = document.getElementById("PickUpDate");
    let dropdate = document.getElementById("DropOffDate");
    let category = document.getElementById("Category");
    let anc = document.getElementById("Search");

    let link = "/booking?pickloc="+pickloc.value+'&droploc='+droploc.value+"&cat="+category.value;

    if(pickdate.value){
        link += "&pickdate="+ pickdate.value;
    }
    if(dropdate.value){
        link += "&dropdate="+ dropdate.value;
    }


    anc.href = link;

}