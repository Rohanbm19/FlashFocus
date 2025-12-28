import { GoogleGenerativeAI } from "https://esm.run/@google/generative-ai@latest";
// ⚠️ Replace with a FRESH key from AI Studio
const API_KEY = "AIzaSyDOH6iQT-NttmGVCPi1NbnvWIXGm-td93Q"; 
const genAI = new GoogleGenerativeAI(API_KEY);

const generateBtn = document.getElementById('generateBtn');
const noteInput = document.getElementById('noteInput');
const container = document.getElementById('flashcardContainer');
const loading = document.getElementById('loading');

generateBtn.addEventListener('click', async () => {
    const text = noteInput.value;
    if (!text) return alert("Please paste some notes first!");

    loading.classList.remove('hidden');
    container.innerHTML = 'Generating...'; // Feedback to user

    try {
        const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
        
        const prompt = `Convert the following notes into a JSON array of flashcards. 
        Each object should have "q" (question) and "a" (answer). 
        Notes: ${text}
        Return ONLY the raw JSON array. No markdown, no preamble.`;

        const result = await model.generateContent(prompt);
        const response = await result.response;
        let responseText = response.text();
        
        // --- ENGINEERING FIX: Clean JSON string ---
        // Removes markdown code blocks if the AI accidentally includes them
        const cleanJson = responseText.replace(/```json|```/g, "").trim();
        
        const flashcards = JSON.parse(cleanJson);
        renderCards(flashcards);
    } catch (error) {
        console.error("Detailed Error:", error);
        // This alerts the EXACT error (e.g., API key invalid or Region blocked)
        alert("API Error: " + error.message);
    } finally {
        loading.classList.add('hidden');
    }
});

function renderCards(cards) {
    container.innerHTML = ''; // Clear the "Generating..." text
    cards.forEach(card => {
        const div = document.createElement('div');
        div.className = 'card';
        div.innerHTML = `
            <h3>Q: ${card.q}</h3>
            <p><strong>A:</strong> ${card.a}</p>
        `;
        container.appendChild(div);
    });
}