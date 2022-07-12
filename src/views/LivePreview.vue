<template>
  <div class="live-preview">
    <div class="live">
        <img src="https://www.kindpng.com/picc/m/76-766858_recording-icon-png-transparent-png.png" alt="record-icon" />
        <span>Live Preview</span>
    </div>
    <div v-if="$store.state.recordCamera == false" class="record-card"></div>
    <video v-else autoplay></video>
    <div class="recording">
        <button @click="$store.dispatch('stopRecording')">{{$store.state.recordCamera ? 'Stop' : 'Start'}} Recording</button>
    </div>
  </div>
</template>

<script>
export default {
    name: "LivePreview"
}
</script>

<style>
.live-preview {
    width: 50%;
    margin: 0 auto;
}

.live {
    display: flex;
    justify-content: start;
    align-items: center;
    margin-top: 30px;
    margin-bottom: 5px;
}

.live img {
    width: 12px;
    height: 12px;
    margin-right: 5px;
}

.record-card{
    width: 100%;
    height: 400px;
    border-radius: 5px;
    background-color: rgba(0, 36, 66, 0.8);
    margin-bottom: 30px;
}

.recording {
    display: flex;
    justify-content: center;
    align-items: center;
}

.recording button {
    width: 150px;
    height: 35px;
    background-color: lightblue;
    color: white;
    border-radius: 20px;
    border: none;
    cursor: pointer;
}
</style>