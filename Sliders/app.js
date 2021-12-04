const models=[
    {
        name:'Galik',
        model:'Mercedes',
        link:'img/images.jpeg'
    },
    {
        name:'BMW M5',
        model:'BMW',
        link:'img/index.jpeg'
    },
    {
        name:'Urus',
        model:'Lambo',
        link:'img/urus.jpg'
    }
]


var index = 0;
var countSlides=models.length
var settings={
    duration: '2000',
    random:true
}
var interval;

initialize(settings)

function initialize(settings){
    var prev;
    interval=setInterval(function(){

        if(settings.random){
            do{
                index = Math.floor(Math.random() * countSlides)
            }while(index==prev)
            console.log(index)
            prev=index
        }else{
            if(countSlides == index+1){
                index=-1;
            }
            index++;
            switchSlider(index)
        }
            switchSlider(index)
    }, settings.duration)
}

console.log(document.querySelectorAll('.fa'))

document.querySelectorAll('.fa').forEach(function(item){
    item.addEventListener('mouseenter', function(){
        clearInterval(interval)
    })
})

document.querySelectorAll('.fa').forEach(function(item){
    item.addEventListener('mouseleave', function(){
        initialize(settings)
    })
})


var right=document.querySelector('.fa-arrow-right').addEventListener('click', function(){
    index++;
    switchSlider(index)
});


var left = document.querySelector('.fa-arrow-left').addEventListener('click', function(){
    
    index--;
    switchSlider(index)
});



function switchSlider(i){
    
    index = i
    if(i<0){
        index=countSlides-1
    }
    if(i === countSlides){
        index=0
    }
    
    
    document.querySelector('.card-img-top').setAttribute('src', models[index].link)
    document.querySelector('.card-title').textContent=models[index].name
    document.querySelector('.card-text').textContent=models[index].model
}