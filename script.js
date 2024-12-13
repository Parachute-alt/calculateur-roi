
function calculerROI() {
    // Récupérer les valeurs des champs
    let investissement = parseFloat(document.getElementById('investissement').value);
    let revenus = parseFloat(document.getElementById('revenus').value);
    
    // Vérifier si les entrées sont valides
    if (isNaN(investissement) || isNaN(revenus) || investissement <= 0 || revenus <= 0) {
        alert("Veuillez entrer des valeurs valides pour l'investissement et les revenus.");
        return;
    }
    
    // Calculer le ROI
    let roi = ((revenus - investissement) / investissement) * 100;
    
    // Afficher le résultat
    let resultatDiv = document.getElementById('resultat');
    resultatDiv.textContent = `Le retour sur investissement (ROI) est de ${roi.toFixed(2)}%`;
}
