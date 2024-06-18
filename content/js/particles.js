(async () => {
    await loadImageShape(tsParticles);

    await tsParticles.load({
        id: "particles",
        url: "/content/ext/enchant.json"
    })
})()
.then((container) => {
    console.log("✨ Loaded particles container!");
})
.catch((error) => {
    console.error(error);
});