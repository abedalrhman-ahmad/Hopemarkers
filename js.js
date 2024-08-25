
let name = document.getElementById('name');
let mail = document.getElementById('mail');
let tel = document.getElementById('tel');
let date = document.getElementById('date');
let school = document.getElementById('school');
let className = document.getElementById('class');
let subject = document.getElementById('subject');
let note =document.getElementsByClassName('subscribe-input')

function thanks(){
   


    if ((name.value !== '' && (mail.value !== '' || tel.value !== '') && date.value !== '' && school.value !== '' && className.value !== '' && subject.value !== '')) {
      
    
        document.querySelector('.swap').style.display = 'flex'; 
        document.querySelector('.swap').scrollIntoView({ behavior: 'smooth' });
        
    }
  
   
  
 
}
function res(){

       
    if (name.value == '' && mail.value == '' && tel.value == '' && date.value == '' && school.value == '' && className.value == '' && subject.value == '') {
     
        alert('fyll ut Soknaden fullstendig/قم بتعبئة الطلب كاملا');
        
    }
    else{
        thanks();
        
    }
}

function handleFormSubmit(event) {
    event.preventDefault(); 

    const formData = new FormData(event.target);

    fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
    })
    .then(response => {
        if (response.ok) {
            thanks(); // Call thanks() function on successful submission
            
            // Set a timeout to call abed() function after 2 seconds
            setTimeout(() => {
                clear();
                clearnote();
            }, 500);
        } else {
            console.error('فشل الإرسال');
        }
    })
    .catch(error => {
        console.error('خطأ في الشبكة:', error);
    });
}

function clear(){
  
    name.value = '';
    mail.value = '';
    tel.value = '';
    date.value = '';
    school.value = '';
    className.value = '';
    subject.value = '';
  
  
}
function clearnote() {
    for (let i = 0; i < note.length; i++) {
        note[i].value = ''; // Clear each note input
    }
}