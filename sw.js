self.addEventListener('install', (event) => {
    console.log('sw: install');
});

self.addEventListener('fetch', (event) => {
    if (event.request.url.includes('messi.jpeg')) {
        console.log(event.request.url);
        let image = fetch('images/bicho.jpg');
        event.respondWith(image)
    }
});


/*
 const resp = new Response (

    `
    body{

            color: red;
            background-color: #000;

        }`,
    {

        headers: {
            'Content-Type': 'text/css',
        },
    }  
 );
 */