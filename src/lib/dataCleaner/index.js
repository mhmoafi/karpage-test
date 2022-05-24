export const fetchedProductDataCleaner = (item, index) => {
    const priceable = (item) => {
        let data = []
        for (let i in item.price_able_att) {
            data = [...data, item.price_able_att[i].name]
        }
        return data
    }
    const attValueRelationDataPreparer = (fetchedData) => {
        const attributeFinderByAttValueId = (id) => {
            for (let iteratorItem of fetchedData.product_att_value) {
                // console.log(iteratorItem);
                if (iteratorItem.att_id.id === id) {
                    return iteratorItem.att_id.name
                }
            }
        }
        let attValuesRelation = fetchedData.att_value_relation
        // console.log("relation : ", fetchedData.att_value_relation);
        let cleanedData = []
        attValuesRelation.map((item, index) => {
            cleanedData = [
                ...cleanedData,
                {
                    rowNum: String(index + 1),
                    attValue1:
                    {
                        // attribute: attributeFinderByAttValueId(item.att_value_id1.att_id),
                        attribute: item.att_value_id1.att_id.name,
                        id: item.att_value_id1.id,
                        value: item.att_value_id1.value ? item.att_value_id1.value : item.att_value_id1.long_value,
                        // long_value: item.att_value_id1.long_value
                    },
                    attValue2: {
                        // attribute: attributeFinderByAttValueId(item.att_value_id2.att_id),
                        attribute: item.att_value_id2.att_id.name,
                        id: item.att_value_id2.id,
                        value: item.att_value_id2.value ? item.att_value_id2.value : item.att_value_id2.long_value,
                        // long_value: item.att_value_id2.long_value,
                    }
                }
            ]
        })
        return cleanedData
    }
    const attLongValueWithName = (data, target) => {
        let attLongValues = []
        let datas = []
        for (const iterator of data) {
            if (iterator.att_id.name === target) {
                attLongValues = [...attLongValues, { [iterator.att_id.name]: (iterator.long_value) ? iterator.long_value : iterator.value }]
            }
        }
        for (let i in attLongValues) {
            if (attLongValues[i].length !== 0) {
                datas = [...datas, attLongValues[i]]
            }
        }
        return attLongValues
    }

    const attValueWithName = (data, targetValue) => {
        let attValues = []
        for (const iterator of data) {
            if (iterator.att_id.name === targetValue) {
                attValues = [...attValues, { [iterator.att_id.name]: (iterator.value === "true") ? true : (iterator.value === "false") ? false : iterator.value }]
            }
        }
        return attValues
    }
    const boxPreparer = (item) => {
        const moreDetails = [
            ...attLongValueWithName(item.product_att_value, "Normal Pack Desc"),
            ...attLongValueWithName(item.product_att_value, "BigPack Pack Desc"),
            ...attLongValueWithName(item.product_att_value, "LimitedPack Pack Desc")
        ]
        const title = attValueFinder(item.product_att_value, "Pack Name")
        const boxData = [
            ...attValueWithName(item.product_att_value, "Normal Charger"),
            ...attValueWithName(item.product_att_value, "Normal Case"),
            ...attValueWithName(item.product_att_value, "Normal Glass"),
            ...attValueWithName(item.product_att_value, "Normal Charger Cable"),
            ...attValueWithName(item.product_att_value, "Normal Handsfree"),
            ...attValueWithName(item.product_att_value, "BigPack Charger"),
            ...attValueWithName(item.product_att_value, "BigPack Case"),
            ...attValueWithName(item.product_att_value, "BigPack Glass"),
            ...attValueWithName(item.product_att_value, "BigPack Charger Cable"),
            ...attValueWithName(item.product_att_value, "BigPack Handsfree"),
            ...attValueWithName(item.product_att_value, "LimitedPack Charger"),
            ...attValueWithName(item.product_att_value, "LimitedPack Case"),
            ...attValueWithName(item.product_att_value, "LimitedPack Glass"),
            ...attValueWithName(item.product_att_value, "LimitedPack Charger Cable"),
            ...attValueWithName(item.product_att_value, "LimitedPack Handsfree"),
            ...attLongValueWithName(item.product_att_value, "Normal Pack Desc"),
            ...attLongValueWithName(item.product_att_value, "BigPack Pack Desc"),
            ...attLongValueWithName(item.product_att_value, "LimitedPack Pack Desc")
        ]
        let name
        let mainData = []
        for (let i in boxData) {
            for (let g in boxData[i])
                for (let e in title) {
                    name = g.replace(title[e] + " ", "")
                    if (title[e] === g.split(" ")[0]) {
                        mainData[e] = { ...mainData[e], [name]: boxData[i][g], title: title[e] }
                    }
                }
        }

        return mainData
    }

    const cameraPreparer = (item) => {
        const cameraData = [
            // ...(attLongValueWithName(item.product_att_value, "MainCam Sensor")),
            // ...(attLongValueWithName(item.product_att_value, "MainCam Resolution")),
            // ...(attLongValueWithName(item.product_att_value, "MainCam Aperture")),
            // ...(attLongValueWithName(item.product_att_value, "MainCam Sensor Type")),
            // ...(attLongValueWithName(item.product_att_value, "MainCam ISO")),
            // ...(attLongValueWithName(item.product_att_value, "MainCam Pixel Size")),
            // ...(attLongValueWithName(item.product_att_value, "MainCam Pixel Binning")),
            // ...(attLongValueWithName(item.product_att_value, "MainCam Sensor Size")),
            // ...(attLongValueWithName(item.product_att_value, "WideCam Resolution")),
            // ...(attLongValueWithName(item.product_att_value, "WideCam Sensor")),
            // ...(attLongValueWithName(item.product_att_value, "WideCam Sensor Type")),
            // ...(attLongValueWithName(item.product_att_value, "WideCam Aperture")),
            // ...(attLongValueWithName(item.product_att_value, "WideCam ISO")),
            // ...(attLongValueWithName(item.product_att_value, "WideCam Pixel Size")),
            // ...(attLongValueWithName(item.product_att_value, "WideCam Pixel Binning")),
            // ...(attLongValueWithName(item.product_att_value, "WideCam Sensor Size")),
            // ...(attLongValueWithName(item.product_att_value, "UltrawideCam Resolution")),
            // ...(attLongValueWithName(item.product_att_value, "UltrawideCam Sensor")),
            // ...(attLongValueWithName(item.product_att_value, "UltrawideCam Sensor Type")),
            // ...(attLongValueWithName(item.product_att_value, "UltrawideCam Aperture")),
            // ...(attLongValueWithName(item.product_att_value, "UltrawideCam ISO")),
            // ...(attLongValueWithName(item.product_att_value, "UltrawideCam Pixel Size")),
            // ...(attLongValueWithName(item.product_att_value, "UltrawideCam Pixel Binning")),
            // ...(attLongValueWithName(item.product_att_value, "UltrawideCam Sensor Size")),
            // ...(attLongValueWithName(item.product_att_value, "MicroCam Resolution")),
            // ...(attLongValueWithName(item.product_att_value, "MicroCam Sensor")),
            // ...(attLongValueWithName(item.product_att_value, "MicroCam Sensor Type")),
            // ...(attLongValueWithName(item.product_att_value, "MicroCam Aperture")),
            // ...(attLongValueWithName(item.product_att_value, "MicroCam ISO")),
            // ...(attLongValueWithName(item.product_att_value, "MicroCam Pixel Size")),
            // ...(attLongValueWithName(item.product_att_value, "MicroCam Pixel Binning")),
            // ...(attLongValueWithName(item.product_att_value, "MicroCam Sensor Size")),
            // ...(attLongValueWithName(item.product_att_value, "MainCam Features")),
            // ...(attLongValueWithName(item.product_att_value, "WideCam Features")),
            // ...(attLongValueWithName(item.product_att_value, "UltrawideCam Features")),
            // ...(attLongValueWithName(item.product_att_value, "MicroCam Features")),
            // ...(attLongValueWithName(item.product_att_value, "TelePhotoCam Resolution")),
            // ...(attLongValueWithName(item.product_att_value, "TelePhotoCam Sensor")),
            // ...(attLongValueWithName(item.product_att_value, "TelePhotoCam Sensor Type")),
            // ...(attLongValueWithName(item.product_att_value, "TelePhotoCam Aperture")),
            // ...(attLongValueWithName(item.product_att_value, "TelePhotoCam ISO")),
            // ...(attLongValueWithName(item.product_att_value, "TelePhotoCam Pixel Size")),
            // ...(attLongValueWithName(item.product_att_value, "TelePhotoCam Sensor Size")),
            // ...(attLongValueWithName(item.product_att_value, "TelePhotoCam Features")),
        ]
        const title = attValueFinder(item.product_att_value, "Camera Name")
        for (let i of title) {
            cameraData.push(...(attLongValueWithName(item.product_att_value, `${i} Sensor`)),
                ...(attLongValueWithName(item.product_att_value, `${i} Resolution`)),
                ...(attLongValueWithName(item.product_att_value, `${i} Aperture`)),
                ...(attLongValueWithName(item.product_att_value, `${i} Sensor Type`)),
                ...(attLongValueWithName(item.product_att_value, `${i} ISO`)),
                ...(attLongValueWithName(item.product_att_value, `${i} Pixel Size`)),
                ...(attLongValueWithName(item.product_att_value, `${i} Pixel Binning`)),
                ...(attLongValueWithName(item.product_att_value, `${i} Sensor Size`)),
                ...(attLongValueWithName(item.product_att_value, `${i} Features`)))
        }
        // console.log("tititititi", title);

        let data = []
        let mainData = []
        let dataNoTitle = []
        for (let i in cameraData) {
            for (let key in cameraData[i]) {
                data = [...data, key.split(" ")]
            }
        }
        for (let g in data) {
            for (let f in title) {
                if (data[g][0] === title[f]) {
                    dataNoTitle = [...dataNoTitle, data[g].splice(1, 2)]
                    for (let i in dataNoTitle) {
                        dataNoTitle[i] = String(dataNoTitle[i])
                        dataNoTitle[i] = dataNoTitle[i].replace(",", " ")
                    }
                    for (let key in cameraData[g]) {
                        if (dataNoTitle[g] === "Resolution") {
                        }
                        mainData[f] = { ...mainData[f], [dataNoTitle[g]]: (dataNoTitle[g] === "Resolution") ? [cameraData[g][key]] : cameraData[g][key], title: title[f] }
                    }
                }
            }
        }
        return mainData
    }

    const mediaPreparer = (item) => {
        let data = []
        let gallery = []
        let video = []
        let selfImg = []
        let rearBG = []

        const mainUrl = "https://api.mobolet.ir"
        // console.log(item.product_media);
        for (let i in item.product_media) {
            if (item.product_media[i].media_type_id.id === 3) {

                data = { ...data, mainImage: { url: item.product_media[i].abs_url, id: item.product_media[i].id, logoUrl: item.product_media[i].abs_url_image1, exif: item.product_media[i].exif } }
            } else if (item.product_media[i].media_type_id.id === 5) {
                gallery = [...gallery, { url: mainUrl + item.product_media[i].url, id: item.product_media[i].id, exif: item.product_media[i].exif }]
                // data=[...data, {galleryImages:gallery}]
            } else if (item.product_media[i].media_type_id.id === 6) {
                video = [...video, { url: item.product_media[i].abs_url, id: item.product_media[i].id, exif: item.product_media[i].exif }]
                // data=[...data, {videos:[...data.videos,{url:item.product_media[i].abs_url , id:item.product_media[i].id}]}]
            } else if (item.product_media[i].media_type_id.id === 7) {
                // console.log("self camera : ", item.product_media[i]);
                selfImg = [...selfImg, { url: mainUrl + item.product_media[i].url, id: item.product_media[i].id, exif: item.product_media[i].exif }]
                // data=[...data, {productSelfMedia:[...data.productSelfMedia,{url:item.product_media[i].abs_url , id:item.product_media[i].id}]}]
            } else if (item.product_media[i].media_type_id.id === 8) {
                rearBG = { url: item.product_media[i].abs_url, id: item.product_media[i].id, exif: item.product_media[i].exif }
                // data=[...data, {productSelfMedia:[...data.productSelfMedia,{url:item.product_media[i].abs_url , id:item.product_media[i].id}]}]
            }
        }
        data = { ...data, rearBackgroundImage: rearBG, galleryImages: gallery, videos: video, productSelfMedia: selfImg }
        return data
    }

    const attLongValue = (data, target) => {
        let attLongValues = []
        for (const iterator of data) {
            if (iterator.att_id.name === target) {
                attLongValues = [...attLongValues, iterator.long_value]
            }
        }
        return attLongValues
    }
    const attValueFinder = (data, targetValue) => {
        let attValues = []
        for (const iterator of data) {
            if (iterator.att_id.name === targetValue) {
                attValues = [...attValues, iterator.value]
            }
        }
        return attValues
    }

    const depthTitle = attValueFinder(item.product_att_value, "Depth Sensor Type")
    // console.log(attLongValue(item.product_att_value, [`${String(depthTitle)} Resolution`]));
    // console.log(String(attLongValue(item.product_att_value, "SelfieCam Resolution")));
    // mediaPreparer(item)
    let cleanedData = {}
    cleanedData = {
        releaseStatus: item.release_status,
        desc: item.desc,
        id: item.id,
        mainImage: "https://api.mobolet.ir/" + item.main_image,
        proStatus: item.pro_status,
        position: item.position,
        hotOffer: item.offer_status,
        idNum: String(index + 1),
        rowNum: String(index + 1),
        persianName: item.per_name ? item.per_name : "",
        englishName: item.name ? item.name : "",
        url: item.url,
        //price: { "price": 10000000, "changePrice": 2000 },
        picture: "/images/iphone-image.png",
        brand: [item.brand_id.per_name],
        ["Release Date"]: item.release_date ? item.release_date : "",
        ram: attValueFinder(item.product_att_value, "Ram"),
        garanty: attValueFinder(item.product_att_value, "Warranty"),
        cameraTitle: attValueFinder(item.product_att_value, "Camera Name"),
        cameraData: cameraPreparer(item),
        boxData: boxPreparer(item),
        // depthData: depthDataPreparer(item),
        ["Depth Type"]: attValueFinder(item.product_att_value, "Depth Sensor Type"),
        ["Resolution"]: [String(attLongValue(item.product_att_value, `${String(depthTitle)} Resolution`))],
        ["Sensor"]: String(attLongValue(item.product_att_value, `${String(depthTitle)} Sensor`)),
        ["Sensor Type"]: String(attLongValue(item.product_att_value, `${String(depthTitle)} Sensor Type`)),
        ["Aperture"]: String(attLongValue(item.product_att_value, `${String(depthTitle)} Aperture`)),
        ["ISO"]: String(attLongValue(item.product_att_value, `${String(depthTitle)} ISO`)),
        ["Pixel Size"]: String(attLongValue(item.product_att_value, `${String(depthTitle)} Pixel Size`)),
        ["Sensor Size"]: String(attLongValue(item.product_att_value, `${String(depthTitle)} Sensor Size`)),
        ["Features"]: String(attLongValue(item.product_att_value, `${String(depthTitle)} Features`)),
        source: [],
        charger: (String(attValueFinder(item.product_att_value, "USB Charger")) == "true") ? true : false,
        otg: (String(attValueFinder(item.product_att_value, "OTG")) == "true") ? true : false,
        typeC: (String(attValueFinder(item.product_att_value, "TypeC")) == "true") ? true : false,
        massStorage: (String(attValueFinder(item.product_att_value, "Mass Storage")) == "true") ? true : false,
        microUsb: (String(attValueFinder(item.product_att_value, "Micro USB")) == "true") ? true : false,
        lightning: (String(attValueFinder(item.product_att_value, "Lightning")) == "true") ? true : false,
        bluetoothversion: String(attLongValue(item.product_att_value, "Bluetooth Version")),
        //bluethoothVer.
        profile: String(attLongValue(item.product_att_value, "Bluetooth Profile")),
        //gpsSupports
        supports: String(attLongValue(item.product_att_value, "GPS Supports")),
        ["Simcard Count"]: attValueFinder(item.product_att_value, "Simcard Count"),
        simType: String(attLongValue(item.product_att_value, "Simcard Desc")),
        check2g: false,
        storage2g: String(attLongValue(item.product_att_value, "2G Band Desc")),
        check3g: false,
        storage3g: String(attLongValue(item.product_att_value, "3G Band Desc")),
        check4g: false,
        storage4g: String(attLongValue(item.product_att_value, "4G Band Desc")),
        check5g: false,
        storage5g: String(attLongValue(item.product_att_value, "5G Band Desc")),
        check6g: false,
        storage6g: String(attLongValue(item.product_att_value, "6G Band Desc")),
        wifiStandard: String(attLongValue(item.product_att_value, "WiFi Standard")),
        connectivityMoreInfo: String(attLongValue(item.product_att_value, "Connectivity More Information")),
        sensorMoreInfo: String(attLongValue(item.product_att_value, "Sensors More Information")),
        checkwifidualband: (String(attValueFinder(item.product_att_value, "Dual Band")) == "true") ? true : false,
        checkwifihotspot: (String(attValueFinder(item.product_att_value, "Wi-Fi Hotspot")) == "true") ? true : false,
        checkwifidirect: (String(attValueFinder(item.product_att_value, "Wi-Fi Direct")) == "true") ? true : false,
        checkwifidisplay: (String(attValueFinder(item.product_att_value, "Wi-Fi Display")) == "true") ? true : false,
        checkwifimimo: (String(attValueFinder(item.product_att_value, "Wi-Fi MiMo")) == "true") ? true : false,
        checknfcsens: (String(attValueFinder(item.product_att_value, "NFC")) == "true") ? true : false,
        check35sens: (String(attValueFinder(item.product_att_value, "3.5 Jack")) == "true") ? true : false,
        checkradiosens: (String(attValueFinder(item.product_att_value, "Radio")) == "true") ? true : false,
        checkcomputersyncsens: (String(attValueFinder(item.product_att_value, "ComputerSync")) == "true") ? true : false,
        // checkotgsens: false,
        checkinfraredsens: (String(attValueFinder(item.product_att_value, "Infrared")) == "true") ? true : false,
        checktetheringsens: (String(attValueFinder(item.product_att_value, "Tethering")) == "true") ? true : false,
        checkvoltesens: (String(attValueFinder(item.product_att_value, "Volte")) == "true") ? true : false,
        checkvowifisens: (String(attValueFinder(item.product_att_value, "VoWifi")) == "true") ? true : false,
        screenSize: String(attLongValue(item.product_att_value, "Display Size")),
        ["Display Type"]: attValueFinder(item.product_att_value, "Display Type"),
        displayDetails: String(attLongValue(item.product_att_value, "Display Desc")),
        ["Display Aspect Ratio"]: attValueFinder(item.product_att_value, "Display Aspect Ratio"),
        density: String(attLongValue(item.product_att_value, "Display Density")),
        ["Screen To Body Ratio"]: String(attLongValue(item.product_att_value, "Screen To Body Ratio")),
        ["Display Max Brightness"]: String(attLongValue(item.product_att_value, "Display Max Brightness")),
        ["Display Min Brightness"]: String(attLongValue(item.product_att_value, "Display Min Brightness")),
        ["Display Resolution"]: attValueFinder(item.product_att_value, "Display Resolution"),
        ["Display Resolution Type"]: attValueFinder(item.product_att_value, "Display Resolution Type"),
        ["Refresh Rate"]: attValueFinder(item.product_att_value, "Refresh Rate"),
        ["Display Protection"]: attValueFinder(item.product_att_value, "Display Protection"),
        displayMoreDetails: String(attLongValue(item.product_att_value, "Display More Desc")),
        Network: attValueFinder(item.product_att_value, "Network"),
        ["Processor Model"]: String(attLongValue(item.product_att_value, "Processor Model")),
        process: String(attLongValue(item.product_att_value, "Processor Desc")),
        ["Processor Type"]: String(attLongValue(item.product_att_value, "Processor Type")),
        ["Chipset Technology"]: String(attLongValue(item.product_att_value, "Chipset Technology")),
        frequenceprocess: String(attLongValue(item.product_att_value, "Processor Frequency")),
        //64bits
        prosens: (String(attValueFinder(item.product_att_value, "Processor 64bit")) == "true") ? true : false,
        ["Processor Model 1"]: String(attLongValue(item.product_att_value, "Processor Model 1")),
        process1: String(attLongValue(item.product_att_value, "Processor Desc 1")),
        ["Processor Type 1"]: String(attLongValue(item.product_att_value, "Processor Type 1")),
        ["Chipset Technology 1"]: String(attLongValue(item.product_att_value, "Chipset Technology 1")),
        frequenceprocess1: String(attLongValue(item.product_att_value, "Processor Frequency 1")),
        //64bits
        prosens1: (String(attValueFinder(item.product_att_value, "Processor 64bit 1")) == "true") ? true : false,
        //checked: '',
        ["GPU Processor"]: attValueFinder(item.product_att_value, "GPU Processor"),
        ["Ram Type"]: attValueFinder(item.product_att_value, "Ram Type"),
        storage: attValueFinder(item.product_att_value, "Memory"),
        ["Memory Type"]: attValueFinder(item.product_att_value, "Memory Type"),
        // sd Slot
        memorycheck: (String(attValueFinder(item.product_att_value, "Memory Slot")) == "true") ? true : false,
        fingersens: (String(attValueFinder(item.product_att_value, "Fingerprint Sensor")) == "true") ? true : false,
        lightsens: (String(attValueFinder(item.product_att_value, "Light Sensor")) == "true") ? true : false,
        proxisens: (String(attValueFinder(item.product_att_value, "Proximity Sensor")) == "true") ? true : false,
        speedsens: (String(attValueFinder(item.product_att_value, "Accelerometer")) == "true") ? true : false,
        compasssens: (String(attValueFinder(item.product_att_value, "Compass")) == "true") ? true : false,
        gyroscopesens: (String(attValueFinder(item.product_att_value, "Gyroscope")) == "true") ? true : false,
        //first information
        SupportDate: String(attLongValue(item.product_att_value, "Software Update Date")),
        flagship: (String(attValueFinder(item.product_att_value, "Flagship")) == "true") ? true : false,
        forGames: (String(attValueFinder(item.product_att_value, "Gaming")) == "true") ? true : false,
        barcode: item.code,
        // brand: '',
        warningIndicator: (String(attValueFinder(item.product_att_value, "Notification Bubble")) == "true") ? true : false,
        coolingSystem: (String(attValueFinder(item.product_att_value, "Cooling System")) == "true") ? true : false,
        playButton: (String(attValueFinder(item.product_att_value, "Game Button")) == "true") ? true : false,
        ["Part Number"]: attValueFinder(item.product_att_value, "Part Number"),
        antutu: String(attLongValue(item.product_att_value, "Antutu")),
        geekbench: String(attLongValue(item.product_att_value, "Geekbench")),
        mark: String(attLongValue(item.product_att_value, "3DMark")),
        gfxbench: String(attLongValue(item.product_att_value, "GFXBench")),
        displayMate: String(attLongValue(item.product_att_value, "DisplayMate")),
        dxoMark: String(attLongValue(item.product_att_value, "DXOMARK")),
        gpsStatus: String(attLongValue(item.product_att_value, "GPSStatus")),
        diskSpeed: String(attLongValue(item.product_att_value, "DiskSpeed")),
        faceRecognition: (String(attValueFinder(item.product_att_value, "Face Id")) == "true") ? true : false,
        Fingerprint: attValueFinder(item.product_att_value, "Fingerprint"),
        //battery
        batteryCapacity: String(attLongValue(item.product_att_value, "Battery Capacity")),
        ["Battery Type"]: attValueFinder(item.product_att_value, "Battery Type"),
        fastCharge: (String(attValueFinder(item.product_att_value, "FastCharge")) == "true") ? true : false,
        chargingPower: String(attLongValue(item.product_att_value, "FastCharge Power")),
        removable: (String(attValueFinder(item.product_att_value, "Removable ‌Battery")) == "true") ? true : false,
        reverseCharging: (String(attValueFinder(item.product_att_value, "Reverse Charging")) == "true") ? true : false,
        wirelessCharge: (String(attValueFinder(item.product_att_value, "Wireless Charge")) == "true") ? true : false,
        moreDetails: String(attLongValue(item.product_att_value, "Battery More Info")),
        //images 3dimageID
        idproduct: String(attLongValue(item.product_att_value, "REVIEW3 ID")),
        //materials
        Width: String(attLongValue(item.product_att_value, "Width")),
        length: String(attLongValue(item.product_att_value, "Height")),
        Thickness: String(attLongValue(item.product_att_value, "Thickness")),
        Weight: String(attLongValue(item.product_att_value, "Weight")),
        ["Materials"]: attValueFinder(item.product_att_value, "Materials"),
        ["Resistance Certificates"]: attValueFinder(item.product_att_value, "Resistance Certificates"),
        Color: attValueFinder(item.product_att_value, "Color"),
        //software
        ["OS"]: attValueFinder(item.product_att_value, "OS"),
        ["OS Ver"]: attValueFinder(item.product_att_value, "OS Ver"),
        googleService: (String(attValueFinder(item.product_att_value, "Google Service - Official")) == "true") ? true : false,
        ["Framework"]: attValueFinder(item.product_att_value, "Framework"),
        startDate: '',
        //sound
        ["Speakers Count"]: attValueFinder(item.product_att_value, "Speakers Count"),
        dolby: (String(attValueFinder(item.product_att_value, "Dolby")) == "true") ? true : false,
        noiseCancellation: (String(attValueFinder(item.product_att_value, "Noise Cancellation")) == "true") ? true : false,
        audio: (String(attValueFinder(item.product_att_value, "Hi-Res Audio")) == "true") ? true : false,
        stereoSpeakers: (String(attValueFinder(item.product_att_value, "Stereo Speakers")) == "true") ? true : false,
        moreDetailsSound: String(attLongValue(item.product_att_value, "Sound More Info")),
        //box
        batteryCharger: false,
        extraFrame: false,
        glass: false,
        chargingCable: false,
        handsfree: false,
        moreDetailsBox: '',
        //images
        //images taken by phone
        mediaData: mediaPreparer(item),
        // mainImage: {},
        rearBackgroundImage: {},
        galleryImages: [],
        videos: [],
        //file: '',
        //camera firsitem
        //   title: '',
        //   sensor: '',
        //   type: '',
        //   aperture: '',
        //   iso: '',
        //   pixelSize: '',
        //   pixelBinning: '',
        //   sensorSize: '',
        //selfi camera
        ["SelfieCam Resolution"]: String(attLongValue(item.product_att_value, "SelfieCam Resolution")),
        Sensor_selfi: String(attLongValue(item.product_att_value, "SelfieCam Sensor")),
        Type_selfi: String(attLongValue(item.product_att_value, "SelfieCam Sensor Type")),
        Aperture_selfi: String(attLongValue(item.product_att_value, "SelfieCam Aperture")),
        ISO_selfi: String(attLongValue(item.product_att_value, "SelfieCam ISO")),
        PixelSize_selfi: String(attLongValue(item.product_att_value, "SelfieCam Pixel Size")),
        SensorSize_selfi: String(attLongValue(item.product_att_value, "SelfieCam Sensor Size")),
        //otherData in  camera
        ["Flash Type"]: attValueFinder(item.product_att_value, "Flash Type"),
        opticalStabilization: (String(attValueFinder(item.product_att_value, "Optical Stabilization")) == "true") ? true : false,
        slowMotionVideo: (String(attValueFinder(item.product_att_value, "Slow Motion Video")) == "true") ? true : false,
        ["Slow Motion Video fps"]: String(attValueFinder(item.product_att_value, "Slow Motion Video fps")),
        att_value_relation: item.att_value_relation?.length > 0 ? attValueRelationDataPreparer(item) : [],
        possibilities: String(attLongValue(item.product_att_value, "Camera Features")),
        additionalFeatures: String(attLongValue(item.product_att_value, "SelfieCam Features")),
        otherFacilities: String(attLongValue(item.product_att_value, "Camera More details")),
        priceable: priceable(item)
    }
    return cleanedData
};