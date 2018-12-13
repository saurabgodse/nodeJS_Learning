const firelist =document.querySelector('#reading');
const form= document.querySelector('#inserting');

function renderList(doc){
    let li= document.createElement('li');
    let name= document.createElement('span');
    let email=document.createElement('span');
    let sp=document.createElement('span');

    li.setAttribute('data-id',doc.id);
    name.textContent=doc.data().Name;
    email.textContent=doc.data().Email;
    sp.textContent=' ';

    li.appendChild(name);
    li.appendChild(sp);
    li.appendChild(email);
    firelist.appendChild(li);
}


db.collection("First").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        renderList(doc);
    });
});

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    db.collection('First').add({
        Name: form.name.value,
        Email: form.email.value
    });
   form.name.value='';
   form.email.value='';
   
    
});
