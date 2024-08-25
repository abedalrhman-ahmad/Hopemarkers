
let name = document.getElementById('name');
let mail = document.getElementById('mail');
let tel = document.getElementById('tel');
let date = document.getElementById('date');
let school = document.getElementById('school');
let className = document.getElementById('class');
let subject = document.getElementById('subject');


function thanks(){
   


    if ((name.value !== '' && (mail.value !== '' || tel.value !== '') && date.value !== '' && school.value !== '' && className.value !== '' && subject.value !== '')) {
      
    
        document.querySelector('.swap').style.display = 'flex'; 
        document.querySelector('.swap').scrollIntoView({ behavior: 'smooth' });
        
    }
  
   
    console.log(name.value)
    console.log(mail.value)
    console.log(tel.value)
    console.log(date.value)
    console.log(school.value)
    console.log(className.value)
    console.log(subject.value)
 
}
function res(){

       
    if (name.value == '' && mail.value == '' && tel.value == '' && date.value == '' && school.value == '' && className.value == '' && subject.value == '') {
     
        alert('fyll ut Soknaden fullstendig/قم بتعبئة الطلب كاملا');
        
    }
}

function handleFormSubmit(event) {
    event.preventDefault(); 

   
    const formData = new FormData(event.target);

    // Send data using fetch
    fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
    })
    .then(response => {
        if (response.ok) {
            // Call thanks() function on successful submission
            thanks(); 
        } else {
            // Handle errors if needed
            console.error('فشل الإرسال');
        }
    })
    .catch(error => {
        console.error('خطأ في الشبكة:', error);
    });
}

 

