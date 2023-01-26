const inputs = document.querySelectorAll('.controls input')

function handleUpdate() {
    console.log(this.value);
}

 inputs.forEach(input => {
    input.addEventListener('mousemove', handleUpdate);
 })