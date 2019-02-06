
class Dropdown {
    constructor(ele) {
        this.ele = ele;

        this.button = this.ele.querySelector('.dropdown-button');
        console.log(this.button);
        this.content = this.ele.querySelector('.dropdown-content');
        console.log(this.content);
        this.button.addEventListener('click', () => {
            this.toggleContent();
        })
    }

    toggleContent() {
        this.content.classList.toggle('dropdown-hidden');
    }
}


let dropdowns = document.querySelectorAll('.dropdown');
dropdowns.forEach(dropdown => new Dropdown(dropdown));