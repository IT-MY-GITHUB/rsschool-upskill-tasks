// Obj's for Keyboard
const elements = {
    main: null,
    keysContainer: null,
    keys: []
}

const eventHandlers = {
    oninput: null,
    onclose: null
  }

const properties = {
    value: "",
    capsLock: false
  }

//   Initial keyboard
  function init() {
    // Create main elements
    elements.main = document.createElement("div");
    elements.keysContainer = document.createElement("div");

    // Setup main elements
    elements.main.classList.add("keyboard", "keyboard--hidden");
    elements.keysContainer.classList.add("keyboard__keys");
    elements.keysContainer.appendChild(createKeys());

    elements.keys = elements.keysContainer.querySelectorAll(".keyboard__key");

    // Add to DOM
    elements.main.appendChild(elements.keysContainer);
    document.body.appendChild(elements.main);

    // Automatically use keyboard for elements with class .use-keyboard-input
    document.querySelectorAll(".use-keyboard-input").forEach(element => {
      element.addEventListener("focus", () => {
        open(element.value, currentValue => {
          element.value = currentValue;
        });
      });
    });
  }

  function createKeys() {
    const fragment = document.createDocumentFragment();
    const keyLayout = [
      "❶", "❷", "❸", "❹", "❺", "❻", "❼", "❽", "❾", "⓿", "backspace",
      "q", "w", "e", "r", "t", "y", "u", "i", "o", "p",
      "caps", "a", "s", "d", "f", "g", "h", "j", "k", "l", "enter",
      "done", "z", "x", "c", "v", "b", "n", "m", ",", ".", "?",
      "space"
    ];

    // Creates HTML for an icon
    const createIconHTML = (icon_name) => {
        return `<i class="material-icons">${icon_name}</i>`;
      };

      keyLayout.forEach(key => {
        const keyElement = document.createElement("button");
        const insertLineBreak = ["backspace", "p", "enter", "?"].indexOf(key) !== -1;
  
        // Add attributes/classes
        keyElement.setAttribute("type", "button");
        keyElement.classList.add("keyboard__key");
  
        switch (key) {
          case "backspace":
            keyElement.classList.add("keyboard__key--wide");
            keyElement.innerHTML = createIconHTML("Backspace");
  
            keyElement.addEventListener("click", () => {
              properties.value = properties.value.substring(0, properties.value.length - 1);
              triggerEvent("oninput");
            });
  
            break;
  
          case "caps":
            keyElement.classList.add("keyboard__key--wide", "keyboard__key--activatable");
            keyElement.innerHTML = createIconHTML("Caps Lock");
  
            keyElement.addEventListener("click", () => {
              toggleCapsLock();
              keyElement.classList.toggle("keyboard__key--active", properties.capsLock);
            });
  
            break;
  
          case "enter":
            keyElement.classList.add("keyboard__key--wide");
            keyElement.innerHTML = createIconHTML("Enter");
  
            keyElement.addEventListener("click", () => {
              properties.value += "\n";
              triggerEvent("oninput");
            });
  
            break;
  
          case "space":
            keyElement.classList.add("keyboard__key--extra-wide");
            keyElement.innerHTML = createIconHTML("Space");
  
            keyElement.addEventListener("click", () => {
              properties.value += " ";
              triggerEvent("oninput");
            });
  
            break;
  
          case "done":
            keyElement.classList.add("keyboard__key--wide", "keyboard__key--dark");
            keyElement.innerHTML = createIconHTML("▼");
  
            keyElement.addEventListener("click", () => {
              close();
              triggerEvent("onclose");
            });
  
            break;
  
          default:
            keyElement.textContent = key.toLowerCase();
  
            keyElement.addEventListener("click", () => {
              properties.value += properties.capsLock ? key.toUpperCase() : key.toLowerCase();
              triggerEvent("oninput");
            });
  
            break;
        }
  
        fragment.appendChild(keyElement);
  
        if (insertLineBreak) {
          fragment.appendChild(document.createElement("br"));
        }
      });
  
      return fragment;
    };

    function triggerEvent(handlerName) {
        if (typeof eventHandlers[handlerName] == "function") {
          eventHandlers[handlerName](properties.value);
        }
      }
    
      function toggleCapsLock() {
        properties.capsLock = !properties.capsLock;
    
        for (const key of elements.keys) {
          if (key.childElementCount === 0) {
            key.textContent = properties.capsLock ? key.textContent.toUpperCase() : key.textContent.toLowerCase();
          }
        }
      }

     

  function open(initialValue, oninput, onclose) {
    properties.value = initialValue || "";
    eventHandlers.oninput = oninput;
    eventHandlers.onclose = onclose;
    elements.main.classList.remove("keyboard--hidden");
  }

  function close() {
    properties.value = "";
    eventHandlers.oninput = oninput;
    eventHandlers.onclose = onclose;
    elements.main.classList.add("keyboard--hidden");
  }

  window.addEventListener("DOMContentLoaded", function () {
    init();
  });