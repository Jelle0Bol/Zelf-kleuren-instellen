const numButtons = 30; // het aantal gewenste knoppen
const colors = ['green', 'red', 'purple', 'blue', 'black']; // array met kleuren

const container = document.getElementById("container"); // krijg de container om knoppen aan toe te voegen

for (let i = 0; i < numButtons; i++) {
  const button = document.createElement("button"); // maak een nieuwe knop
  button.innerHTML = i + 1; // geef de knop een nummer
  button.style.backgroundColor = colors[0]; // stel de standaard achtergrondkleur van de knop in
  button.style.color = "white"; // stel de tekstkleur van de knop in op wit
  button.style.width = "100px"; // stel de breedte van de knop in
  button.style.height = "100px"; // stel de hoogte van de knop in
  button.style.margin = "5px"; // stel de marge van de knop in
  button.style.border = "none"; // verwijder de rand van de knop
  button.style.borderRadius = "5px"; // voeg een afgeronde hoek toe aan de knop
  container.style.width = '550px';
  container.style.margin = '0 auto';
  container.style.backgroundColor = 'grey';

  let clickCount = 0; // bijhouden hoe vaak op de knop is geklikt

  button.addEventListener("click", () => {
    setTimeout(() => {
      clickCount++; // increment clickCount
      if (clickCount >= colors.length) {
        container.removeChild(button); // verwijder de knop als het aantal keren dat erop is geklikt groter is dan of gelijk is aan het aantal kleuren in de array
      } else {
        button.style.backgroundColor = colors[clickCount]; // verander de achtergrondkleur van de knop op basis van het aantal keren dat erop is geklikt
      }
    }, 000); // wacht 0 seconde voordat je de kleur van de knop verandert
  });

  container.appendChild(button); // voeg de knop toe aan de container
}
