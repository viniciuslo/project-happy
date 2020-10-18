const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');

Database.then(async db => {
    //inserir dados na tabela de
    /*await saveOrphanage(db,{
        name: "Lar de Amor",
        description: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
        images: [
            "https://images.unsplash.com/photo-1594925782033-0238ef32fca0?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
            "https://images.unsplash.com/photo-1586978450997-3251b1d493e9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
        ].toString(),
        lat: "-27.222633",
        lng: "-49.6655874",
        about:"Venha como se sentir a vontade e traga muito amor e paciência para dar. ",
        opening_hours: "Horário de visitas Das 18h até 8h",
        open_on_weekends:"1"
        },
    ); */
    //consultar dados da tabela
     const selectedOrphanages = await db.all("SELECT * FROM orphanages");
     console.log(selectedOrphanages);

    // consultar somente 1 orphanages pelo id 
    const orphanage = await db.all('SELECT * FROM orphanages where id ="3"')
    console.log(orphanage);
})