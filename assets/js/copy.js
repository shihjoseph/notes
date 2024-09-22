// Add buttons
document.querySelectorAll("pre > code").forEach(function(code, index) {
  // Create a container
  const container = document.createElement("div");
  container.classList.add("code-container");
  
  // Get parent pre element
  const pre = code.parentNode;
  
  // Insert new container before parent element
  pre.parentNode.insertBefore(container, pre);
  
  // Move parent to the new container
  container.appendChild(pre);
  
  // Create button
  const input = document.createElement("input");
  input.setAttribute("type", "button");
  input.setAttribute("data-copybuttonid", index);
  input.setAttribute("value", "Copy");
  input.classList.add("copy-button");
  
  // Append button to the new container
  container.appendChild(input);
  
  // Set attribute for copy targeting
  code.setAttribute("data-copytargetid", index);
});

// Add copy functionality
const clipboard = new ClipboardJS("input[data-copybuttonid]", {
    text: function(trigger) {
      // Get copy button target ID
      const id = trigger.getAttribute("data-copybuttonid");
      // Get target 
      const target = document.querySelector(`[data-copytargetid="${id}"]`);
      // Return text of target for copying
      return target.innerText;
    }
  }
);

// Message on success
clipboard.on('success', function(e) {
  // Store original text
  if (!e.trigger.getAttribute("data-value")) {
    e.trigger.setAttribute("data-value", e.trigger.getAttribute("value"));
  }
  // Set temp message
  e.trigger.setAttribute("value", "Copied!");
  // Put message back
  setTimeout(function() {
    e.trigger.setAttribute("value", e.trigger.getAttribute("data-value"));
  }, 1000);
  
  e.clearSelection();
});

clipboard.on('error', function(e) {
  // Store original text
  if (!e.trigger.getAttribute("data-value")) {
    e.trigger.setAttribute("data-value", e.trigger.getAttribute("value"));
  }
  // Set temp message
  e.trigger.setAttribute("value", "Error. Sorry, could not copy.");
  // Put message back
  setTimeout(function() {
    e.trigger.setAttribute("value", e.trigger.getAttribute("data-value"));
  }, 3000);
});