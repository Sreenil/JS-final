function handleSubmit(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    
    const greeting = `Hello, ${name}!`;
    let message = "";
    
    if (age < 18) {
        message = `${greeting} You are Minor.`;
    } else {
        message = `${greeting} You are Major.`;
    }

    
    alert(message);
}