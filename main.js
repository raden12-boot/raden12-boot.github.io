const channels = [
    { name: "NS PLAY", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4CQXqpqRtqMG3EsBYcCmNCyC0qKEtOjN5XA&s", url: "https://example.com/nsplay" },
    { name: "TRANS TV", img: "https://www.rar.co.id/wp-content/uploads/2022/10/2.png", url: "https://example.com/transtv" },
    { name: "TRANS 7", img: "https://media.cakeresume.com/image/upload/s--K7s1hdJP--/c_pad,fl_png8,h_400,w_400/v1658118378/s3b0o2c7auhbu0r0wevf.png", url: "https://example.com/trans7" },
    { name: "METRO TV", img: "path_to_image4", url: "https://example.com/metrotv" },
    { name: "CNN ID", img: "path_to_image5", url: "https://example.com/cnnid" },
    { name: "CNBC ID", img: "path_to_image6", url: "https://example.com/cnbcid" },
    { name: "TV ONE", img: "path_to_image7", url: "https://example.com/tvone" },
    { name: "SCTV", img: "path_to_image8", url: "https://example.com/sctv" },
    { name: "INDOSIAR", img: "path_to_image9", url: "https://example.com/indosiar" },
    { name: "RCTI", img: "path_to_image10", url: "https://example.com/rcti" },
    { name: "GTV", img: "path_to_image11", url: "https://example.com/gtv" },
    { name: "ANTV", img: "path_to_image12", url: "https://example.com/antv" },
    { name: "BTV", img: "path_to_image13", url: "https://example.com/btv" },
    { name: "KOMPAS TV", img: "path_to_image14", url: "https://example.com/kompastv" },
    { name: "NET", img: "path_to_image15", url: "https://example.com/net" },
    { name: "MNCTV", img: "path_to_image16", url: "https://example.com/mnctv" }
];

const channelGrid = document.getElementById('channel-grid');

function displayChannels(channels) {
    channelGrid.innerHTML = channels.map(channel => `
        <a href="${channel.url}" class="channel-card" target="_blank">
            <img src="${channel.img}" alt="${channel.name}">
            <h3>${channel.name}</h3>
            <button>Watching</button>
        </a>
    `).join('');
}

document.getElementById('search').addEventListener('input', function(e) {
    const searchTerm = e.target.value.toLowerCase();
    const filteredChannels = channels.filter(channel => channel.name.toLowerCase().includes(searchTerm));
    displayChannels(filteredChannels);
});

displayChannels(channels);
