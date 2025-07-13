import { registration } from "./pages/registration.js";

export let image = document.getElementById('imageRow');
export let content = document.getElementById('content');
export let decision = document.getElementById('decision');

// Enter the game
document.getElementById('btnReady').addEventListener('click', registration );
