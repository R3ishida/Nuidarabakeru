var grid = new Muuri('.grid');
fetch('https://script.google.com/macros/s/AKfycbxS7Yc8kBP5OdIgf5f_SvkA-NYoSBHKYDDsUCvTlDwpozmRU1ZEZjEyFgccGAeaBc7_LQ/exec')
    .then((response) => response.json())
    .then((data) => {
        console.log("---------------")
        console.log(data)
        console.log(data.message)
        newItemList = []
        // ここに書いていく
        for (let i = 1; i < data.message.length; i++) {
            line = data.message[i]
            img_link = line[1]
            img_id = img_link.replace("https://drive.google.com/open?id=", "")
            img_date = line[2]
            img_place = line[3]
            console.log(img_link)
            itemDiv = document.createElement("div")
            itemDiv.className = "item"

            contentDiv = document.createElement("div")
            contentDiv.className = "item-content"

            imgElm = document.createElement("img")
            imgElm.src = `https://drive.google.com/uc?export=view&id=${img_id}&usp=sharing`

            contentDiv.appendChild(imgElm)
            itemDiv.appendChild(contentDiv)

            newItemList.push(itemDiv)
        }
        console.log(newItemList)
        var newItems = grid.add(newItemList)
        console.log("done")
    })
    .catch((error) => {
        console.log('error');
    });