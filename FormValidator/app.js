var username=document.getElementById('username')
var email = document.getElementById('email')
var password = document.getElementById('password')
var repassword = document.getElementById('repassword')
var form = document.getElementById('form')


function error(input, message){
    
    input.className='form-control is-invalid';
    const div =input.nextElementSibling
    div.className ='error';
    div.innerText=message

}


function success(input){
    input.className='form-control is-valid'
}


function checkLength(input, min, max){
    if(input.value.length<min){
        error(input, `${input.placeholder} must be minimum ${min} character ` )
    }else if(input.value.length > max){
        error(input, `${input.placeholder} must be maximum ${max} character `)
    }else{
        success(input)
    }
}

function validateEmail(input){
    
        var re =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        
        if(!re.test(input.value)){
            error(input, `${input.placeholder} is wrong` )
        }else{
            success(input)
        }
    }

function requiredField(inputs){
    
    inputs.forEach(function(input){
        if (input.value === ''){
            error(input, `${input.placeholder} field is required`)
        }else{
            success(input)
        }
    })
}

function checkPassword(password, repassword){
    if(password.value === repassword.value){
        success(password)
    }else{
        error(repassword, `${repassword.placeholder} is not same with Password `)
    }
}


form.addEventListener('submit', function(e){
    e.preventDefault()
    requiredField([username, email, password, repassword])
    checkLength(username, 6, 15)
    checkLength(password, 8, 24)
    validateEmail(email)
    checkPassword(password, repassword)
})
