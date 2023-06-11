var linkElement = document.getElementById("style");

function randomizeHeight() {
    document.addEventListener("DOMContentLoaded", function() {
        var items = document.querySelectorAll(".item");
      
        items.forEach(function(element) {
          var randomHeight = Math.floor(Math.random() * 200) + 50; 
          element.style.height = randomHeight + "px";
        });
    });
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

async function bubbleSort() {
    document.addEventListener("DOMContentLoaded", async function() {
        const items = document.getElementsByClassName("item");
        const heights = Array.from(items).map(element => parseInt(getComputedStyle(element).height));
        var i, j, temp;
        var swapped;

        for (i=0; i < heights.length - 1; i++){
            swapped = false;
            for (j = 0; j < heights.length - i - 1; j++ ) {
                if (heights[j] > heights[j + 1]) {
                    temp = heights[j];
                    heights[j] = heights[j + 1];
                    heights[j + 1] = temp;
                    swapped = true;
                    items[j].style.height = heights[j] + "px";
                    items[j + 1].style.height = heights[j + 1] + "px";
                    items[j].style.backgroundColor = "red";
                    items[j + 1].style.backgroundColor = "red";
                    linkElement.href = linkElement.href;
                    await delay(100);
                    items[j].style.backgroundColor = "black";
                    items[j + 1].style.backgroundColor = "black";
                }
            }

            if (swapped == false)
            break;
        }
        console.log(heights);       
        for (let k=0; k < heights.length; k ++) {
            items[k].style.backgroundColor = "green";
            await delay(10);
        }
        document.getElementById("sorting").innerHTML = "DONE";
    });
}

randomizeHeight();
bubbleSort();