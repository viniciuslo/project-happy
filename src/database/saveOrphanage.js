function saveOrphanage(db, orphanages) {
  return db.run(`
        insert into orphanages (
            lat,
            lng,
            name,
            about,
            whatsapp,
            images,
            instructions,
            opening_hours,
            open_on_weekends
        ) VALUES (
            "${orphanages.lat}",
            "${orphanages.lng}",
            "${orphanages.name}",
            "${orphanages.about}",
            "${orphanages.whatsapp}",
            "${orphanages.images}",
            "${orphanages.instructions}",
            "${orphanages.opening_hours}",
            "${orphanages.open_on_weekends}"
        );
    `);
}

module.exports = saveOrphanage;
