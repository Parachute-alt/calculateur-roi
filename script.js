
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
    let message;

    if (roi > 0) {
        message = `Votre ROI est de ${roi.toFixed(2)} %. Cela signifie que votre investissement a été rentable.`;
    } else if (roi === 0) {
        message = "Votre ROI est de 0 %. Vous avez récupéré exactement ce que vous avez investi.";
    } else {
        message = `Votre ROI est de ${roi.toFixed(2)} %. Cela signifie que vous avez perdu de l'argent sur cet investissement.`;
    }

    // Afficher le résultat
    document.getElementById('resultat').textContent = message;
}
