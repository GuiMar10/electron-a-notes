const { app } = require('electron')
require('electron-reload')(__dirname);
const { MicaBrowserWindow } = require('mica-electron');

const createWindow = () => {
    const win = new MicaBrowserWindow({
        width: 800,
        height: 600,
        minWidth: 500,
        minHeight: 300,
        resizable: true,
        frame: false,
        title: 'Notes',
        icon: './images/icon.ico',
    })

    win.setDarkTheme();
    win.setRoundedCorner();
    win.setMicaAcrylicEffect()
    win.loadFile('./index.html')
}

const { pipeline } = require('@huggingface/transformers');

async function useIntelligence() {
    // Allocate a pipeline for sentiment-analysis
    const pipe = await pipeline('sentiment-analysis');

    const out = await pipe('I hate transformers!');
    console.log(out)
}

app.whenReady().then(async () => {
    createWindow()
    await useIntelligence()
})