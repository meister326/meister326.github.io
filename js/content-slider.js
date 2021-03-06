window.onload = function () {
    
    // CONTENT SLIDER JAVA SCRIPT CODE
    
    (function() {
        
        if (!document.querySelector(".topdish-slider")) {
            
            return;
            
        }
        
        var contentSlider = document.querySelector(".topdish-slider");
        var controllers = contentSlider.querySelectorAll("input[type='radio']");
        var indicators = contentSlider.querySelectorAll(".topdish-slider__indicator");
        var content = contentSlider.querySelectorAll(".topdish-slider__content-wrapper > div");
        
        if (controllers.length != indicators.length) {
            
            errorMessage(1);
            
        }
        
        if (controllers.length != content.length) {
            
            errorMessage(2);
            
        }
        
        contentSlider.querySelector(".btn--prev").addEventListener("click", toggleControllers, false);
        contentSlider.querySelector(".btn--next").addEventListener("click", toggleControllers, false);
        
        
        
        function errorMessage(errorCode) {
            
            errorCode = +errorCode;
            var message = "Ошибка!!!";
            
            alert(message);
            
        };
        
        function toggleControllers(event) {
            
            event = event || window.event;
            var dirrection;
            var counter = controllers.length;
            var current;
            
            if (this.classList.contains("btn--prev")) {
                
                dirrection = -1; 
                
            } else if (this.classList.contains("btn--next")) {
                
                dirrection = 1;
                
            }
            
            for (var i = 0; i < counter; i++) {
                
                if (controllers[i].checked) {
                    
                    current = i + dirrection;
                    
                    if (current == counter) {
                        
                        current = 0;
                        
                    } else if (current < 0) {
                        
                        current = counter - 1;
                        
                    }
                    
                    controllers[current].checked = true;
                    
                    break;
                    
                }
                
            }
            
        };
        
    })();
    
}