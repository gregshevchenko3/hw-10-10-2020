(()=>{
    window.addEventListener("load", () => {
        let nextBtn = document.getElementById("nextSlideBtn"),
            prevBtn = document.getElementById("prevSlideBtn"),
            ar = document.querySelectorAll("input[type=\"radio\"]"), 
            checkedIndx = 0,
            next = () => {
                if(checkedIndx < ar.length - 1){
                    checkedIndx++;
                }
                else
                    checkedIndx = 0;
                ar[checkedIndx].checked = true;
            };
        ar[checkedIndx].checked = true;

        window.setInterval(next, 2000);
        nextBtn.addEventListener("click", next);
        prevBtn.addEventListener("click", () => {
            if(checkedIndx > 0){
                checkedIndx--;
            }
            else
                checkedIndx = ar.length-1;
            ar[checkedIndx].checked = true;
        });
    });
})();