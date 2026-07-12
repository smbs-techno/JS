document.addEventListener("DOMContentLoaded",()=>{

    const form=document.getElementById("userForm");
    const nameInput=document.getElementById("nameInput");
    const subscribe=document.getElementById("subscribe");
    const preview=document.getElementById("preview");

    form.addEventListener("submit",(e)=>{
        e.preventDefault();//prevent page reload
        const name = nameInput.value.trim();
        const isSubs = subscribe.checked;

        //clear
        preview.innerHTML="";
        if(name===""){
            const error=document.createElement("p")
            error.textContent="Name cannot be empty!"
            error.classList.add("error");
            preview.appendChild(error)
        }
        else{
            const welcome=document.createElement("h3")
            welcome.textContent=`hello, ${name}`
            preview.appendChild(welcome)
            
            if(isSubs){
                const msg=document.createElement("p")
                msg.textContent="you are subscriber of SRI"
                msg.classList.add("success")
                preview.appendChild(msg)

            }
        }
        form.reset()
    })

})

/*
1. DOMContentLoaded
   -> Run JS only after HTML is fully loaded.

2. addEventListener()
   -> Attach an event to an element.

3. preventDefault()
   -> Stops the default browser action.

4. value
   -> Gets the value of an input field.

5. trim()
   -> Removes leading and trailing spaces.

6. checked
   -> Returns true/false for a checkbox.

7. createElement()
   -> Creates a new HTML element.

8. textContent
   -> Sets or gets plain text.

9. classList.add()
   -> Adds a CSS class.

10. appendChild()
    -> Inserts an element into the DOM.

11. innerHTML = ""
    -> Clears all child elements.

12. form.reset()
    -> Resets all form inputs to their default values.
*/