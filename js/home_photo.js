photoElm = document.getElementById('photo').getElementsByClassName('photo')[0];
fetch('https://script.google.com/macros/s/AKfycbxS7Yc8kBP5OdIgf5f_SvkA-NYoSBHKYDDsUCvTlDwpozmRU1ZEZjEyFgccGAeaBc7_LQ/exec')
    .then((response) => response.json())
    .then((data) => {
        console.log("---------------")
        console.log(data)
        console.log(data.message)
        line = data.message[1]
        img_link = line[1]
        img_id = img_link.replace("https://drive.google.com/open?id=", "")

        imgElm = document.createElement("img")
        imgElm.src = `https://drive.google.com/uc?export=view&id=${img_id}&usp=sharing`
        photoElm.appendChild(imgElm)
    })
    .catch((error) => {
        console.log("error")
    })