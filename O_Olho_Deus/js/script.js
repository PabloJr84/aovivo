// Acessando a webcam
const webcamElement = document.getElementById('webcam');

async function setupWebcam() {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true });
            webcamElement.srcObject = stream;
        } catch (error) {
            console.error('Erro ao acessar a webcam:', error);
        }
    } else {
        console.error('Webcam não suportada neste navegador.');
    }
}

// Inicialização
setupWebcam();
