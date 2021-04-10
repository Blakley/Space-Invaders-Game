let menu_screen = false;

let controller = {
    left: false,
    right: false,
    pause: false,
    keyListener: function(event) {
        let state;
        if (event.type == "keydown")                       
            state = true;
        else
            state = false;

        if (menu_screen == false) {
            switch(event.keyCode) {                 
                case 65:    
                    controller.left = state;   
                    console.log('moving left');   
                    break;
                case 68: 
                    controller.right = state;
                    console.log('moving right');
                    break; 
            }
        }
    }
};

window.addEventListener("keydown", controller.keyListener);
window.addEventListener("keyup", controller.keyListener);
