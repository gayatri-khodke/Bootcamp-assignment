// Task: CRUD Functionality
// Create a simple phone book application functionality using JavaScript objects. Your application should allow users to add new contacts, search for contacts by name, update existing contacts, and delete contacts.
// Implement the following functionalities:
// Add a new contact:  Allow users to add a new contact by providing their name, phone number, and email address.
// Search for a contact: Allow users to search for a contact by entering their name. If the contact is found, display their details (name, phone number, email). If not found, display a message indicating that the contact does not exist.
// Update a contact: Allow users to update the phone number and email address of an existing contact by providing their name and the updated information.
// Delete a contact: Allow users to delete a contact by entering their name.
//  Feel free to reach out if you have any questions.\


const contactlist=[];
function createcontact(name,phone,email){
     return {name:name,
             phone:phone,
             email:email
            }
}
// create object through factory function
const contact1=new createcontact('pooja','8802303','pooja@gamil.com');
const contact2=new createcontact('gayatri','48579347','gayatri@gamil.com');
const contact3=new createcontact('radha','7030023','seema@gamil.com');
const contact4=new createcontact('rupali','239323','rupali@gamil.com');
contactlist.push({...contact1});
contactlist.push({...contact2});
contactlist.push({...contact3});
contactlist.push({...contact4});
// console.log(contactlist);

const obj={
    searchcontact(personname){
        var user=contactlist.find(e=>e.name==personname);
        if(user){
            return user;
        }
        else{
            return 'contact not found';
        }
    },
    deletecontact(person){
        let findperson=contactlist.findIndex(e=>e.name==person);
        if(findperson!=-1){
              contactlist.splice(findperson,1);
              return findperson;
        }
        else{
            return 'contct not found';
        }
    },
    updatecontact(person,phone,gmail){
        // let findme=contactlist.findIndex(e=>e.name==person);
        let findme=obj.deletecontact(person);
        contactlist[findme].name=person;
        contactlist[findme].phone=phone;
        contactlist[findme].email=gmail
        return contactlist;
    },
    createcontact:(name,phone,email)=>{
       let person=new createcontact(name,phone,email);
       obj.contactlist.push(person);
    },
    }
obj.contactlist=contactlist;


let checkuser=obj.searchcontact('pooja');
// console.log(checkuser);
let deleteme=obj.deletecontact('pooja');
// console.log(deleteme);
let updame=obj.updatecontact('gayatri','66666','gk@9gmail.com');
// console.log(updame);
obj.createcontact('surekha','7480423','krutika@gmail.com');
console.log(obj.contactlist);
































