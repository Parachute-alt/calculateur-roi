
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
    let message = `<div><strong>Votre ROI est de ${roi.toFixed(2)} %</strong></div>`;
    let explanation = "";

    if (roi > 0) {
        explanation = `<div class="explication">Cela signifie que votre investissement a été rentable : non seulement vous avez récupéré votre mise, mais vous avez également généré des bénéfices. <strong>Cela reflète un bon alignement entre votre offre et les attentes de votre clientèle cible.</strong> En plus du retour immédiat, vous avez aussi renforcé votre visibilité, amélioré la reconnaissance de votre marque et ouvert la porte à de futures opportunités commerciales.</div>`;
    } else if (roi === 0) {
        explanation = `<div class="explication">Votre ROI est de 0 %. Vous avez récupéré exactement ce que vous avez investi.</div>`;
    } else {
        explanation = `<div class="explication">Cela signifie que votre investissement n’a pas encore généré de retour financier. Il peut être pertinent de retravailler votre positionnement de marque, votre offre ou encore votre compréhension de la demande client. <strong>Malgré ce résultat vous avez aussi renforcé votre visibilité, amélioré la reconnaissance de votre marque et ouvert la porte à de futures opportunités commerciales.</strong></div>`;
    }

    // Affichage structuré dans le div de résultat
    document.getElementById('resultat').innerHTML = message + explanation;
}
