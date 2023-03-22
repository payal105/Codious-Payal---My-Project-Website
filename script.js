let inputBox = document.querySelector(".input-box"),
    search = document.querySelector(".search"),
    closeIcon = document.querySelector(".close-icon");

    search.addEventListener("click",() => inputBox.classList.add("open"));
    closeIcon.addEventListener("click",() => inputBox.classList.remove("open"));

const projectSearch = document.getElementById('projectSearch');
projectSearch.addEventListener('keyup', e=> {
    let currentValue = e.target.value.toLowerCase();
    let projects = document.querySelectorAll('h3.title');
    projects.forEach(project => {
        if (project.textContent.toLowerCase().includes(currentValue)){
            project.parentNode.style.display = "block";
        }else{
            project.parentNode.style.display = "none";
        }
    })
})
