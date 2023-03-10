mapboxgl.accessToken = 'pk.eyJ1IjoidGoxMjM0IiwiYSI6ImNsMGpmdnN6MDAwM2wzaWwxYW90amJsYnYifQ.rrK4L6l5lU7YADAvM1gH0g';
    const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v11', // style URL
    center: campground.geometry.coordinates, // starting position [lng, lat]
    zoom: 9 // starting zoom
});

map.addControl(new mapboxgl.NavigationControl());

new mapboxgl.Marker()
    .setLngLat(campground.geometry.coordinates)
    .setPopup(
        new mapboxgl.Popup({offset: 20})
            .setHTML(
                `<h3>${campground.title}</h3><p>${campground.location}</p>`
            )
    )
    .addTo(map)