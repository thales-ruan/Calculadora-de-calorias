            let form = document.getElementById('form');
                form.addEventListener('submit', handleSubmite);

    function handleSubmite (event){
        event.preventDefault();

            let gender = Selected('sexo')
            let idade = getInputNumberValue ('idade');
            let peso = getInputNumberValue ('peso');
            let altura = getInputNumberValue ('altura');
            let activityLevel = Selected('fisica');

        const tmb = Math.round (gender ==='Feminino' ?(655 +(9.6 * peso) + (1.8 * altura) - (4.7 * idade)):(66 +(13.7 * peso) + (5 * altura) - (6.8 * idade)));
        

            let mainstenance = Math.round(tmb * Number(activityLevel));
            let loseWeight = mainstenance - 450;
            let gaiWeight = mainstenance + 450;

            let layout = 
            `<h2>Aqui esta o seu resultado!!</h2>
        <ul>
            <li>Seu metabolismos é de <strong> ${tmb} calorias</strong></li>
            <li>Para manter o seu peso você precisa consumir em média <strong> ${mainstenance} calorias</strong></li>
            <li>Para perder o seu peso você precisa consumir em média <strong> ${loseWeight} calorias </strong></li>
            <li>Para ganhar peso você precisa consumir média <strong> ${gaiWeight} calorias</strong></li>
        </ul> `;

            let result = document.getElementById('result');
                result.innerHTML = layout;
}
    function Selected (id){
        let select= document.getElementById(id)
            return select.options [select.selectedIndex].value;
}

    function  getInputNumberValue(id){
            return Number(document.getElementById(id).value);
}

