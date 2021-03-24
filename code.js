console.log("easter egg")



function hideAllEggs(duration ){
    $(".egg").each(function(){
        $(this).hide(duration)
    })
}
function setScore(score){
    if(!score){
        $(".score").text(`Score: 0` )
    }else{
        $(".score").text(`Score: ${score}` )
    }
}

function winner(){
    $(".line").each(function(){
        $(this).remove()
    })
    $(".field").css('background-image', 'url(bunny.jpg)');
    $(".field").css('background-repeat', 'no-repeat');
    $(".field").css('background-size', 'auto');
    $(".field").css('background-position', 'center center');
    $(".score").remove()
    $(".topText").text("You won!")
}



$(document).ready(function() {
   // document ready
   hideAllEggs()
    let eggOne = null
    let score = 0

    $(".eggHolder").click(function(event){
        //to un-hide
        this.children[0].style = ""
        clickedEgg = this.children[0]
        
        //bonus exercise 1
        if($(clickedEgg).hasClass("magic")){
            console.log("magic egg")
            hideAllEggs("slow")
            score = 0
        }   


        



        if(eggOne === clickedEgg.id ){
            //same id
            console.log("it is a match!")
            eggOne = null
            eggOneElement = null
            score = score + 1
            setScore(score)

            // bonus exercise 2
            if(score === 4){
                winner()
            }


            return
        }
        //remember or forget the clicked egg
        if(eggOne === null){
            eggOne = clickedEgg.id
            eggOneElement = clickedEgg
            $(".selected_egg").text("egg " + clickedEgg.id )
        }else{
            //rest
            console.log("reset")
            $(".selected_egg").text("egg: none" )
            console.log("$(eggOneElement)",$(eggOneElement))
            $(eggOneElement).hide("slow")
            $(clickedEgg).hide("slow")
            eggOne = null
            eggOneElement = null
        }
    })

});