
    const cloudContainer = document.getElementById('cloudContainer');
    const totalClouds = 30; 
    const cloudImages = 5; 

    function createCloud(index) {
        const img = document.createElement('img');
        img.src = `images/cloud${(index % cloudImages) + 1}.png`; 
        img.style.setProperty('--i', (index % cloudImages) + 1);
        img.alt = 'cloud';

        cloudContainer.appendChild(img);
    }

    for (let i = 0; i < cloudImages; i++) {
        createCloud(i);
    }

    let cloudCount = cloudImages; 

    function spawnClouds() {
        if (cloudCount < totalClouds) {
            createCloud(cloudCount);
            cloudCount++;
        }
    }

    setInterval(spawnClouds, 1200); 

