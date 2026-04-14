// 16 Curated Solid Colors
const solidColors = [
    "#F0F8FF (AliceBlue)", "#FF7F50 (Coral)", "#6495ED (CornflowerBlue)", 
    "#DC143C (Crimson)", "#00FFFF (Cyan)", "#FF8C00 (DarkOrange)", 
    "#9932CC (DarkOrchid)", "#228B22 (ForestGreen)", "#FF00FF (Magenta)", 
    "#4169E1 (RoyalBlue)", "#FFFF00 (Yellow)", "#FFB6C1 (LightPink)", 
    "#00CED1 (DarkTurquoise)", "#8A2BE2 (BlueViolet)", "#FF6347 (Tomato)", 
    "#00FA9A (MediumSpringGreen)"
];

// 15 Curated Linear Gradients
const gradients = [
    "linear-gradient(to right, #ffafbd, #ffc3a0)",
    "linear-gradient(to right, #2193b0, #6dd5ed)",
    "linear-gradient(to right, #cc2b5e, #753a88)",
    "linear-gradient(to right, #ec008c, #fc6767)",
    "linear-gradient(to right, #4facfe, #00f2fe)",
    "linear-gradient(to right, #ff9a9e, #fad0c4)",
    "linear-gradient(to right, #00c6ff, #0072ff)",
    "linear-gradient(to right, #f83600, #f9d423)",
    "linear-gradient(to right, #ff7e5f, #feb47b)",
    "linear-gradient(to right, #800080, #ffc0cb)",
    "linear-gradient(to right, #008080, #afeeee)",
    "linear-gradient(to right, #ff4500, #ffff00)",
    "linear-gradient(to right, #7fff00, #008000)",
    "linear-gradient(to right, #4b0082, #9400d3)",
    "linear-gradient(to right, #e6e6fa, #0000cd)"
];

// DOM Elements
const btnFlip = document.getElementById("btn-flip");
const btnSolid = document.getElementById("btn-solid");
const btnGradient = document.getElementById("btn-gradient");
const colorText = document.getElementById("color-text");
const modeLabel = document.getElementById("mode-label");

// State
let currentMode = "solid";

// Mode Selection Logic
btnSolid.addEventListener("click", () => {
    currentMode = "solid";
    modeLabel.textContent = "Current Mode: Solid";
    btnSolid.classList.add("active");
    btnGradient.classList.remove("active");
});

btnGradient.addEventListener("click", () => {
    currentMode = "gradient";
    modeLabel.textContent = "Current Mode: Gradient";
    btnGradient.classList.add("active");
    btnSolid.classList.remove("active");
});

// Flip Logic
btnFlip.addEventListener("click", () => {
    if (currentMode === "solid") {
        const randomIndex = Math.floor(Math.random() * solidColors.length);
        const selectedColor = solidColors[randomIndex];
        
        // Extract just the Hex code for the background, keep the full string for the text
        const hexOnly = selectedColor.split(" ")[0]; 
        
        document.body.style.background = hexOnly;
        colorText.textContent = selectedColor;
    } else {
        const randomIndex = Math.floor(Math.random() * gradients.length);
        const selectedGradient = gradients[randomIndex];
        
        document.body.style.background = selectedGradient;
        colorText.textContent = selectedGradient;
    }
});