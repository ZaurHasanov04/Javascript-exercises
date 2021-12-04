var container = document.querySelector('.container')
var row = document.querySelector('.row')
var seats = document.querySelectorAll('.seat:not(.reserved)')
var count = document.getElementById('count')
var amount = document.getElementById('amount')
var select=document.getElementById('movie')

// console.log(seats)

getfromLS();

TotalAmount();

container.addEventListener('click',function(e){
    if(e.target.classList.contains('seat') && !e.target.classList.contains('reserved')){
        e.target.classList.toggle('selected')
        TotalAmount()
        
    }
})


select.addEventListener('change', function(){
    TotalAmount()
})






function TotalAmount(){
    let countSelected=container.querySelectorAll('.seat.selected');
    let price = select.value
    count.innerText=countSelected.length;
    amount.innerText = price * countSelected.length;

    const selectedSeatsArr=[];
    const seatsArr=[]

    

    countSelected.forEach(function(seat){
        selectedSeatsArr.push(seat)
    })
    console.log(selectedSeatsArr)
    seats.forEach(function(seat){
        seatsArr.push(seat)
    })

    

    let selectedSeatIndexs=selectedSeatsArr.map(function(seat){
        
        return seatsArr.indexOf(seat)
    })

    
    savetoLS(selectedSeatIndexs)

}

function getfromLS(){
    const selectedSeats=JSON.parse(localStorage.getItem('SelectedIndexs'));
    console.log(selectedSeats)
     if( selectedSeats != null && selectedSeats.length > 0){
        seats.forEach(function(seat, index){
            if(selectedSeats.indexOf(index) > -1){
                seat.classList.add('selected')
            }
        })
     }

     const get_movie=localStorage.getItem('SelectedMovies')

     if(get_movie != null){
         select.selectedIndex = get_movie
     }
}

function savetoLS(seat){
    const save=localStorage.setItem('SelectedIndexs', JSON.stringify(seat));
    const save_movie=localStorage.setItem('SelectedMovies', select.selectedIndex);
}