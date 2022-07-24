// function Button(text, background) {
//     this.text = text;
//     this.background = background;
// }

// Button.prototype.element = function() {
//     const buttonElement = document.createElement('button');
//     buttonElement.innerText = this.text;
//     buttonElement.style.background = this.background
//     return buttonElement
// }

class Button {
    constructor(text, background, color) {
        this.text = text;
        this.background = background;
        this.color = color
    }
    element() {
        const buttonElement = document.createElement('button');
        buttonElement.innerText = this.text;
        buttonElement.style.background = this.background;
        buttonElement.style.color = this.color
        return buttonElement
    }
    appendTo(target) {
        const targetElement = document.querySelector(target);
        targetElement.appendChild(this.element())
        return targetElement
    }
    
}

const blueButton = new Button('Comprar', 'blue', 'white')
console.log(blueButton)
console.log(blueButton.appendTo('body'))


class Button_2 {
    constructor(options) {
        this.options = options
    }
}

const blueOptions = {
    backgroundColor: 'blue',
    color: 'white',
    text: 'Click',
    borderRadius: '4px'
}

const blueButton_2 = new Button_2(blueOptions)